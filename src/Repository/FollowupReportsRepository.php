<?php

namespace App\Repository;

use App\Entity\FollowupReports;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Twig\Node\WithNode;

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

    public function findCalls($activityType, $antenna = null, $limit = 1000)
    {
        $parameters = [];
        $parameters["activityType"] = $activityType;

        $q = $this->createQueryBuilder('r')
            ->innerJoin('r.pati', 'p')
            ->andWhere('r.activity_type in (:activityType)');

        if (null !== $antenna) {
            $q->andWhere('p.antenna = :antenna');
            $parameters["antenna"] = $antenna;
        }

        $q->setParameters($parameters)
            ->orderBy('r.report_date', 'DESC')
            ->setMaxResults($limit);

        // dd($q->getQuery()->getResult());
        return $q->getQuery()->getResult();
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

    public function mergeFollowUpGoalsAndReports($id, $textSearch = null, $dateSearch = null, $typeSearch = null)
    {

        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('f')
            ->from('App:FollowupReports', 'f')
            ->andWhere('f.pati = :idPati')
            ->leftJoin(
                'App:FollowupGoals',
                'fg',
                'WITH',
                'f.pati = fg.pati'
            );
        // ->innerJoin(
        //     'App:User',
        //     'u',
        //     'WITH',
        //     'f.user = u.id'
        // )
        $parameters["idPati"] = $id;
        if (null !== $textSearch) {
            $qb->andWhere('f.content like :textSearch');
            $parameters["textSearch"] = '%' . $textSearch . '%';
        }

        if (null !== $dateSearch) {
            $qb->andWhere('f.creation_date = :dateSearch');
            $parameters["dateSearch"] = $dateSearch;
        }

        if (null !== $typeSearch) {
            $qb->andWhere('f.activity_type = :typeSearch');
            $parameters["typeSearch"] = $typeSearch;
        }

        $qb->setParameters($parameters)
            ->addOrderBy('f.creation_date', 'DESC');


        return $qb->getQuery()->getResult();
    }
}
