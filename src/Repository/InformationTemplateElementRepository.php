<?php

namespace App\Repository;

use App\Entity\InformationTemplateElement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InformationTemplateElement>
 *
 * @method InformationTemplateElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method InformationTemplateElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method InformationTemplateElement[]    findAll()
 * @method InformationTemplateElement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InformationTemplateElementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InformationTemplateElement::class);
    }

    public function add(InformationTemplateElement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InformationTemplateElement $entity, bool $flush = false): void
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
    //     * @return InformationTemplateElement[] Returns an array of InformationTemplateElement objects
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

    //    public function findOneBySomeField($value): ?InformationTemplateElement
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
