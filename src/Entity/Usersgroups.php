<?php

namespace App\Entity;

use App\Repository\UsersgroupsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsersgroupsRepository::class)]
class Usersgroups
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $roles = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name_groups = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name_sousgroup = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\ManyToOne]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getRoles(): ?string
    {
        return $this->roles;
    }

    public function setRoles(string $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getNameGroups(): ?string
    {
        return $this->name_groups;
    }

    public function setNameGroups(?string $name_groups): self
    {
        $this->name_groups = $name_groups;

        return $this;
    }

    public function getNameSousgroup(): ?string
    {
        return $this->name_sousgroup;
    }

    public function setNameSousgroup(?string $name_sousgroup): self
    {
        $this->name_sousgroup = $name_sousgroup;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

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
}
