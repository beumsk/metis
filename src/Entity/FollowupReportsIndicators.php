<?php

namespace App\Entity;

use App\Repository\FollowupReportsIndicatorsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowupReportsIndicatorsRepository::class)]
class FollowupReportsIndicators
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $value = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $comment = null;

    #[ORM\ManyToOne(targetEntity: 'FollowupReports', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "fore_id", referencedColumnName: "id", nullable: true, onDelete: "SET NULL")]
    private ?FollowupReports $fore = null;

    #[ORM\ManyToOne(targetEntity: 'Indicators', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "indi_id", referencedColumnName: "id", nullable: true, onDelete: "SET NULL")]
    private ?Indicators $indi = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function setValue(?int $value): self
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

    public function getFore(): ?FollowupReports
    {
        return $this->fore;
    }

    public function setFore(?FollowupReports $fore): self
    {
        $this->fore = $fore;

        return $this;
    }

    public function getIndi(): ?Indicators
    {
        return $this->indi;
    }

    public function setIndi(?Indicators $indi): self
    {
        $this->indi = $indi;

        return $this;
    }
}
