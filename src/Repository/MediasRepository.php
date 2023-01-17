<?php

namespace App\Repository;

use App\Entity\Medias;
use App\Entity\Patients;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Medias>
 *
 * @method Medias|null find($id, $lockMode = null, $lockVersion = null)
 * @method Medias|null findOneBy(array $criteria, array $orderBy = null)
 * @method Medias[]    findAll()
 * @method Medias[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediasRepository extends ServiceEntityRepository
{

    const ALIAS = 'medias';

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Medias::class);
    }

    public function add(Medias $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Medias $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    public function getCurrentProfile(Patients $patient)
    {
        // dd($patient);
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('m')
            ->from('App:Medias', 'm')
            ->join('App:Suggestions', 's')
            ->where(
                $qb->expr()->andX(
                    'm.sugg = s',
                    's.path_string = :path_string',
                    'm.pati = :patient',
                    'm.deleted_at IS NULL'
                )
            )
            ->setMaxResults(1)
            ->orderBy('m.id', 'desc')
            ->setParameters(
                array(
                    'path_string' => '/patient/media/profile/current',
                    'patient' => $patient
                )
            );

        $query = $qb->getQuery();

        return $query->getOneOrNullResult();
    }


    public function getAllProfile()
    {

        $conn = $this->getEntityManager()->getConnection();

        $sql = '
        SELECT *
        FROM metisapp.medias
        INNER JOIN metisapp.patients ON metisapp.medias.id;
            ';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();

        // returns an array of arrays (i.e. a raw data set)
        return $resultSet->fetchAllAssociative();
    }



    //    /**
    //     * @return Medias[] Returns an array of Medias objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Medias
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
