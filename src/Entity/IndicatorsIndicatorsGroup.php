<?php

namespace App\Entity;

use App\Repository\IndicatorsIndicatorsGroupRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IndicatorsIndicatorsGroupRepository::class)]
class IndicatorsIndicatorsGroup
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?IndicatorsGroups $igrp = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIgrp(): ?IndicatorsGroups
    {
        return $this->igrp;
    }

    public function setIgrp(?IndicatorsGroups $igrp): self
    {
        $this->igrp = $igrp;

        return $this;
    }
}
