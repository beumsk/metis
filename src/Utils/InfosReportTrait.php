<?php

namespace App\Utils;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\FollowupReportsActivities;
use App\Entity\FollowupReportsIndicators;
use App\Entity\FollowupGoals;
use App\Entity\Suggestions;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

trait InfosReportTrait
{
    /**
     * @var FollowupReportsActivities|null
     */
    protected $followupReportsCare;

    /**
     * @var FollowupReportsActivities|null
     */
    protected $followupReportsActivities;

    /**
     * @var FollowupReportsActivities|null
     */
    protected $followupReportsIndicators;

    /**
     * @var FollowupGoals|null
     */
    protected $followupGoals;

    /**
     * patientsInformation constructor.
     */
    public function __construct()
    {
        $this->setFollowupReportsCare(new FollowupReportsActivities());
        $this->setFollowupReportsActivities(new FollowupReportsActivities());
        $this->setFollowupReportsIndicators(new FollowupReportsIndicators());
        $this->setFollowupReportsGoals(new FollowupGoals());
    }

    /**
     * @return Collection|FollowupReportsActivities[]
     */
    public function getFollowupReportsGoals(): Collection
    {
        if (is_null($this->followupGoals)) {
            $this->followupGoals = new ArrayCollection();
        }
        return $this->followupGoals;
    }

    /**
     * @return $this
     */
    public function setFollowupReportsGoals(FollowupGoals $followupGoals): self
    {
        if (is_null($this->followupGoals)) {
            $this->followupGoals = new ArrayCollection();
        }
        $this->followupGoals[] = $followupGoals;

        return $this;
    }



    /**
     * @return Collection|FollowupReportsActivities[]
     */
    public function getFollowupReportsCare(): Collection
    {
        if (is_null($this->followupReportsCare)) {
            $this->followupReportsCare = new ArrayCollection();
        }
        return $this->followupReportsCare;
    }

    /**
     * @return $this
     */
    public function setFollowupReportsCare(FollowupReportsActivities $followupReportsCare): self
    {
        if (is_null($this->followupReportsCare)) {
            $this->followupReportsCare = new ArrayCollection();
        }
        $this->followupReportsCare[] = $followupReportsCare;

        return $this;
    }

    /**
     * @return Collection|FollowupReportsActivities[]
     */
    public function getFollowupReportsActivities(): Collection
    {
        if (is_null($this->followupReportsActivities)) {
            $this->followupReportsActivities = new ArrayCollection();
        }
        return $this->followupReportsActivities;
    }

    /**
     * @return $this
     */
    public function setFollowupReportsActivities(FollowupReportsActivities $followupReportsActivities): self
    {
        if (is_null($this->followupReportsActivities)) {
            $this->followupReportsActivities = new ArrayCollection();
        }
        $this->followupReportsActivities[] = $followupReportsActivities;

        return $this;
    }

    /**
     * @return Collection|FollowupReportsActivities[]
     */
    public function getFollowupReportsIndicators(): Collection
    {
        if (is_null($this->followupReportsIndicators)) {
            $this->followupReportsIndicators = new ArrayCollection();
        }
        return $this->followupReportsIndicators;
    }

    /**
     * @return $this
     */
    public function setFollowupReportsIndicators(FollowupReportsIndicators $followupReportsIndicators): self
    {
        if (is_null($this->followupReportsIndicators)) {
            $this->followupReportsIndicators = new ArrayCollection();
        }
        $this->followupReportsIndicators[] = $followupReportsIndicators;

        return $this;
    }
}
