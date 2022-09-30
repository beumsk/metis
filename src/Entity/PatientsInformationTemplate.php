<?php

namespace App\Entity;

use App\Repository\PatientsInformationTemplateRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PatientsInformationTemplateRepository::class)]
class PatientsInformationTemplate
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $order = null;

    #[ORM\Column(nullable: true)]
    private ?int $block = null;

    #[ORM\Column(nullable: true)]
    private ?int $required = null;

    #[ORM\Column]
    private ?int $edit_type = null;

    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrder(): ?int
    {
        return $this->order;
    }

    public function setOrder(?int $order): self
    {
        $this->order = $order;

        return $this;
    }

    public function getBlock(): ?int
    {
        return $this->block;
    }

    public function setBlock(?int $block): self
    {
        $this->block = $block;

        return $this;
    }

    public function getRequired(): ?int
    {
        return $this->required;
    }

    public function setRequired(?int $required): self
    {
        $this->required = $required;

        return $this;
    }

    public function getEditType(): ?int
    {
        return $this->edit_type;
    }

    public function setEditType(int $edit_type): self
    {
        $this->edit_type = $edit_type;

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
