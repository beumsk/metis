<?php

namespace App\Utils;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\PatientsInformation;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

trait InfosPatientTrait
{
    /**
     * @var PatientsInformation|null
     */
    protected $patientsInformation;

    /**
     * patientsInformation constructor.
     */
    public function __construct()
    {
        $this->setPatientInformation(new PatientsInformation());
    }

    /**
     * @return Collection|PatientsInformation[]
     */
    public function getPatientInformation(): Collection
    {
        if (is_null($this->patientsInformation)) {
            $this->patientsInformation = new ArrayCollection();
        }
        return $this->patientsInformation;
    }

    /**
     * @return $this
     */
    public function setPatientInformation(PatientsInformation $patientsInformation): self
    {
        if (is_null($this->patientsInformation)) {
            $this->patientsInformation = new ArrayCollection();
        }
        $this->patientsInformation[] = $patientsInformation;

        return $this;
    }
}
