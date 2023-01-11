<?php

namespace App\Entity;

use App\Entity\Contacts;
use App\Utils\CleanAssociationsTrait;
use App\Repository\FollowupGoalsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use App\Utils\InfosCallsTrait;
use App\Utils\InfosReportTrait;

#[ORM\Entity(repositoryClass: FollowupGoalsRepository::class)]
class FollowupGoals
{
    use InfosReportTrait;
    use InfosCallsTrait;
    const STATUS_NEW = 0;
    const STATUS_OPEN = 1;
    const STATUS_COMPLETED = 2;
    const STATUS_CANCELED = 3;

    const STATUS_GROUP_RUNNING = 'En cours';
    const STATUS_GROUP_CLOSED = 'Fermés';

    const STATUS_GROUP_RUNNING_CLASS = 'running';
    const STATUS_GROUP_CLOSED_CLASS = 'closed';

    const TYPE_GOAL = 1;
    const TYPE_CALL = 2;

    use CleanAssociationsTrait;
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Patients $pati = null;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $parent_fogo = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $title = null;

    #[ORM\Column]
    private ?int $status = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\ManyToOne(targetEntity: 'Contacts', cascade: ["all"], fetch: "EAGER")]
    #[ORM\JoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true, onDelete: "SET NULL")]
    private ?Contacts $cont = null;

    #[ORM\Column]
    private ?int $type = null;

    #[ORM\ManyToOne]
    private ?Suggestions $sugg = null;

    #[ORM\ManyToOne]
    private ?Suggestions $func = null;

    #[ORM\Column(nullable: true)]
    private ?int $is_hightlight = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $creation_date = null;

    #[ORM\ManyToOne(targetEntity: "Contacts", inversedBy: 'calls')]
    #[ORM\JoinColumn(name: "cont_id", referencedColumnName: "id", nullable: true)]
    private ?Contacts $contact = null;

    #[MaxDepth(2)]
    #[ORM\ManyToMany(targetEntity: FollowupReports::class, cascade: ["persist"])]
    #[ORM\JoinTable(name: "followup_report_goal")]
    #[ORM\JoinColumn(name: "fogo_id", referencedColumnName: "id", nullable: true)]
    #[ORM\InverseJoinColumn(name: "fore_id", referencedColumnName: "id", nullable: true)]
    private Collection $fore;

    public function __construct()
    {
        $this->fore = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getParentFogo(): ?self
    {
        return $this->parent_fogo;
    }

    public function setParentFogo(?self $parent_fogo): self
    {
        $this->parent_fogo = $parent_fogo;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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



    public function getCont(): ?Contacts
    {
        return $this->cont;
    }

    public function setCont(?Contacts $cont): self
    {
        $this->cont =  $cont;
        return $this;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

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

    public function getFunc(): ?Suggestions
    {
        return $this->func;
    }

    public function setFunc(?Suggestions $func): self
    {
        $this->func = $func;

        return $this;
    }

    public function getIsHightlight(): ?bool
    {
        return $this->is_hightlight;
    }

    public function setIsHightlight(?bool $is_hightlight): self
    {
        $this->is_hightlight = $is_hightlight;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeInterface
    {
        return $this->creation_date;
    }

    public function setCreationDate($creation_date): self
    {
        $this->creation_date = $creation_date;

        return $this;
    }

    public function getContact(): ?Contacts
    {
        return $this->contact;
    }

    public function setContact(?Contacts $contact): self
    {
        $this->contact = $contact;

        return $this;
    }

    public function getforelength()
    {
        return count($this->fore);
    }

    /**
     * @return Collection<int, fore>
     */
    public function getfore(): Collection
    {
        return $this->fore;
    }

    public function addFollowupReport(FollowupReports $fore): self
    {

        $this->fore[] = $fore;

        return $this;
    }

    public function removeFollowupReport(FollowupReports $fore): self
    {

        $this->fore->removeElement($fore);

        return $this;
    }

    /**
     * @param string $group
     *
     * @return array
     */
    public static function getStatusForGroup($group)
    {
        switch ($group) {
            default:
            case self::STATUS_GROUP_RUNNING:
                return [self::STATUS_NEW, self::STATUS_OPEN];
                break;
            case self::STATUS_GROUP_CLOSED:
                return [self::STATUS_COMPLETED, self::STATUS_CANCELED];
                break;
        }
    }

    /**
     * @return array
     */
    public static function getAllStatus()
    {
        return array(
            self::STATUS_NEW => 'Nouveau',
            self::STATUS_OPEN => 'En cours',
            self::STATUS_COMPLETED => 'Accompli',
            self::STATUS_CANCELED => 'Annulé'
        );
    }

    public static function date_compare($element1, $element2)
    {

        $datetime1 = strtotime($element1->creation_date);
        $datetime2 = strtotime($element2->creation_date);
        return $datetime1 - $datetime2;
    }

    // /**
    //  * @param int $status
    //  *
    //  * @return int
    //  */
    // public function getStatusGroup($status)
    // {
    //     switch ($status) {
    //         case self::STATUS_NEW:
    //         case self::STATUS_OPEN:
    //             return self::STATUS_GROUP_RUNNING;
    //             break;
    //         case self::STATUS_COMPLETED:
    //         case self::STATUS_CANCELED:
    //             return self::STATUS_GROUP_CLOSED;
    //             break;
    //         default:
    //             return 'wrong status';
    //     }
    // }
}
