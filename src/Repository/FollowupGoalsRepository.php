<?php

namespace App\Repository;

use App\Entity\FollowupGoals;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Proxies\__CG__\App\Entity\FollowupGoals as EntityFollowupGoals;

/**
 * @extends ServiceEntityRepository<FollowupGoals>
 *
 * @method FollowupGoals|null find($id, $lockMode = null, $lockVersion = null)
 * @method FollowupGoals|null findOneBy(array $criteria, array $orderBy = null)
 * @method FollowupGoals[]    findAll()
 * @method FollowupGoals[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FollowupGoalsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FollowupGoals::class);
    }

    public function add(FollowupGoals $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FollowupGoals $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @param Patient $patient
     * @param Datetime $date
     * @param array $function
     *        
     * @return array
     */
    public function findClosedByPatient($patient, $type, $date, $function, $team, $isHighlight = null, $antenna = null, $referent = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('g')
            ->from('App:FollowupGoals', 'g')
            ->join('g.pati', 'p')
            ->join('g.fore', 'r');

        if ($team) {
            $qb
                ->join('p.information', 'i')
                ->join('i.sugg', 's');
        }
        if ($referent) {
            $qb->join('p.cont', 'pc');
        }

        $qb
            ->where('p.id = :patientId AND g.status IN (:status) AND g.contact is NULL AND g.type=:type')
            ->andWhere('r.id IN (' . $this->getLatestReport() . ')');


        $followUpGoalsEntity = new EntityFollowupGoals();
        $parameters = [
            'date' => $date,
            'patientId' => $patient,
            'type' => $type,
            'status' => $followUpGoalsEntity->getStatusForGroup(FollowupGoals::STATUS_GROUP_CLOSED)
        ];

        if ($function) {
            $qb->andWhere('g.func IN (:func)');
            $parameters['function'] = $function;
        }

        if ($team) {
            $qb->andWhere('s.id IN (:team)');
            $parameters['team'] = $team;
        }

        if ($antenna) {
            $qb->andWhere("p.antenna = :antenna");
            $parameters['antenna'] = $antenna;
        }
        if ($referent) {
            $qb->andWhere("pc.contact in (:referent) and pc.end is null");
            $parameters['referent'] = $referent;
        }

        if ($isHighlight) {
            $qb->andWhere('g.isHighlight = :isHighlight');
            $parameters['isHighlight'] = $isHighlight;
        }

        $qb->setParameters($parameters);

        return $qb->getQuery()->getResult();
    }

    /** 
     * @return DQL
     */
    private function getLatestReport()
    {
        $subQuery = $this->getEntityManager()
            ->createQuery('
                SELECT r2.id
                FROM App:FollowupGoals g2
                JOIN g2.fore r2
                WHERE r2.last_update >= :date
                ORDER BY r2.last_update DESC
            ')
            ->setMaxResults(1)
            ->getDQL();

        return $subQuery;
    }


    /**
     * @param App\Entity\Patients $patient
     *
     * @return array
     */
    public function findTodo($contact, $status, $type, $func = "", $team, $isHighlight = null, $patient = null, $antenna = null, $referent = null)
    {
        $query = 'SELECT g
            FROM App:FollowupGoals g ';

        if ($team || $antenna || $referent) {
            $query .= ' JOIN g.pati p ';
        }
        if ($referent) {
            $query .= ' LEFT JOIN p.cont pc ';
        }

        $query .= 'WHERE g.status IN (:status) AND g.type = :type ';



        if ($func) {
            $query .= ' AND g.func IN (:func) ';
        }
        if ($team) {
            $query .= " AND p.team IN ('" . $team . "') ";
        }
        if ($patient) {
            $query .= ' AND g.pati = :patient ';
        }
        if ($isHighlight) {
            $query .= ' AND g.isHighlight = :isHighlight ';
        }
        if ($antenna) {
            $query .= ' AND p.antenna = :antenna ';
        }
        if ($referent) {
            $query .= ' AND pc.cont in (:referent) and pc.end is null';
        }

        if ($contact) {
            $query .= ' AND g.cont = :contact ';
        } else {
            $query .= ' AND g.cont is NULL ';
        }

        $parameters = [
            'status' => $status,
            'type' => $type,
        ];

        if ($func) {
            $parameters['func'] = $func;
        }

        if ($patient) {
            $parameters['patient'] = $patient;
        }

        if ($isHighlight) {
            $parameters['isHighlight'] = $isHighlight;
        }

        if ($contact) {
            $parameters['contact'] = $contact;
        }

        if ($antenna) {
            $parameters['antenna'] = $antenna;
        }

        if ($referent) {
            $parameters['referent'] = $referent;
        }

        $query = $this->getEntityManager()
            ->createQuery($query)
            ->setParameters($parameters);

        // dd($query);
        return $query->getResult();
    }


    /**
     * @param Contacts $contact
     * @param Datetime $date
     * @param array $function
     *        
     * @return array
     */
    public function findClosedByContact($contact, $type, $date, $function, $team, $isHighlight = null, $antenna = null, $referent = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('g')
            ->from('App:FollowupGoals', 'g')
            ->join('g.cont', 'c')
            ->join('g.fore', 'r');

        if ($team || $antenna || $referent) {
            $qb
                ->join('g.pati', 'p');
        }
        if ($referent) {
            $qb
                ->join('p.cont', 'pc');
        }

        $qb
            ->where('c.id = :contactId AND g.status IN (:status) AND g.type = :type')
            ->andWhere('r.id IN (' . $this->getLatestReport() . ')');
        $followUpGoalsEntity = new EntityFollowupGoals();
        $parameters = [
            'date' => $date,
            'contactId' => $contact,
            'type' => $type,
            'status' => $followUpGoalsEntity->getStatusForGroup(FollowupGoals::STATUS_GROUP_CLOSED)
        ];

        if ($function) {
            $qb->andWhere('g.function IN (:function)');
            $parameters['function'] = $function;
        }

        if ($team) {
            $qb->andWhere("p.team IN ('" . $team . "')");
        }

        if ($antenna) {
            $qb->andWhere("p.antenna = :antenna");
            $parameters['antenna'] = $antenna;
        }
        if ($referent) {
            $qb->andWhere("pc.contact in (:referent) and pc.end is null");
            $parameters['referent'] = $referent;
        }

        if ($isHighlight) {
            $qb->andWhere('g.isHighlight = :isHighlight');
            $parameters['isHighlight'] = $isHighlight;
        }

        $qb->setParameters($parameters);

        return $qb->getQuery()->getResult();
    }

    /**
     * @return array
     */
    public function findDistinctPatients()
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('p')
            ->from('App:Patients', 'p')
            ->where('p.id IN (
                    SELECT DISTINCT p2.id
                    FROM App:FollowupGoals g JOIN g.pati p2
                    WHERE g.type = :type AND g.contact is NULL
                )')
            ->setParameters([
                'type' => FollowupGoals::TYPE_CALL
            ]);

        return $qb->getQuery()->getResult();
    }


    /**
     * @return array
     */
    public function findDistinctContacts($contact_type)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('c')
            ->from('App:Contacts', 'c')
            ->where('c.id IN (
                    SELECT DISTINCT c2.id
                    FROM App:FollowupGoals g JOIN g.contact c2
                    WHERE g.type = :type AND c2.type = :contact_type
                ) AND c.type = :contact_type')
            ->setParameters([
                'type' => FollowupGoals::TYPE_CALL,
                'contact_type' => $contact_type
            ]);

        return $qb->getQuery()->getResult();
    }
    /**
     * @return FollowupGoals[] Returns an array of Contacts objects
     */
    public function findByPaquetsFollowupGoals()
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('c')
            ->from('App:FollowupGoals', 'c')
            ->andWhere('c.deleted_at IS NULL AND c.cont IS NOT NULL AND c.status = 2')
            ->join('c.contact', 'cont')
            // ->where('c.id = f.cont')
            ->orderBy('cont.id', 'ASC');

        return $qb->getQuery()->getResult();
    }
    /**
     * @return FollowupGoals[] Returns an array of FollowupGoals objects
     */
    public function followupGoalsByAntenna($antenna): array
    {
        return $this->createQueryBuilder('f')
            ->innerJoin('f.pati', 'p')
            ->andWhere('p.antenna = :antenna')
            ->setParameter('antenna', $antenna)
            ->orderBy('f.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    //    public function findOneBySomeField($value): ?FollowupGoals
    //    {
    //        return $this->createQueryBuilder('f')
    //            ->andWhere('f.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
