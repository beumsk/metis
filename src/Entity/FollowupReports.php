<?php

namespace App\Entity;

use App\Entity\FollowupGoals;
use App\Repository\FollowupReportsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Utils\InfosReportTrait;

#[ORM\Entity(repositoryClass: FollowupReportsRepository::class)]
class FollowupReports
{
    const ACTIVITY_STREET = 1;
    const ACTIVITY_CALL_OUT = 2;
    const ACTIVITY_MEETING = 3;
    const ACTIVITY_CALL_IN = 4;

    const REPORT_TYPE_RENC = 1;
    const REPORT_TYPE_VU = 2;
    const REPORT_TYPE_REPOS = 3;
    const REPORT_TYPE_SEARCH = 4;

    const DEFAULT_REPORT_CONTENT = "<b><u>Nom(s) du travailleur :</u></b>

<b><u>Résumé :</u></b>

<b><u>Bien-être :</u></b>

<b><u>Logement :</u></b>

<b><u>Médical :</u></b>

<b><u>Social :</u></b>
";
    const DEFAULT_COMMENT_MISSING_ACTION = "[AUTO] - Pas de réponse ou absent";
    const DEFAULT_COMMENT_CANCEL_ACTION = "[AUTO] - Appel annulé";

    use InfosReportTrait;
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $activity_type = null;

    #[ORM\Column(nullable: true)]
    private ?int $report_type = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $report_date = null;


    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $last_update = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $creation_date = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $content = null;

    #[ORM\Column(nullable: true)]
    private ?bool $is_highlight = null;

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
    private ?Patients $pati = null;

    #[ORM\ManyToOne]
    private ?User $user = null;
    // #[ORM\ManyToOne(targetEntity: 'User', cascade: ["all"], fetch: "EAGER")]
    // #[ORM\JoinColumn(name: "user_id", referencedColumnName: "id", nullable: true)]


    #[ORM\ManyToOne(targetEntity: 'Contacts', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private ?Contacts $plac = null;

    #[ORM\ManyToMany(targetEntity: Contacts::class)]
    #[ORM\JoinTable(name: "followup_report_contact")]
    #[ORM\JoinColumn(name: "fore_id", referencedColumnName: "id", nullable: true)]
    #[ORM\InverseJoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private Collection $cont;

    #[ORM\ManyToMany(targetEntity: FollowupGoals::class)]
    private Collection $fogo;


    #[ORM\ManyToOne(targetEntity: 'Patients', inversedBy: 'fore')]
    #[ORM\JoinColumn(name: "pati_id", referencedColumnName: "id", nullable: true, onDelete: "SET NULL")]
    private ?Patients $patient = null;

    #[ORM\OneToMany(mappedBy: 'FollowupReports', targetEntity: FollowupReportsIndicators::class, cascade: ["all"])]
    private Collection $indicators;

    #[ORM\ManyToMany(targetEntity: IndicatorsGroups::class, inversedBy: 'followUpReports')]
    #[ORM\JoinTable(name: "followup_report_indicators_groups")]
    #[ORM\JoinColumn(name: "id", referencedColumnName: "id", nullable: true)]
    #[ORM\InverseJoinColumn(name: "igrp_id", referencedColumnName: "id", nullable: true)]
    private Collection $indicatorsGroups;

    #[ORM\OneToMany(mappedBy: 'followupReports', targetEntity: FollowupReportsActivities::class, orphanRemoval: true, cascade: ["all"])]
    private Collection $activities;

    public function __construct()
    {
        $this->cont = new ArrayCollection();
        $this->fogo = new ArrayCollection();
        $this->indicators = new ArrayCollection();
        $this->indicatorsGroups = new ArrayCollection();
        $this->activities = new ArrayCollection();
    }

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

    public function getIsHightlight(): ?bool
    {
        return $this->is_highlight;
    }

    public function setIsHightlight(?bool $is_highlight): self
    {
        $this->is_hightlight = $is_highlight;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPlac(): ?Contacts
    {
        return $this->plac;
    }

    public function setPlac(?Contacts $plac): self
    {
        $this->plac = $plac;

        return $this;
    }

    /**
     * @return Collection<int, Contacts>
     */
    public function getCont(): Collection
    {
        return $this->cont;
    }

    public function setCont(?Contacts $cont): self
    {
        $this->cont = $cont;

        return $this;
    }

    public function addCont(Contacts $cont): self
    {
        if (!$this->cont->contains($cont)) {
            $this->cont->add($cont);
        }

        return $this;
    }

    public function removeCont(Contacts $cont): self
    {
        $this->cont->removeElement($cont);

        return $this;
    }

    /**
     * @return Collection<int, FollowupGoals>
     */
    public function getfogo(): Collection
    {
        return $this->fogo;
    }

    public function addfogo(FollowupGoals $fogo): self
    {

        if (!$this->fogo->contains($fogo)) {
            $this->fogo->add($fogo);
        }

        return $this;
    }

    public function removefogo(FollowupGoals $fogo): self
    {
        $this->fogo->removeElement($fogo);

        return $this;
    }

    public function getPatient(): ?Patients
    {
        return $this->patient;
    }

    public function setPatient(?Patients $patient): self
    {
        $this->patient = $patient;

        return $this;
    }

    /**
     * @return Collection<int, FollowupReportsIndicators>
     */
    public function getIndicators(): Collection
    {
        return $this->indicators;
    }

    public function addIndicator(FollowupReportsIndicators $indicator): self
    {
        if (!$this->indicators->contains($indicator)) {
            $this->indicators->add($indicator);
            $indicator->setFollowupReports($this);
        }

        return $this;
    }

    public function removeIndicator(FollowupReportsIndicators $indicator): self
    {
        if ($this->indicators->removeElement($indicator)) {
            // set the owning side to null (unless already changed)
            if ($indicator->getFollowupReports() === $this) {
                $indicator->setFollowupReports(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, IndicatorsGroups>
     */
    public function getIndicatorsGroups(): Collection
    {
        return $this->indicatorsGroups;
    }

    public function addIndicatorsGroup(IndicatorsGroups $indicatorsGroup): self
    {
        if (!$this->indicatorsGroups->contains($indicatorsGroup)) {
            $this->indicatorsGroups->add($indicatorsGroup);
        }

        return $this;
    }

    public function removeIndicatorsGroup(IndicatorsGroups $indicatorsGroup): self
    {
        $this->indicatorsGroups->removeElement($indicatorsGroup);

        return $this;
    }

    /**
     * @return Collection<int, FollowupReportsActivities>
     */
    public function getActivities(): Collection
    {

        return $this->activities;
    }

    public function addActivity(FollowupReportsActivities $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities->add($activity);
            $activity->setFollowupReports($this);
        }

        return $this;
    }

    public function removeActivity(FollowupReportsActivities $activity): self
    {
        if ($this->activities->removeElement($activity)) {
            // set the owning side to null (unless already changed)
            if ($activity->getFollowupReports() === $this) {
                $activity->setFollowupReports(null);
            }
        }

        return $this;
    }
}
