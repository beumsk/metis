<?php

namespace App\Repository;

use App\Entity\Contacts;
use App\Entity\FollowupReports;
use App\Entity\ContactsInformation;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Contacts>
 *
 * @method Contacts|null find($id, $lockMode = null, $lockVersion = null)
 * @method Contacts|null findOneBy(array $criteria, array $orderBy = null)
 * @method Contacts[]    findAll()
 * @method Contacts[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContactsRepository extends ServiceEntityRepository
{


    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Contacts::class);
    }

    public function add(Contacts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Contacts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    public function findReferents()
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('c')
            ->distinct()
            ->from('App:Contacts', 'c')
            ->leftJoin('c.orga', 'o')
            ->join('c.patients', 'pc')
            ->join('pc.linkType', 's')
            ->join('pc.pati', 'p')
            ->where('s.path_string = :path1 or s.path_string = :path2')
            ->andWhere('pc.deleted_at is null and pc.end is null and p.deleted_at is null and c.deleted_at is null')
            ->setParameters([
                'path1' => "/patient/contacts/liens/referent-social-idr",
                'path2' => "/patient/contacts/liens/referent-lgt-idr"
            ]);

        return $qb->getQuery()->getResult();
    }

    /**
     * @return Contacts[] Returns an array of Contacts objects
     */
    public function findByPaquetsContacts(): array
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('ci')
            ->from('App:Contacts', 'ci')
            ->andWhere('ci.deleted_at IS NULL')
            ->andWhere('ci.cont IS NOT NULL');
        // ->join('ite.suge', 's')
        // ->where('s.path_string = :path_string AND ci.cont = :contactId');

        // dd($qb->getQuery());
        return $qb->getQuery()->getResult();
    }

    public function findPackBySomeField(): array
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param array $months
     *
     * @return array
     */
    public function findBirthdays($month)
    {

        $conn = $this->getEntityManager()->getConnection();

        $query = '                      
                SELECT c.*, ci.value as birthdate
                FROM contacts c
                INNER JOIN contacts_information ci ON c.id = ci.cont_id
                INNER JOIN information_template_element ite on ite.id = ci.itel_id 
                INNER JOIN suggestions s ON ite.suge_id = s.id 
                WHERE s.path_string = "' . ContactsInformation::INFO_BIRTHDATE . '"
                AND (c.deleted_at IS NULL) AND ci.deleted_at IS NULL
               
                HAVING MONTH(birthdate) = "' . $month . '"
                ORDER BY birthdate 
            ';


        $stmt = $conn->prepare($query);
        $resultSet = $stmt->executeQuery();




        return $resultSet->fetchAllAssociative();
    }

    /**
     * @return array
     */
    public function findContactInfos($contactId, $stringInfo)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('ci')
            ->from('App:ContactsInformation', 'ci')
            ->join('ci.itel', 'ite')
            ->join('ite.suge', 's')
            ->where('s.path_string = :path_string AND ci.cont = :contactId')
            ->setParameters([
                'path_string' => $stringInfo,
                'contactId' => $contactId
            ]);

        return $qb->getQuery()->getResult();
    }

    public function findAvailableContacts($patientId, $currentId = null, $query = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $parameters = [];

        $qb->select('c')
            ->from('App:Contacts', 'c')
            ->where('c.type in (' . implode(",", [Contacts::TYPE_PERSON, Contacts::TYPE_ORGANISATION]) . ') AND c.id NOT in (
                select c2.id FROM App:PatientsContacts pc
                JOIN pc.cont c2
                WHERE pc.pati = :patientId) AND c.deleted_at IS NULL');


        if ($query !== null) {

            $qb->andWhere('CONCAT(c.lastname,\' \', c.firstname,\' \') LIKE :query OR CONCAT(c.firstname,\' \', c.lastname,\' \') LIKE :query ');
            $parameters["query"] = '%' . $query . '%';
        }

        $parameters['patientId'] = $patientId;

        // if ($query === null) {
        //     $qb->setMaxResults(200);
        // }
        $qb->setParameters($parameters);

        // dd($qb);

        return $qb->getQuery()->getResult();
    }

    public function findContactsResearch($val = null, $antenna = null)
    {

        $conn = $this->getEntityManager()->getConnection();
        // dd(json_decode($tags));
        $query_tags = ' ';
        $join = ' ';

        $query = 'SELECT 
        CASE c.type WHEN ' . Contacts::TYPE_PERSON . ' THEN "Physique" ELSE "Morale" END as typeLabel,
        (select o.lastname FROM contacts o WHERE o.id = c.orga_id) as organisation,          
        c.firstname, c.lastname, c.id as id, c.orga_id,
        (select count(r.id) from followup_reports r 
        inner join followup_report_contact rc on r.id = rc.fore_id 
        where r.activity_type in (' . implode(",", [FollowupReports::ACTIVITY_CALL_OUT, FollowupReports::ACTIVITY_CALL_IN]) . ')' .  ' and r.deleted_at is null and rc.cont_id = c.id) as nb_calls,
        (select count(pc.id) from patients_contacts pc where pc.cont_id = c.id AND pc.deleted_at is null) as nb_patients
    FROM contacts c ' . $join . '
    WHERE c.type IN (' . implode(",", [Contacts::TYPE_PERSON, Contacts::TYPE_ORGANISATION]) . ')' .
            $query_tags . 'AND (c.deleted_at IS NULL)
    GROUP BY c.id
    ORDER BY lastname asc, firstname asc';

        // (select count(f.fogo_id) from followup_goals f where f.cont_id = c.cont_id AND f.delete_at is null) as nb_calls,
        $stmt = $conn->prepare($query);

        // dd($query);
        $resultSet = $stmt->executeQuery();




        return $resultSet->fetchAllAssociative();
    }

    public function findAllContacts($tags = null, $search = null)
    {

        $conn = $this->getEntityManager()->getConnection();
        // dd(json_decode($tags));
        $query_tags = ' ';
        $join = ' ';
        $querySearch = ' ';
        if ($tags) {
            $query_tags = ' AND t.id IN (' . implode(",", json_decode($tags)) . ') ';
            $join = ' LEFT JOIN ( 
                                    SELECT ci.cont_id, s.value, s.id
                                    FROM suggestions s 
                                    INNER JOIN contacts_information ci ON s.id = ci.sugg_id 
                                    WHERE s.path_string LIKE "' . Contacts::TAGS_PATH . '%" AND ci.deleted_at is null
                                ) t ON c.id = t.cont_id';
        }

        if ($search) {
            // $query_tags = ' AND t.id IN (' . implode(",", json_decode($tags)) . ') ';
            $querySearch = 'and CONCAT(c.firstname, " ", c.lastname) LIKE "' . $search . '%" or CONCAT(c.lastname, " ", c.firstname) LIKE "' . $search . '%"';
        }

        $query = 'SELECT 
                        CASE c.type WHEN ' . Contacts::TYPE_PERSON . ' THEN "Physique" ELSE "Morale" END as typeLabel,
                        (select o.lastname FROM contacts o WHERE o.id = c.orga_id ) as organisation,          
                        c.firstname, c.lastname, c.id as id, c.orga_id, 
                        
                        (select count(r.id) from followup_reports r 
                        inner join followup_report_contact rc on r.id = rc.fore_id 
                        where r.activity_type in (' . implode(",", [FollowupReports::ACTIVITY_CALL_OUT, FollowupReports::ACTIVITY_CALL_IN]) . ') and r.deleted_at is null and rc.cont_id = c.id) as nb_calls ,
                        (select count(pc.id) from patients_contacts pc where pc.cont_id = c.id AND pc.deleted_at is null) as nb_patients
                        
                    FROM contacts c ' . $join . '
                    WHERE c.type IN (' . implode(",", [Contacts::TYPE_PERSON, Contacts::TYPE_ORGANISATION]) . ')' .
            $query_tags . 'AND (c.deleted_at IS NULL) ' . $querySearch . '

                    GROUP BY c.id
                    ORDER BY lastname asc, firstname asc';

        // (select count(f.fogo_id) from followup_goals f where f.cont_id = c.cont_id AND f.delete_at is null) as nb_calls,
        $stmt = $conn->prepare($query);
        $resultSet = $stmt->executeQuery();




        return $resultSet->fetchAllAssociative();
    }
}
