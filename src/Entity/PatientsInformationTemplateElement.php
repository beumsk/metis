<?php

namespace App\Entity;

use App\Repository\PatientsInformationTemplateElementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PatientsInformationTemplateElementRepository::class)]
class PatientsInformationTemplateElement
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\ManyToOne]
    private ?PatientsInformationTemplateBlock $pitb = null;


    #[ORM\ManyToOne]
    private ?Suggestions $suge = null;


    #[ORM\ManyToOne]
    private ?Suggestions $sugv = null;


    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $required = null;


    #[ORM\Column(nullable: true)]
    private ?int $element_order = null;


    #[ORM\Column]
    private ?int $edit_type = null;


    #[ORM\Column]
    private ?int $type = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPitb(): ?PatientsInformationTemplateBlock
    {
        return $this->pitb;
    }

    public function setPitb(?PatientsInformationTemplateBlock $pitb): self
    {
        $this->pitb = $pitb;

        return $this;
    }

    public function getSuge(): ?Suggestions
    {
        return $this->suge;
    }

    public function setSuge(?Suggestions $suge): self
    {
        $this->suge = $suge;

        return $this;
    }

    public function getSugv(): ?Suggestions
    {
        return $this->sugv;
    }

    public function setSugv(?Suggestions $sugv): self
    {
        $this->sugv = $sugv;

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

    public function getElementOrder(): ?int
    {
        return $this->element_order;
    }

    public function setElementOrder(?int $element_order): self
    {
        $this->element_order = $element_order;

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

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }
}
