<?php

namespace App\Entity;

use App\Repository\FollowupReportsContactRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowupReportsContactRepository::class)]
class FollowupReportsContact
{
    // #[ORM\Id]
    // #[ORM\GeneratedValue]
    // #[ORM\Column]
    // private ?int $id = null;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\ManyToOne]
    private ?FollowupReports $fore = null;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\ManyToOne]
    private ?Contacts $cont = null;

    // public function getId(): ?int
    // {
    //     return $this->id;
    // }

    public function getFore(): ?FollowupReports
    {
        return $this->fore;
    }

    public function setFore(?FollowupReports $fore): self
    {
        $this->fore = $fore;

        return $this;
    }

    public function getCont(): ?Contacts
    {
        return $this->cont;
    }

    public function setCont(?Contacts $cont): self
    {
        $this->cont = $cont;

        return $this;
    }
}
