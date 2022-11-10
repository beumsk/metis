<?php

namespace App\Utils;

use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\PatientsInformation;
use App\Entity\Suggestions;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

trait InfosCallsTrait
{


    /**
     * @var goalsByBlock|null
     */
    protected $goalsByBlock;

    /**
     * @var followUpReportsByBlock|null
     */
    protected $followUpReportsByBlock;


    /**
     * goalsInformation constructor.
     */
    public function __construct()
    {
        $this->setGoalsInformation([]);
        $this->setFollowupInformation([]);
    }

    /**
     * @return Collection|[]
     */
    public function getGoalsInformation(): Collection
    {
        if (is_null($this->goalsByBlock)) {
            $this->goalsByBlock = new ArrayCollection();
        }
        return $this->goalsByBlock;
    }

    /**
     * @return $this
     */
    public function setGoalsInformation(array  $goalsByBlock): self
    {
        if (is_null($this->goalsByBlock)) {
            $this->goalsByBlock = new ArrayCollection();
        }
        $this->goalsByBlock[] = $goalsByBlock;

        return $this;
    }

    /**
     * @return Collection|[]
     */
    public function getFollowupInformation(): Collection
    {
        if (is_null($this->followUpReportsByBlock)) {
            $this->followUpReportsByBlock = new ArrayCollection();
        }
        return $this->followUpReportsByBlock;
    }

    /**
     * @return $this
     */
    public function setFollowupInformation(array $followUpReportsByBlock): self
    {
        if (is_null($this->followUpReportsByBlock)) {
            $this->followUpReportsByBlock = new ArrayCollection();
        }
        $this->followUpReportsByBlock[] = $followUpReportsByBlock;

        return $this;
    }
}
