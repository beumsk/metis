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
    private ?int $order_template = null;

    #[ORM\Column(nullable: true)]
    private ?int $block = null;

    #[ORM\Column(nullable: true)]
    private ?int $required = null;

    #[ORM\Column]
    private ?int $edit_type = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderTemplate(): ?int
    {
        return $this->order_template;
    }

    public function setOrderTemplate(?int $order_template): self
    {
        $this->order_template = $order_template;

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
}
