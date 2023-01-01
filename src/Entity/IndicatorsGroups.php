<?php

namespace App\Entity;

use App\Repository\IndicatorsGroupsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IndicatorsGroupsRepository::class)]
class IndicatorsGroups
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: FollowupReports::class, mappedBy: 'indicatorsGroups')]
    private Collection $followUpReports;

    public function __construct()
    {
        $this->followUpReports = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, FollowupReports>
     */
    public function getFollowUpReports(): Collection
    {
        return $this->followUpReports;
    }

    public function addFollowUpReport(FollowupReports $followUpReport): self
    {
        if (!$this->followUpReports->contains($followUpReport)) {
            $this->followUpReports->add($followUpReport);
            $followUpReport->addIndicatorsGroup($this);
        }

        return $this;
    }

    public function removeFollowUpReport(FollowupReports $followUpReport): self
    {
        if ($this->followUpReports->removeElement($followUpReport)) {
            $followUpReport->removeIndicatorsGroup($this);
        }

        return $this;
    }
}
