<?php

namespace App\Repository;

use App\Entity\Patients;
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
