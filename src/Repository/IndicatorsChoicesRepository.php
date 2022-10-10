<?php

namespace App\Repository;

use App\Entity\IndicatorsChoices;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IndicatorsChoices>
 *
 * @method IndicatorsChoices|null find($id, $lockMode = null, $lockVersion = null)
 * @method IndicatorsChoices|null findOneBy(array $criteria, array $orderBy = null)
 * @method IndicatorsChoices[]    findAll()
 * @method IndicatorsChoices[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndicatorsChoicesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IndicatorsChoices::class);
    }

    public function add(IndicatorsChoices $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IndicatorsChoices $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return IndicatorsChoices[] Returns an array of IndicatorsChoices objects
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

//    public function findOneBySomeField($value): ?IndicatorsChoices
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
