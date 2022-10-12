<?php

namespace App\Entity;

use App\Repository\InformationTemplateBlockRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InformationTemplateBlockRepository::class)]
class InformationTemplateBlock
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Suggestions $sugb = null;

    #[ORM\Column(nullable: true)]
    private ?int $block_order = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $block_type = null;

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

    public function getBlockType(): ?string
    {
        return $this->block_type;
    }

    public function setBlockType(?string $block_type): self
    {
        $this->block_type = $block_type;

        return $this;
    }
}
