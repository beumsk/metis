<?php

namespace App\Entity;

use App\Repository\ContactsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Utils\InfosCallsTrait;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactsRepository::class)]
class Contacts
{
    const TYPE_ORGANISATION = 1;
    const TYPE_PERSON = 2;
    const TYPE_LOCATION = 3;

    const PHONE_PATH = '/patient/contacts/infos/telephone';
    const TAGS_PATH = '/patient/contacts/tags';
    const COLLAB_PATH = '/patient/contacts/type-de-collaborateur';
    use InfosCallsTrait;
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['appels'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstname = null;

    #[Groups(['appels'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastname = null;

    #[ORM\Column]
    private ?int $type = null;

    #[Groups(['appels'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[Groups(['appels'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $url = null;

    #[Groups(['appels'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\ManyToOne(targetEntity: 'Contacts', cascade: ["all"], fetch: "EAGER", inversedBy: "cont")]
    #[ORM\JoinColumn(name: "orga_id", referencedColumnName: "id", nullable: true)]
    private  $orga = null;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: FollowupGoals::class)]
    private Collection $calls;

    // private $lengthOccupants;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: ContactsInformation::class)]
    private Collection $informations;

    #[ORM\OneToMany(mappedBy: 'place', targetEntity: PatientsPlaces::class,  orphanRemoval: true, cascade: ["all"])]
    private $occupants;

    #[ORM\OneToMany(targetEntity: Contacts::class, mappedBy: "orga", orphanRemoval: true, cascade: ["all"])]
    private $cont;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $antenna = null;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: PatientsContacts::class, orphanRemoval: true, cascade: ["all"])]
    private Collection $patients;
    public function __construct()
    {
        $this->calls = new ArrayCollection();

        $this->informations = new ArrayCollection();
        $this->occupants = new ArrayCollection();
        $this->patients = new ArrayCollection();
    }





    public function addContact(Contacts $cont)
    {
        $this->cont[] = $cont;

        return $this;
    }


    public function removeContact(Contacts $cont)
    {
        $this->cont->removeElement($cont);
    }


    public function getContacts()
    {
        return $this->cont;
    }
    public function setId(?string $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

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

    public function getOrga()
    {
        return $this->orga;
    }

    public function setOrga(?Contacts $orga): self
    {
        $this->orga = $orga;

        return $this;
    }

    /**
     * @return Collection<int, FollowupGoals>
     */
    public function getCalls(): Collection
    {
        return $this->calls;
    }

    public function addCall(FollowupGoals $call): self
    {
        $this->calls[] = $call;

        return $this;
    }

    public function removeCall(FollowupGoals $call): self
    {
        $this->calls->removeElement($call);

        return $this;
    }



    /**
     * @return Collection<int, ContactsInformation>
     */
    public function getInformations(): Collection
    {
        return $this->informations;
    }

    public function addInformation(ContactsInformation $information): self
    {
        if (!$this->informations->contains($information)) {
            $this->informations->add($information);
            $information->setContact($this);
        }

        return $this;
    }

    public function removeInformation(ContactsInformation $information): self
    {
        if ($this->informations->removeElement($information)) {
            if ($information->getContact() === $this) {
                $information->setContact(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PatientsPlaces>
     */
    public function getOccupants(): Collection
    {
        return $this->occupants;
    }


    /**
     * @return Collection<int, PatientsPlaces>
     */
    public function getLengthOccupants()
    {
        return count($this->occupants);
    }



    public function addOccupant(PatientsPlaces $occupant): self
    {
        if (!$this->occupants->contains($occupant)) {
            $this->occupants->add($occupant);
            $occupant->setPlace($this);
        }

        return $this;
    }

    public function removeOccupant(PatientsPlaces $occupant)
    {

        $this->occupants->removeElement($occupant);
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
    public function getPatients(): Collection
    {

        return $this->patients;
    }

    public function addPatient(PatientsContacts $patient): self
    {
        if (!$this->patients->contains($patient)) {
            $this->patients->add($patient);
            $patient->setContact($this);
        }

        return $this;
    }

    public function removePatient(PatientsContacts $patient): self
    {
        if ($this->patients->removeElement($patient)) {
            // set the owning side to null (unless already changed)
            if ($patient->getContact() === $this) {
                $patient->setContact(null);
            }
        }

        return $this;
    }
}
