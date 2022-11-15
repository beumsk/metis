<?php

namespace App\Entity;

use App\Repository\PatientsPlacesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PatientsPlacesRepository::class)]
class PatientsPlaces
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $inaccurate = null;



    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $start = null;

    #[ORM\Column(nullable: true)]
    private ?int $start_inaccurate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $end = null;

    #[ORM\Column(nullable: true)]
    private ?int $end_inaccurate = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_highlight = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_streetplace = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_refaddress = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\ManyToOne]
    private ?Contacts $cont = null;



    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    #[ORM\ManyToOne]
    private ?Patients $pati = null;

    #[ORM\ManyToOne(targetEntity: Contacts::class, inversedBy: 'occupants')]
    #[ORM\JoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private ?Contacts $place = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInaccurate(): ?int
    {
        return $this->inaccurate;
    }

    public function setInaccurate(?int $inaccurate): self
    {
        $this->inaccurate = $inaccurate;

        return $this;
    }



    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(?\DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getStartInaccurate(): ?int
    {
        return $this->start_inaccurate;
    }

    public function setStartInaccurate(?int $start_inaccurate): self
    {
        $this->start_inaccurate = $start_inaccurate;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(?\DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getEndInaccurate(): ?int
    {
        return $this->end_inaccurate;
    }

    public function setEndInaccurate(?int $end_inaccurate): self
    {
        $this->end_inaccurate = $end_inaccurate;

        return $this;
    }

    public function getIsHightlight(): ?int
    {
        return $this->is_highlight;
    }

    public function setIsHightlight(?int $is_highlight): self
    {
        $this->is_highlight = $is_highlight;

        return $this;
    }

    public function getIsStreetplace(): ?int
    {
        return $this->is_streetplace;
    }

    public function setIsStreetplace(?int $is_streetplace): self
    {
        $this->is_streetplace = $is_streetplace;

        return $this;
    }

    public function getIsRefaddress(): ?int
    {
        return $this->is_refaddress;
    }

    public function setIsRefaddress(?int $is_refaddress): self
    {
        $this->is_refaddress = $is_refaddress;

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



    public function getSugg(): ?Suggestions
    {
        return $this->sugg;
    }

    public function setSugg(?Suggestions $sugg): self
    {
        $this->sugg = $sugg;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
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

    public function getPlace(): ?Contacts
    {
        return $this->place;
    }

    public function setPlace(?Contacts $place): self
    {
        $this->place = $place;

        return $this;
    }
}
