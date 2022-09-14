<?php

namespace App\Entity;

use App\Repository\FollowupReportsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowupReportsRepository::class)]
class FollowupReports
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $activity_type = null;

    #[ORM\Column]
    private ?int $report_type = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $report_date = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $last_update = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $creation_date = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_hightlight = null;

    #[ORM\Column(nullable: true)]
    private ?int $no_care = null;

    #[ORM\Column(nullable: true)]
    private ?int $no_activities = null;

    #[ORM\Column(nullable: true)]
    private ?int $no_indicators = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $duration = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Patients $pati = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActivityType(): ?int
    {
        return $this->activity_type;
    }

    public function setActivityType(int $activity_type): self
    {
        $this->activity_type = $activity_type;

        return $this;
    }

    public function getReportType(): ?int
    {
        return $this->report_type;
    }

    public function setReportType(int $report_type): self
    {
        $this->report_type = $report_type;

        return $this;
    }

    public function getReportDate(): ?\DateTimeInterface
    {
        return $this->report_date;
    }

    public function setReportDate(?\DateTimeInterface $report_date): self
    {
        $this->report_date = $report_date;

        return $this;
    }

    public function getLastUpdate(): ?\DateTimeInterface
    {
        return $this->last_update;
    }

    public function setLastUpdate(\DateTimeInterface $last_update): self
    {
        $this->last_update = $last_update;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeInterface
    {
        return $this->creation_date;
    }

    public function setCreationDate(\DateTimeInterface $creation_date): self
    {
        $this->creation_date = $creation_date;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getIsHightlight(): ?int
    {
        return $this->is_hightlight;
    }

    public function setIsHightlight(?int $is_hightlight): self
    {
        $this->is_hightlight = $is_hightlight;

        return $this;
    }

    public function getNoCare(): ?int
    {
        return $this->no_care;
    }

    public function setNoCare(?int $no_care): self
    {
        $this->no_care = $no_care;

        return $this;
    }

    public function getNoActivities(): ?int
    {
        return $this->no_activities;
    }

    public function setNoActivities(?int $no_activities): self
    {
        $this->no_activities = $no_activities;

        return $this;
    }

    public function getNoIndicators(): ?int
    {
        return $this->no_indicators;
    }

    public function setNoIndicators(?int $no_indicators): self
    {
        $this->no_indicators = $no_indicators;

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

    public function getDuration(): ?\DateTimeInterface
    {
        return $this->duration;
    }

    public function setDuration(?\DateTimeInterface $duration): self
    {
        $this->duration = $duration;

        return $this;
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
}
