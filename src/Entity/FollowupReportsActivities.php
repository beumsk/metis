<?php

namespace App\Entity;


use App\Repository\FollowupReportsActivitiesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowupReportsActivitiesRepository::class)]
class FollowupReportsActivities
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_idr_step = null;

    #[ORM\ManyToOne]
    private ?FollowupReports $fore = null;

    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;

    #[ORM\ManyToMany(targetEntity: Contacts::class)]
    #[ORM\JoinTable(name: "followup_report_activity_place")]
    #[ORM\JoinColumn(name: "fora_id", referencedColumnName: "id", nullable: true)]
    #[ORM\InverseJoinColumn(name: "plac_id", referencedColumnName: "id", nullable: true)]
    private Collection $places;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: "sugg_id", referencedColumnName: "id", nullable: true)]
    private ?Suggestions $activity = null;


    #[ORM\ManyToMany(targetEntity: Contacts::class)]
    #[ORM\JoinTable(name: "followup_report_activity_contact")]
    #[ORM\JoinColumn(name: "fora_id", referencedColumnName: "id", nullable: true)]
    #[ORM\InverseJoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private Collection $contacts;

    #[ORM\ManyToOne(targetEntity: FollowupReports::class, inversedBy: 'activities')]
    #[ORM\JoinColumn(name: "fore_id", referencedColumnName: "id", nullable: true)]
    private ?FollowupReports $followupReports = null;

    public function __construct()
    {
        $this->places = new ArrayCollection();
        $this->contacts = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description): self
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

    public function getSugg(): ?Suggestions
    {

        // dd($sugg);
        return $this->sugg;
    }

    public function setSugg(?Suggestions $sugg): self
    {

        $this->sugg = $sugg;
        return $this;
    }

    /**
     * @return Collection<int, Contacts>
     */
    public function getPlaces()
    {
        return $this->places;
    }

    public function addPlace(Contacts $place): self
    {
        if (!$this->places->contains($place)) {
            $this->places->add($place);
        }

        return $this;
    }

    public function removePlace(Contacts $place): self
    {
        $this->places->removeElement($place);

        return $this;
    }

    public function getActivity(): ?Suggestions
    {
        return $this->activity;
    }

    public function setActivity(?Suggestions $activity): self
    {
        $this->activity = $activity;

        return $this;
    }

    /**
     * @return Collection<int, Contacts>
     */
    public function getContacts()
    {
        return $this->contacts;
    }

    public function addContact(Contacts $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts->add($contact);
        }

        return $this;
    }

    public function removeContact(Contacts $contact): self
    {
        $this->contacts->removeElement($contact);

        return $this;
    }

    public function getFollowupReports(): ?FollowupReports
    {
        return $this->followupReports;
    }

    public function setFollowupReports(?FollowupReports $followupReports): self
    {
        $this->followupReports = $followupReports;

        return $this;
    }
}
