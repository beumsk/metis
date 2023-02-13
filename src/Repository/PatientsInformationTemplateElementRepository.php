<?php

namespace App\Repository;

use App\Entity\PatientsInformationTemplateElement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PatientsInformationTemplateElement>
 *
 * @method PatientsInformationTemplateElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method PatientsInformationTemplateElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method PatientsInformationTemplateElement[]    findAll()
 * @method PatientsInformationTemplateElement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientsInformationTemplateElementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PatientsInformationTemplateElement::class);
    }

    public function add(PatientsInformationTemplateElement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PatientsInformationTemplateElement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    public function findElement()
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $stringPath = '/patient/fiche/information-generale';

        // $id = $patient["id"];



        $qb->select('ite')
            ->from('App:InformationTemplateElement', 'ite')

            ->innerJoin(
                'App:InformationTemplateBlock',
                'itbk',
                'WITH',
                'ite.itbk = itbk.id'
            )
            ->andWhere('itbk.block_type = :type')
            // ->setMaxResults(1)
            ->setParameters(['type' => 'patient'])

            ->orderBy('itbk.block_order', 'ASC');


        $query = $qb->getQuery();

        return $query->getResult();
    }
    //    /**
    //     * @return PatientsInformationTemplateElement[] Returns an array of PatientsInformationTemplateElement objects
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

    //    public function findOneBySomeField($value): ?PatientsInformationTemplateElement
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
