<?php

namespace App\Repository;

use App\Entity\IndicatorsIndicatorsGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IndicatorsIndicatorsGroup>
 *
 * @method IndicatorsIndicatorsGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method IndicatorsIndicatorsGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method IndicatorsIndicatorsGroup[]    findAll()
 * @method IndicatorsIndicatorsGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndicatorsIndicatorsGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IndicatorsIndicatorsGroup::class);
    }

    public function add(IndicatorsIndicatorsGroup $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IndicatorsIndicatorsGroup $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return IndicatorsIndicatorsGroup[] Returns an array of IndicatorsIndicatorsGroup objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?IndicatorsIndicatorsGroup
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
