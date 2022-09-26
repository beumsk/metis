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
    #[ORM\JoinColumn(nullable: true)]
    private ?Patients $pati = null;


    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)]
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


    protected function getUploadRootDir()
    {
        return __DIR__ . '../../assets/img/patients' . $this->getUploadDir();
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
}
