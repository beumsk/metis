<?php

namespace App\Repository;

use App\Entity\Patients;
use App\Entity\ContactsInformation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Patients>
 *
 * @method Patients|null find($id, $lockMode = null, $lockVersion = null)
 * @method Patients|null findOneBy(array $criteria, array $orderBy = null)
 * @method Patients[]    findAll()
 * @method Patients[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Patients::class);
    }

    public function add(Patients $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Patients $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Patients[] Returns an array of Patients objects
    //     */
    public function findByPaquets($value): array
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'ASC')
            ->setMaxResults($value)
            ->getQuery()
            ->getResult();
    }




    public function findByNameByFirstNameByName(string $search): array
    {
        $qb = $this->getEntityManager()->createQueryBuilder();


        $qb->select('p.id, p.lastname, p.firstname, p.nicknames')
            ->from('App:Patients', 'p')
            ->andWhere('CONCAT(p.lastname,\' \', p.firstname,\' \', COALESCE(p.nicknames, p.id)) LIKE :val')
            ->setParameter('val', '%' . $search . '%')
            ->orderBy('p.id', 'ASC');

        $query = $qb->getQuery();
        return $query->getResult();
    }

    public function findLatestSuggestion($patient, $status = "/patient/fiche/statut-du-suivi")
    {

        $query = 'SELECT 
                    pi.id, pis.value
            FROM App:PatientsInformation pi 
            JOIN pi.sugg pis
            WHERE pi.pati=:patient AND pi.sugg IN (
                SELECT s.id FROM App:Suggestions s 
                JOIN s.parentSugg sp WHERE sp.path_string = :idr_suivi
            )
            ORDER BY pi.start DESC';

        $query = $this->getEntityManager()
            ->createQuery($query)
            ->setParameters([
                'idr_suivi' => $status,
                'patient' => $patient
            ]);

        try {
            return $query->getResult();
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
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
                GROUP BY MONTH(birthdate), birthdate 
                HAVING MONTH(birthdate) = "' . $month . '"
                ORDER BY birthdate 
            ';


        $stmt = $conn->prepare($query);
        $resultSet = $stmt->executeQuery();



        // returns an array of arrays (i.e. a raw data set)
        return $resultSet->fetchAllAssociative();
    }


    //    public function findOneBySomeField($value): ?Patients
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
