<?php

namespace App\Entity;


use App\Repository\FollowUpReportsActivitiesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowUpReportsActivitiesRepository::class)]
class FollowupReportsActivities
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_idr_step = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?FollowupReports $fore = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIsIdrStep(): ?int
    {
        return $this->is_idr_step;
    }

    public function setIsIdrStep(?int $is_idr_step): self
    {
        $this->is_idr_step = $is_idr_step;

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
}
