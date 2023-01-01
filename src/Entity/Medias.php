<?php

namespace App\Entity;

use App\Repository\MediasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
// use Symfony\Component\Console\Completion\Suggestion;

#[ORM\Entity(repositoryClass: MediasRepository::class)]
class Medias
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\ManyToOne]
    private ?Patients $pati = null;


    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;


    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $filename = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_confidential = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_highlight = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $original_filename = null;

    #[ORM\ManyToOne(targetEntity: 'Patients', cascade: ["all"], fetch: "EAGER", inversedBy: 'medias')]
    #[ORM\JoinColumn(name: "pati_id", referencedColumnName: "id", nullable: true)]
    private ?Patients $patient = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }


    protected function getUploadDir()
    {
        return 'media';
    }
    // C:\projets\metis-app-2022\public\build\images\5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.bf62d7d5.png
    // public\build\images\5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.bf62d7d5.png
    // https://github.com/shania873/metis/blob/main/public/build/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.bf62d7d5.png
    protected function getUploadRootDir()
    {
        return '../build/images';
        // return 'build/images';
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getFilename(): ?string
    {
        return $this->filename;
    }

    public function setFilename(string $filename): self
    {
        $this->filename = $filename;

        return $this;
    }

    public function getOriginalFilename(): ?string
    {
        return $this->original_filename;
    }

    public function setOriginalFilename(string $original_filename): self
    {
        $this->original_filename = $original_filename;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getAbsolutePath()
    {
        // dd($this->filename);
        return $this->filename === null ? null : $this->getUploadRootDir() . '/' . $this->filename;
    }

    public function getIsConfidential(): ?int
    {
        return $this->is_confidential;
    }

    public function setIsConfidential(?int $is_confidential): self
    {
        $this->is_confidential = $is_confidential;

        return $this;
    }

    public function getIsHighlight(): ?int
    {
        return $this->is_highlight;
    }

    public function setIsHighlight(?int $is_highlight): self
    {
        $this->is_highlight = $is_highlight;

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

    public function getPati(): ?Patients
    {
        return $this->pati;
    }

    public function setPati(?Patients $pati): self
    {
        $this->pati = $pati;

        return $this;
    }

    public function getSugg(): ?Suggestions
    {
        return $this->sugg;
    }

    public function setSugg(?Suggestions $sugg): self
    {
        $this->sugg = $sugg;

        return $this;
    }

    public function getPatient(): ?Patients
    {
        return $this->patient;
    }

    public function setPatient(?Patients $patient): self
    {
        $this->patient = $patient;

        return $this;
    }
}
