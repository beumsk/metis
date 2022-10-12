<?php

namespace App\Entity;

use App\Repository\PatientsPatientsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PatientsPatientsRepository::class)]
class PatientsPatients
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: 'Patients', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "tapa_id", referencedColumnName: "id", nullable: true)]
    private ?Patients $tapa = null;

    #[ORM\ManyToOne(targetEntity: 'Patients', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "orpa_id", referencedColumnName: "id", nullable: true)]
    private ?Patients $orpa = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $link_description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $start = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $end = null;

    #[ORM\Column]
    private ?int $is_highlight = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTapa(): ?Patients
    {
        return $this->tapa;
    }

    public function setTapa(?Patients $tapa): self
    {
        $this->tapa = $tapa;

        return $this;
    }

    public function getOrpa(): ?Patients
    {
        return $this->orpa;
    }

    public function setOrpa(?Patients $orpa): self
    {
        $this->orpa = $orpa;

        return $this;
    }

    public function getLinkDescription(): ?string
    {
        return $this->link_description;
    }

    public function setLinkDescription(?string $link_description): self
    {
        $this->link_description = $link_description;

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

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(?\DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getIsHighlight(): ?int
    {
        return $this->is_highlight;
    }

    public function setIsHighlight(int $is_highlight): self
    {
        $this->is_highlight = $is_highlight;

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

    public function getSugg(): ?Suggestions
    {
        return $this->sugg;
    }

    public function setSugg(?Suggestions $sugg): self
    {
        $this->sugg = $sugg;

        return $this;
    }
}
