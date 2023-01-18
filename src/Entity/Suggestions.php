<?php

namespace App\Entity;

use App\Repository\SuggestionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\SmallIntType;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SuggestionsRepository::class)]
class Suggestions
{

    const PATH_CARE = '/patient/suivi/soins';
    const PATH_ACTIVITY = '/patient/suivi/activites';
    const PATH_PROGRAM = '/patient/suivi/programme';
    const PATH_HOME_LOCATION = '/patient/lieu/type/domicile-legal';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;



    #[ORM\ManyToOne]
    private ?Suggestions $parentSugg = null;


    #[ORM\Column(length: 255, nullable: false)]
    private ?string $value = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $path = null;


    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $path_string = null;


    #[ORM\Column(nullable: true)]
    private ?bool $require_custom_value = null;


    #[ORM\Column(nullable: true)]
    private ?bool $is_locked = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $attributes = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $default_comment = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?bool $is_deleted = null;

    #[ORM\OneToMany(mappedBy: 'suggestion', targetEntity: ContactsInformation::class)]
    private Collection $tags;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
    }


    #[ORM\OneToMany(mappedBy: 'suge', targetEntity: PatientsInformationTemplateElement::class)]

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(?string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getPathString(): ?string
    {
        return $this->path_string;
    }

    public function setPathString(string $path_string): self
    {
        $this->path_string = $path_string;

        return $this;
    }

    public function getRequireCustomValue(): ?bool
    {
        return $this->require_custom_value;
    }

    public function setRequireCustomValue(?bool $require_custom_value): self
    {
        $this->require_custom_value = $require_custom_value;

        return $this;
    }

    public function getIsLocked(): ?bool
    {
        return $this->is_locked;
    }

    public function setIsLocked(?bool $is_locked): self
    {
        $this->is_locked = $is_locked;

        return $this;
    }

    public function getAttributes(): ?string
    {
        return $this->attributes;
    }

    public function setAttributes(?string $attributes): self
    {
        $this->attributes = $attributes;

        return $this;
    }

    public function getDefaultComment(): ?string
    {
        return $this->default_comment;
    }

    public function setDefaultComment(?string $default_comment): self
    {
        $this->default_comment = $default_comment;

        return $this;
    }

    public function getIsDeleted(): ?bool
    {
        return $this->is_deleted;
    }

    public function setIsDeleted(?bool $is_deleted): self
    {
        $this->is_deleted = $is_deleted;

        return $this;
    }

    public function getParentSugg(): ?Suggestions
    {
        return $this->parentSugg;
    }

    public function setParentSugg(?Suggestions $parentSugg): self
    {
        $this->parentSugg = $parentSugg;

        return $this;
    }

    /**
     * @return Collection<int, ContactsInformation>
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(ContactsInformation $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags->add($tag);
            $tag->setSuggestion($this);
        }

        return $this;
    }

    public function removeTag(ContactsInformation $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            // set the owning side to null (unless already changed)
            if ($tag->getSuggestion() === $this) {
                $tag->setSuggestion(null);
            }
        }

        return $this;
    }
}
