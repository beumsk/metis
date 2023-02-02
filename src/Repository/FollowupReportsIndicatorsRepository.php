<?php

namespace App\Repository;

use App\Entity\FollowupReports;
use App\Entity\FollowupReportsIndicators;
use App\Entity\IndicatorsGroups;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FollowupReportsIndicators>
 *
 * @method FollowupReportsIndicators|null find($id, $lockMode = null, $lockVersion = null)
 * @method FollowupReportsIndicators|null findOneBy(array $criteria, array $orderBy = null)
 * @method FollowupReportsIndicators[]    findAll()
 * @method FollowupReportsIndicators[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FollowupReportsIndicatorsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FollowupReportsIndicators::class);
    }

    public function add(FollowupReportsIndicators $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FollowupReportsIndicators $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findIndicatorsByFollowUpReportAndGroup(FollowupReports $report, IndicatorsGroups $group)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('fi')
            ->from('App:FollowupReportsIndicators', 'fi')
            ->leftJoin('fi.indi', 'i')
            ->leftJoin('i.groups', 'fg')
            ->where('fi.fore = :fReport AND fg.id = :group')
            ->setParameters([
                'fReport' => $report,
                'group' => $group->getId()
            ]);

        return $qb->getQuery()->getResult();
    }

    //    /**
    //     * @return FollowupReportsIndicators[] Returns an array of FollowupReportsIndicators objects
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

    //    public function findOneBySomeField($value): ?FollowupReportsIndicators
    //    {
    //        return $this->createQueryBuilder('f')
    //            ->andWhere('f.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
