<?php

namespace App\Entity;

use App\Repository\PatientsInformationTemplateBlockRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PatientsInformationTemplateBlockRepository::class)]
class PatientsInformationTemplateBlock
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\ManyToOne]
    private ?Suggestions $sugb = null;


    #[ORM\Column(nullable: true)]
    private ?int $block_order = null;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSugb(): ?Suggestions
    {
        return $this->sugb;
    }

    public function setSugb(?Suggestions $sugb): self
    {
        $this->sugb = $sugb;

        return $this;
    }

    public function getBlockOrder(): ?int
    {
        return $this->block_order;
    }

    public function setBlockOrder(?int $block_order): self
    {
        $this->block_order = $block_order;

        return $this;
    }
}
