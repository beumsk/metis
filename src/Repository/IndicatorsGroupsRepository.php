<?php

namespace App\Repository;

use App\Entity\IndicatorsGroups;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IndicatorsGroups>
 *
 * @method IndicatorsGroups|null find($id, $lockMode = null, $lockVersion = null)
 * @method IndicatorsGroups|null findOneBy(array $criteria, array $orderBy = null)
 * @method IndicatorsGroups[]    findAll()
 * @method IndicatorsGroups[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndicatorsGroupsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IndicatorsGroups::class);
    }

    public function add(IndicatorsGroups $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IndicatorsGroups $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return IndicatorsGroups[] Returns an array of IndicatorsGroups objects
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

//    public function findOneBySomeField($value): ?IndicatorsGroups
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
