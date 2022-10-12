<?php

namespace App\Repository;

use App\Entity\FollowupReportsContact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FollowupReportsContact>
 *
 * @method FollowupReportsContact|null find($id, $lockMode = null, $lockVersion = null)
 * @method FollowupReportsContact|null findOneBy(array $criteria, array $orderBy = null)
 * @method FollowupReportsContact[]    findAll()
 * @method FollowupReportsContact[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FollowupReportsContactRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FollowupReportsContact::class);
    }

    public function add(FollowupReportsContact $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FollowupReportsContact $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return FollowupReportsContact[] Returns an array of FollowupReportsContact objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?FollowupReportsContact
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
