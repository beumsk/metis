<?php

namespace App\Entity;

use App\Repository\PatientsInformationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Persistence\ManagerRegistry;

#[ORM\Entity(repositoryClass: PatientsInformationRepository::class)]
class PatientsInformation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\ManyToOne]
    private ?Patients $pati = null;


    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $value = null;


    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $is_confidential = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $is_highlight = null;


    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $start = null;


    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $end = null;


    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;


    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $inaccurate = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $start_inaccurate = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $end_inaccurate = null;


    #[ORM\ManyToOne]
    private ?PatientsInformationTemplateElement $itel = null;

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

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getIsConfidential(): ?int
    {
        return $this->is_confidential;
    }

    public function setIsConfidential(?int $is_confidential): self
    {
        $this->is_confidential = $is_confidential;

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

    public function getSugg(): ?Suggestions
    {
        return $this->sugg;
    }

    public function setSugg(?Suggestions $sugg): self
    {
        $this->sugg = $sugg;

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

    public function getInaccurate(): ?int
    {
        return $this->inaccurate;
    }

    public function setInaccurate(?int $inaccurate): self
    {
        $this->inaccurate = $inaccurate;

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

    public function getEndInaccurate(): ?int
    {
        return $this->end_inaccurate;
    }

    public function setEndInaccurate(?int $end_inaccurate): self
    {
        $this->end_inaccurate = $end_inaccurate;

        return $this;
    }

    public function getItel(): ?PatientsInformationTemplateElement
    {
        // $template = new PatientsInformationTemplateElement;
        // // $patient = $doctrine->getRepository(PatientsInformationTemplateElement::class)->find($this->itel->getId());


        // // dd($patient);
        // if (is_object($this->itel)) {
        //     return $this->itel;
        // } else {
        //     $template = new PatientsInformationTemplateElement;
        //     return $template->test = null;
        // }
        return $this->itel;
    }

    public function setItel(?PatientsInformationTemplateElement $itel): self
    {

        $this->itel = $itel;

        return $this;
    }
}
