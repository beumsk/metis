<?php

namespace App\Repository;

use App\Entity\PatientsPatients;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PatientsPatients>
 *
 * @method PatientsPatients|null find($id, $lockMode = null, $lockVersion = null)
 * @method PatientsPatients|null findOneBy(array $criteria, array $orderBy = null)
 * @method PatientsPatients[]    findAll()
 * @method PatientsPatients[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientsPatientsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PatientsPatients::class);
    }

    public function add(PatientsPatients $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PatientsPatients $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findPatientPatient($mode, $patient)
    {
        $query = 'SELECT p,t,o
            FROM App:PatientsPatients p 
            JOIN p.tapa t
            JOIN p.orpa o
            WHERE t.deleted_at IS NULL and o.deleted_at IS NULL ';

        if ("orig" === $mode) {
            $query .= " AND o.id = :patient";
        } elseif ("target" === $mode) {
            $query .= " AND t.id = :patient";
        }

        $query = $this->getEntityManager()
            ->createQuery($query)
            ->setParameter('patient', $patient->getId());

        try {
            return $query->getResult();
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

    //    /**
    //     * @return PatientsPatients[] Returns an array of PatientsPatients objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('p.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?PatientsPatients
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
