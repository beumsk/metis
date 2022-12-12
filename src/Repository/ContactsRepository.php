<?php

namespace App\Repository;

use App\Entity\Contacts;
use App\Entity\ContactsInformation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
}
