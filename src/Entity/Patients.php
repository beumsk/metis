<?php

namespace App\Entity;

use App\Repository\PatientsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PatientsRepository::class)]
class Patients
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    private ?int $id = null;


    #[ORM\Column(length: 7, nullable: true)]
    private ?string $hash = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstname = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastname = null;


    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $nicknames = null;


    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTime $birthdate = null;

    #[ORM\Column(nullable: true)]
    private ?int $unknown_year = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $birth_location = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $story = null;

    #[ORM\Column(length: 25, nullable: true)]
    private ?string $status = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $first_contact_date = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\Column]
    private ?int $follow_up_type = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $team = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?bool $is_alive = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $antenna = null;

    #[ORM\OneToMany(mappedBy: 'patient', targetEntity: PatientsContacts::class)]
    private Collection $contacts;

    #[ORM\OneToMany(mappedBy: 'patient', targetEntity: FollowupReports::class)]
    #[ORM\OrderBy(["last_update" => "ASC"])]
    private Collection $fore;

    // #[ORM\OneToMany(mappedBy: 'patients', targetEntity: PatientsInformation::class)]
    // private Collection $informations;

    public function __construct()
    {
        $this->contacts = new ArrayCollection();
        $this->fore = new ArrayCollection();
        // $this->informations = new ArrayCollection();
    }








    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?string $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getHash(): ?string
    {
        return $this->hash;
    }

    public function setHash(?string $hash): self
    {
        $this->hash = $hash;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getNicknames(): ?string
    {
        return $this->nicknames;
    }

    public function setNicknames(string $nicknames): self
    {
        $this->nicknames = $nicknames;

        return $this;
    }

    public function getBirthdate(): ?\DateTime
    {
        return $this->birthdate;
    }

    public function setBirthdate(?\DateTime $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getUnknownYear(): ?int
    {
        return $this->unknown_year;
    }

    public function setUnknownYear(?int $unknown_year): self
    {
        $this->unknown_year = $unknown_year;

        return $this;
    }

    public function getBirthLocation(): ?string
    {
        return $this->birth_location;
    }

    public function setBirthLocation(string $birth_location): self
    {
        $this->birth_location = $birth_location;

        return $this;
    }

    public function getStory(): ?string
    {
        return $this->story;
    }

    public function setStory(string $story): self
    {
        $this->story = $story;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getFirstContactDate(): ?\DateTimeInterface
    {
        return $this->first_contact_date;
    }

    public function setFirstContactDate(?\DateTimeInterface $first_contact_date): self
    {
        $this->first_contact_date = $first_contact_date;

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

    public function getFollowUpType(): ?int
    {
        return $this->follow_up_type;
    }

    public function setFollowUpType(int $follow_up_type): self
    {
        $this->follow_up_type = $follow_up_type;

        return $this;
    }

    public function getTeam(): ?string
    {
        return $this->team;
    }

    public function setTeam(string $team): self
    {
        $this->team = $team;

        return $this;
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

    public function isIsAlive(): ?bool
    {
        return $this->is_alive;
    }

    public function setIsAlive(?bool $is_alive): self
    {
        $this->is_alive = $is_alive;

        return $this;
    }

    public function getAntenna(): ?string
    {
        return $this->antenna;
    }

    public function setAntenna(?string $antenna): self
    {
        $this->antenna = $antenna;

        return $this;
    }

    /**
     * @return Collection<int, PatientsContacts>
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(PatientsContacts $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts->add($contact);
            $contact->setPatient($this);
        }

        return $this;
    }

    public function removeContact(PatientsContacts $contact): self
    {
        if ($this->contacts->removeElement($contact)) {
            // set the owning side to null (unless already changed)
            if ($contact->getPatient() === $this) {
                $contact->setPatient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, FollowupReports>
     */
    public function getFore()
    {

        return $this->fore;
        // if ($this->fore) {
        //     return [
        //         $this->fore[count($this->fore) - 1],
        //         // $this->fore[count($this->fore) - 2],
        //         // $this->fore[count($this->fore) - 3]
        //     ];
        // } else {
        //     return null;
        // }
    }

    public function addFore(FollowupReports $fore): self
    {
        if (!$this->fore->contains($fore)) {
            $this->fore->add($fore);
            $fore->setPatient($this);
        }

        return $this;
    }

    public function removeFore(FollowupReports $fore): self
    {
        if ($this->fore->removeElement($fore)) {
            // set the owning side to null (unless already changed)
            if ($fore->getPatient() === $this) {
                $fore->setPatient(null);
            }
        }

        return $this;
    }

    // /**
    //  * @return Collection<int, PatientsInformation>
    //  */
    // public function getInformations(): Collection
    // {
    //     return $this->informations;
    // }

    // public function addInformation(PatientsInformation $information): self
    // {
    //     if (!$this->informations->contains($information)) {
    //         $this->informations->add($information);
    //         $information->setPatients($this);
    //     }

    //     return $this;
    // }

    // public function removeInformation(PatientsInformation $information): self
    // {
    //     if ($this->informations->removeElement($information)) {
    //         // set the owning side to null (unless already changed)
    //         if ($information->getPatients() === $this) {
    //             $information->setPatients(null);
    //         }
    //     }

    //     return $this;
    // }
}
