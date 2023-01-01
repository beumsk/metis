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

    // * @ORM\ManyToOne(targetEntity="FollowUpReport", inversedBy="indicators")
    // * @ORM\JoinColumn(name="fore_id", referencedColumnName="fore_id", onDelete="CASCADE")
    #[ORM\ManyToOne(targetEntity: "FollowupReports", inversedBy: 'indicators')]
    #[ORM\JoinColumn(name: "fore_id", referencedColumnName: "id", nullable: true, onDelete: "SET NULL")]
    private ?FollowupReports $FollowupReports = null;

    #[ORM\Column(nullable: true)]
    private ?int $value = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
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

    public function getComment()
    {
        return $this->comment;
    }

    public function setComment($comment): self
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

    public function getFollowupReports(): ?FollowupReports
    {
        return $this->FollowupReports;
    }

    public function setFollowupReports(?FollowupReports $FollowupReports): self
    {
        $this->FollowupReports = $FollowupReports;

        return $this;
    }
}
