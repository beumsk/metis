<?php

namespace App\Entity;

use App\Repository\IndicatorsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IndicatorsRepository::class)]
class Indicators
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;


    #[ORM\ManyToMany(targetEntity: IndicatorsGroups::class, inversedBy: 'indicators')]
    #[ORM\JoinTable(name: "indicators_indicators_groups")]
    #[ORM\JoinColumn(name: "indi_id", referencedColumnName: "id")]
    #[ORM\InverseJoinColumn(name: "igrp_id", referencedColumnName: "id")]
    private Collection $groups;

    public function __construct()
    {
        $this->groups = new ArrayCollection();
    }

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, IndicatorsGroups>
     */
    public function getGroups(): Collection
    {
        return $this->groups;
    }

    public function addGroup(IndicatorsGroups $group): self
    {
        if (!$this->groups->contains($group)) {
            $this->groups->add($group);
        }

        return $this;
    }

    public function removeGroup(IndicatorsGroups $group): self
    {
        $this->groups->removeElement($group);

        return $this;
    }
}
