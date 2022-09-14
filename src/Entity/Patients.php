<?php

namespace App\Entity;

use App\Repository\PatientsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

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

    #[ORM\Column(type: Types::TEXT)]
    private ?string $nicknames = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $birthdate = null;

    #[ORM\Column(nullable: true)]
    private ?int $unknown_year = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $birth_location = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $story = null;

    #[ORM\Column(length: 25, nullable: true)]
    private ?string $status = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $first_contact_date = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\Column]
    private ?int $follow_up_type = null;

    #[ORM\Column(length: 50)]
    private ?string $team = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(?\DateTimeInterface $birthdate): self
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
}
