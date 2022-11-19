<?php

namespace App\Entity;

use App\Repository\ContactsInformationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactsInformationRepository::class)]
class ContactsInformation
{
    const INFO_BIRTHDATE = "/patient/contacts/infos/date-de-naissance";
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $value = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\ManyToOne(targetEntity: 'Contacts', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private ?Contacts $cont = null;

    #[ORM\ManyToOne(targetEntity: 'InformationTemplateElement', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "itel_id", referencedColumnName: "id", nullable: true)]
    private ?InformationTemplateElement $itel = null;

    #[ORM\ManyToOne(targetEntity: 'Suggestions', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "sugg_id", referencedColumnName: "id", nullable: true)]
    private ?Suggestions $sugg = null;

    #[ORM\ManyToOne(targetEntity: 'Contacts', inversedBy: 'informations')]
    #[ORM\JoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private ?Contacts $contact = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(?string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

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

    public function getCont(): ?Contacts
    {
        return $this->cont;
    }

    public function setCont(?Contacts $cont): self
    {
        $this->cont = $cont;
        return $this;
    }

    public function getItel(): ?InformationTemplateElement
    {
        return $this->itel;
    }

    public function setItel(?InformationTemplateElement $itel): self
    {
        $this->itel = $itel;

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

    public function getContact(): ?Contacts
    {
        return $this->contact;
    }

    public function setContact(?Contacts $contact): self
    {
        $this->contact = $contact;

        return $this;
    }
}
