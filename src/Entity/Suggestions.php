<?php

namespace App\Entity;

use App\Repository\SuggestionsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SuggestionsRepository::class)]
class Suggestions
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $value = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $path = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $path_string = null;

    #[ORM\Column(nullable: true)]
    private ?int $require_custom_value = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_locked = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $attributes = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $default_comment = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_deleted = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(?string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getPathString(): ?string
    {
        return $this->path_string;
    }

    public function setPathString(string $path_string): self
    {
        $this->path_string = $path_string;

        return $this;
    }

    public function getRequireCustomValue(): ?int
    {
        return $this->require_custom_value;
    }

    public function setRequireCustomValue(?int $require_custom_value): self
    {
        $this->require_custom_value = $require_custom_value;

        return $this;
    }

    public function getIsLocked(): ?int
    {
        return $this->is_locked;
    }

    public function setIsLocked(?int $is_locked): self
    {
        $this->is_locked = $is_locked;

        return $this;
    }

    public function getAttributes(): ?string
    {
        return $this->attributes;
    }

    public function setAttributes(?string $attributes): self
    {
        $this->attributes = $attributes;

        return $this;
    }

    public function getDefaultComment(): ?string
    {
        return $this->default_comment;
    }

    public function setDefaultComment(?string $default_comment): self
    {
        $this->default_comment = $default_comment;

        return $this;
    }

    public function getIsDeleted(): ?int
    {
        return $this->is_deleted;
    }

    public function setIsDeleted(?int $is_deleted): self
    {
        $this->is_deleted = $is_deleted;

        return $this;
    }
}
