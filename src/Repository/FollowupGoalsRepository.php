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
                ->join('p.informations', 'i')
                ->join('i.suggestions', 's');
        }
        if ($referent) {
            $qb->join('p.contacts', 'pc');
        }

        $qb
            ->where('p.id = :patientId AND g.status IN (:status) AND g.contact is NULL AND g.type=:type')
            ->andWhere('r.id IN (' . $this->getLatestReport() . ')');

        $parameters = [
            'date' => $date,
            'patientId' => $patient,
            'type' => $type,
            'status' => FollowupGoals::getStatusForGroup(FollowupGoals::STATUS_GROUP_CLOSED)
        ];

        if ($function) {
            $qb->andWhere('g.function IN (' .  implode(",", json_decode($function))  . ')');
        }

        if ($team) {
            $qb->andWhere('s.id IN (' .  implode(",", json_decode($team))  . ')');
        }

        if ($antenna) {
            $qb->andWhere("p.antenna = :antenna");
            $parameters['antenna'] = $antenna;
        }
        if ($referent) {
            $qb->andWhere('pc.contact in (' .  implode(", ", json_decode($referent))  . ') and pc.end is null');
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
    public function findTodo($contact, $status, $type, $func = "", $team, $patient = null, $date, $antenna = null, $referent = null)
    {
        $query = 'SELECT g
            FROM App:FollowupGoals g ';

        if ($team || $antenna || $referent) {
            $query .= ' JOIN g.pati p ';
        }
        if ($referent) {
            $query .= ' LEFT JOIN p.contacts pc ';
        }

        $query .= 'WHERE g.status IN (:status) AND g.type = :type AND g.deleted_at IS NULL';



        if ($func) {
            $query .= ' AND g.func IN (' .  implode(",", json_decode($func))  . ') ';
        }
        if ($team) {
            $query .= ' AND p.team IN (' .  implode(",", json_decode($team))  . ') ';
        }
        if ($patient) {
            $query .= ' AND g.pati = :patient ';
        }

        if ($antenna) {
            $query .= ' AND p.antenna = :antenna ';
        }

        if ($date) {
            $query .= ' AND g.creation_date = :date ';
        }


        if ($referent) {

            $query .= ' AND pc.cont in (' .  implode(",", json_decode($referent))  . ') and pc.end is null';
        }

        if ($contact !== null) {
            $query .= ' AND g.cont = :contact ';
        } else {
            $query .= ' AND g.cont is NULL ';
        }

        $parameters = [
            'status' => $status,
            'type' => $type,
        ];

        // if ($func) {
        //     $parameters['func'] = $func;
        // }

        if ($patient) {
            $parameters['patient'] = $patient;
        }



        if ($contact) {
            $parameters['contact'] = $contact;
        }

        if ($antenna) {
            $parameters['antenna'] = $antenna;
        }

        // if ($referent) {
        //     $parameters['referent'] = $referent;
        // }

        if ($date) {
            $parameters['date'] = $date;
        }

        $query = $this->getEntityManager()
            ->createQuery($query)
            ->setParameters($parameters);


        // dd($query->getResult());

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
            ->join('g.contact', 'c')
            ->join('g.fore', 'r');

        if ($team || $antenna || $referent) {
            $qb
                ->join('g.pati', 'p');
        }
        if ($referent) {
            $qb
                ->join('p.contacts', 'pc');
        }

        $qb
            ->where('c.id = :contactId AND g.status IN (:status) AND g.type = :type')
            ->andWhere('r.id IN (' . $this->getLatestReport() . ')');

        $parameters = [
            'date' => $date,
            'contactId' => $contact,
            'type' => $type,
            'status' => FollowupGoals::getStatusForGroup(FollowupGoals::STATUS_GROUP_CLOSED)
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


    public function findPatientGoals($patient, $keyword = null, $limit = null, $offset = 0)
    {

        $query = 'SELECT r
                FROM App:FollowupGoals r
                WHERE r.pati = :patient';

        $parameters = array('patient' => $patient);


        // OR c.firstName like :keyword OR c.lastName like :keyword

        if (null !== $keyword) {
            $query .= ' AND (r.content like :keyword OR pl.firstName like :keyword OR pl.lastName like :keyword)';
            $parameters['keyword'] = '%' . $keyword . '%';
        }

        $query .= " ORDER BY r.creation_date DESC, r.id DESC ";

        $query = $this->getEntityManager()
            ->createQuery($query)
            ->setParameters($parameters);

        if (null != $limit) {
            $query->setMaxResults($limit)->setFirstResult($offset);
        }

        try {
            return $query->getResult();
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }


    /**
     * @return FollowupGoals[] Returns an array of FollowupGoals objects
     */
    public function followupGoalsByAntenna($antenna, $team = null, $contact = null, $func = "", $referent = null, $date = null, $status, $type, $patient = null): array
    {



        $query = 'SELECT g
        FROM App:FollowupGoals g ';

        if ($team || $antenna) {
            $query .= 'INNER JOIN g.pati p ';
        }
        if ($referent !== null) {
            $query .= ' LEFT JOIN p.contacts pc ';
        }
        $query .= 'WHERE g.status IN (:status) AND g.type = :type AND g.deleted_at IS NULL';
        if ($date) {
            $query .= ' AND g.creation_date IN (:date) ';
        }


        if ($func) {
            $query .= ' AND g.func IN (:func) ';
        }
        if ($team) {
            $query .= ' AND p.team = :team ';
        }
        if ($patient !== null) {
            $query .= ' AND g.pati = :patient ';
        }
        // if ($isHighlight) {
        //     $query .= ' AND g.isHighlight = :isHighlight ';
        // }
        if ($antenna) {
            $query .= ' AND p.antenna = :antenna ';
        }
        if ($referent !== null) {
            $query .= ' AND pc.contact IN (:referent)';
        }


        if ($contact !== null) {
            $query .= ' AND g.contact = :contact ';
        } else {
            $query .= ' AND g.contact is NOT NULL ';
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

        if ($contact !== null) {
            $parameters['contact'] = $contact;
        }

        if ($team) {
            $parameters['team'] = $team;
        }

        if ($antenna) {
            $parameters['antenna'] = $antenna;
        }


        if ($referent !== null) {
            $parameters['referent'] = $referent;
        }

        if ($date !== null) {
            $parameters['date'] = $date;
        }


        $query = $this->getEntityManager()
            ->createQuery($query)
            ->setParameters($parameters);


        return $query->getResult();

        // $qb = $this->getEntityManager()->createQueryBuilder();
        // $qb->select('f')
        //     ->innerJoin('f.pati', 'p')

        //     ->andWhere('p.antenna = :antenna')




        //     ->setParameters([
        //         'antenna' => $antenna
        //     ])
        //     ->innerJoin('f.cont', 'c')
        //     ->andWhere('c IS NOT NULL AND f.deleted_at IS NULL AND f.type = 2 AND f.status = 1 OR f.status = 2')

        //     ->orderBy('f.id', 'ASC')
        //     ->setMaxResults(10);

        // if ($team) {
        //     $parameters['team'] = $team;
        // }
        // if ($team) {
        //     $qb .= ' AND f.team = :team ';
        // }

        // return $qb->getQuery()->getResult();
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

    public function mergeFollowUpGoalsAndReports($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.pati = :idPati')
            ->leftJoin(
                'App:FollowupReports',
                'par',
                'WITH',
                ':idPati = par.pati'
            )
            ->setParameter('idPati', $value)
            ->getQuery()
            ->getResult();
    }
}
