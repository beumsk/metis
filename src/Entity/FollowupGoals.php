<?php

namespace App\Entity;

use App\Repository\FollowupGoalsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowupGoalsRepository::class)]
class FollowupGoals
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Patients $pati = null;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $parent_fogo = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $title = null;

    #[ORM\Column]
    private ?int $status = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $delete_at = null;

    #[ORM\ManyToOne]
    private ?Contacts $cont = null;

    #[ORM\Column]
    private ?int $type = null;

    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;

    #[ORM\ManyToOne]
    private ?Suggestions $func = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_highlight = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $creation_date = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPati(): ?Patients
    {
        return $this->pati;
    }

    public function setPati(?Patients $pati): self
    {
        $this->pati = $pati;

        return $this;
    }

    public function getParentFogo(): ?self
    {
        return $this->parent_fogo;
    }

    public function setParentFogo(?self $parent_fogo): self
    {
        $this->parent_fogo = $parent_fogo;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDeleteAt(): ?\DateTimeInterface
    {
        return $this->delete_at;
    }

    public function setDeleteAt(?\DateTimeInterface $delete_at): self
    {
        $this->delete_at = $delete_at;

        return $this;
    }

    public function getCont(): ?Contacts
    {
        return $this->cont;
    }

    public function setCont(?Contacts $cont): self
    {
        $this->cont = $cont;

        return $this;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getSugg(): ?Suggestions
    {
        return $this->sugg;
    }

    public function setSugg(?Suggestions $sugg): self
    {
        $this->sugg = $sugg;

        return $this;
    }

    public function getFunc(): ?Suggestions
    {
        return $this->func;
    }

    public function setFunc(?Suggestions $func): self
    {
        $this->func = $func;

        return $this;
    }

    public function getIsHighlight(): ?int
    {
        return $this->is_highlight;
    }

    public function setIsHighlight(?int $is_highlight): self
    {
        $this->is_highlight = $is_highlight;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeInterface
    {
        return $this->creation_date;
    }

    public function setCreationDate(?\DateTimeInterface $creation_date): self
    {
        $this->creation_date = $creation_date;

        return $this;
    }
}
