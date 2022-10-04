<?php

namespace App\Entity;

use App\Repository\PatientsInformationTemplateBlockRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PatientsInformationTemplateBlockRepository::class)]
class PatientsInformationTemplateBlock
{

    const TYPE_PATIENT = "patient";
    const TYPE_CONTACT = "contact";

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\ManyToOne]
    private ?Suggestions $sugb = null;


    #[ORM\Column(nullable: true)]
    private ?int $order = null;

    #[ORM\Column(nullable: true)]
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSugb(): ?Suggestions
    {
        return $this->sugb;
    }

    public function setSugb(?Suggestions $sugb): self
    {
        $this->sugb = $sugb;

        return $this;
    }

    public function getOrder(): ?int
    {
        return $this->order;
    }

    public function setBlockOrder(?int $order): self
    {
        $this->order = $order;

        return $this;
    }

    /**
     * Set type
     *
     * @param array $type
     * @return InformationTemplateBlock
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return array 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return array
     */
    public static function getTypes()
    {
        return array(
            self::TYPE_PATIENT => 'Patient',
            self::TYPE_CONTACT => 'Contact'
        );
    }
}
