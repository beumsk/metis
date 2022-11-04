<?php

namespace App\Repository;

use App\Entity\FollowupReports;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FollowupReports>
 *
 * @method FollowupReports|null find($id, $lockMode = null, $lockVersion = null)
 * @method FollowupReports|null findOneBy(array $criteria, array $orderBy = null)
 * @method FollowupReports[]    findAll()
 * @method FollowupReports[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FollowupReportsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FollowupReports::class);
    }

    public function add(FollowupReports $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FollowupReports $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return FollowupReports[] Returns an array of FollowupReports objects
     */
    public function findByDesc($id): array
    {
        // NICE TO HAVE: order the rapports by users
        // dd($patient);
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('m')
            ->from('App:FollowupReports', 'm')
            ->where(
                $qb->expr()->andX(
                    'm.pati = :id'
                    // 'm.deleted_at = null',
                )
            )
            ->setMaxResults(10)
            ->orderBy('m.creation_date', 'desc')
            ->setParameters(
                array(
                    'id' => $id
                )
            );

        return $qb->getQuery()->getResult();
    }

    //    public function findOneBySomeField($value): ?FollowupReports
    //    {
    //        return $this->createQueryBuilder('f')
    //            ->andWhere('f.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
