<?php

namespace App\Utils;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\PatientsInformation;
use App\Entity\Suggestions;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

trait InfosPatientTrait
{
    /**
     * @var PatientsInformation|null
     */
    #[ORM\OrderBy(["start" => "DESC"])]
    protected $patientsInformation;

    /**
     * @var suggestionByBlock|null
     */
    protected $suggestionByBlock;

    /**
     * patientsInformation constructor.
     */
    public function __construct()
    {
        $this->setPatientInformation(new PatientsInformation());
        $this->setSuggestionForBlock(new Suggestions());
    }

    /**
     * @return Collection|Suggestions[]
     */
    public function getSuggestionsByBlock()
    {
        if (is_null($this->suggestionByBlock)) {
            $this->suggestionByBlock;
        }
        return $this->suggestionByBlock;
    }

    /**
     * @return $this
     */
    public function setSuggestionsByBlock($suggestionByBlock): self
    {
        if (is_null($this->suggestionByBlock)) {

            $this->suggestionByBlock = new ArrayCollection();
        }


        $this->suggestionByBlock = $suggestionByBlock;

        return $this;
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
