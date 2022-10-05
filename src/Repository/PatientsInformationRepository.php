<?php

namespace App\Repository;

use App\Entity\PatientsInformation;
use App\Entity\Patients;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PatientsInformation>
 *
 * @method PatientsInformation|null find($id, $lockMode = null, $lockVersion = null)
 * @method PatientsInformation|null findOneBy(array $criteria, array $orderBy = null)
 * @method PatientsInformation[]    findAll()
 * @method PatientsInformation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientsInformationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PatientsInformation::class);
    }

    public function add(PatientsInformation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PatientsInformation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findPatientInfos($patientId, $suggString)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb
            ->select('pi')
            ->from('App:PatientsInformation', 'pi')
            ->join('pi.itel', 'ite')
            ->join('ite.suge', 's')
            ->where('s.path_string = :suggString AND pi.pati = :patientId')
            ->setParameters([
                'suggString' => $suggString,
                'patientId' => $patientId
            ]);

        return $qb->getQuery()->getResult();
    }


    public function findOtherInfos($suggestionId)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('distinct (pi.value) as value')
            ->from('App:PatientsInformation', 'pi')
            ->where('pi.suggestion in (:other_suggestion)')
            ->setParameters([
                'other_suggestion' => $suggestionId
            ]);

        return $qb->getQuery()->getResult();
    }

    public function findInformationByBlockPatientsWithElements(int $patient): array
    {


        $qb = $this->getEntityManager()->createQueryBuilder();

        $stringPath = '/patient/fiche/information-generale';

        // $id = $patient["id"];



        $qb->select('pi AS patientInfo')
            ->from('App:PatientsInformation', 'pi')
            ->andWhere('pi.pati = :val')
            ->innerJoin(
                'App:Patients',
                'p',
                'WITH',
                'pi.pati = :val'
            )
            ->innerJoin(
                'App:PatientsInformationTemplateElement',
                'itel',
                'WITH',
                'pi.itel = itel.id'
            )
            ->innerJoin(
                'App:Suggestions',
                's',
                'WITH',
                'itel.suge = s.id'
            )
            ->innerJoin(
                'App:Suggestions',
                'par',
                'WITH',
                's.parentSugg = par.id'
            )

            ->innerJoin(
                'App:Suggestions',
                'sugge',
                'WITH',
                'par.parentSugg = sugge.id'
            )

            ->setParameters([
                'val' => $patient,
                // 'pathString' => $stringPath
            ]);
        // ->setMaxResults(1)
        // ->orderBy('par.id', 'DESC');

        $query = $qb->getQuery();

        return $query->getResult();
    }

    public function findInformationByBlockPatients(int $patient): array
    {


        $qb = $this->getEntityManager()->createQueryBuilder();

        $stringPath = '/patient/fiche/information-generale';

        // $id = $patient["id"];



        $qb->select('  s AS suggestions, s.id AS id, pi.value AS valeurColumn, pi.comment AS commentColumn, pi.end AS endDate, pi.start AS startDate,  par.id AS valeurParentId,  sugge.path_string AS valeurParentPathString, par.value AS valeurParent, par.path_string AS valeurpathString, sugge.value AS blockName, sugge.id AS idBlockName, s.value AS parent')
            ->from('App:PatientsInformation', 'pi')
            // ->andWhere('sugge.path_string = :pathString')
            ->innerJoin(
                'App:Patients',
                'p',
                'WITH',
                'pi.pati = :val'
            )
            ->innerJoin(
                'App:Suggestions',
                's',
                'WITH',
                'pi.sugg = s.id'
            )
            ->innerJoin(
                'App:Suggestions',
                'par',
                'WITH',
                's.parentSugg = par.id'
            )

            ->innerJoin(
                'App:Suggestions',
                'sugge',
                'WITH',
                'par.parentSugg = sugge.id'
            )


            ->setParameters([
                'val' => $patient,
                // 'pathString' => $stringPath
            ])
            // ->setMaxResults(1)
            ->orderBy('par.id', 'DESC');

        $query = $qb->getQuery();

        return $query->getResult();
    }

    // COALESCE(p.nicknames, p.id)

    // public function findPatientsInformation(): array
    // {

    //     $qb = $this->getEntityManager()->createQueryBuilder();


    //     $qb->select('p')
    //         ->from('App:PatientsInformation', 'p')
    //         ->andWhere('COALESCE(p.pati_id, p.id)')
    //         // ->orderBy('p.id', 'ASC')
    //         // ->setMaxResults($value)
    //         ->getQuery()
    //         ->getResult();

    //     $query = $qb->getQuery();
    //     return $query->getResult();
    // }

    //    /**
    //     * @return PatientsInformation[] Returns an array of PatientsInformation objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('p.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?PatientsInformation
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
