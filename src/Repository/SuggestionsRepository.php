<?php

namespace App\Repository;

use App\Entity\Suggestions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Suggestions>
 *
 * @method Suggestions|null find($id, $lockMode = null, $lockVersion = null)
 * @method Suggestions|null findOneBy(array $criteria, array $orderBy = null)
 * @method Suggestions[]    findAll()
 * @method Suggestions[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SuggestionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Suggestions::class);
    }

    public function add(Suggestions $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Suggestions $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function queryPathString($parentPathString, $type = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $params = [];
        $qb->select('s')
            ->from('App:Suggestion', 's')
            ->where('s.pathString LIKE :pathString AND (s.isDeleted is null OR s.isDeleted != 1)');
        if ("activity-conseil" == $type) {
            $qb->andWhere('s.pathString != :activity_call');
            $params['activity_call'] = $parentPathString . '/accompagnement';
        }
        $params['pathString'] = $parentPathString . '/%';
        $qb->orderBy('s.value', 'ASC')
            ->setParameters($params);

        return $qb;
    }

    //    /**
    //     * @return Suggestions[] Returns an array of Suggestions objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('s.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Suggestions
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
