<?php

namespace App\Entity;

use App\Repository\ContactsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactsRepository::class)]
class Contacts
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastname = null;

    #[ORM\Column]
    private ?int $type = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $url = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\ManyToOne(targetEntity: 'Contacts', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "orga_id", referencedColumnName: "id", nullable: true, onDelete: "SET NULL")]
    private  $orga = null;


    // #[ORM\OneToMany(targetEntity: "Contacts", mappedBy: "organisation", orphanRemoval: true, cascade: ["all"])]
    // private $cont;


    // public function addContact(Contacts $contacts)
    // {
    //     $this->cont[] = $cont;

    //     return $this;
    // }


    // public function removeContact(Contacts $contacts)
    // {
    //     $this->cont->removeElement($contacts);
    // }


    // public function getContacts()
    // {
    //     return $this->contacts;
    // }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getDeletedAt(): ?\DateTimeInterface
    {
        return $this->deleted_at;
    }

    public function setDeletedAt(?\DateTimeInterface $deleted_at): self
    {
        $this->deleted_at = $deleted_at;

        return $this;
    }

    public function getOrga()
    {
        return $this->orga;
    }

    public function setOrga(?Contacts $orga): self
    {
        $this->orga = $orga;

        return $this;
    }
}
