<?php

namespace App\Repository;

use App\Entity\InformationTemplateBlock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InformationTemplateBlock>
 *
 * @method InformationTemplateBlock|null find($id, $lockMode = null, $lockVersion = null)
 * @method InformationTemplateBlock|null findOneBy(array $criteria, array $orderBy = null)
 * @method InformationTemplateBlock[]    findAll()
 * @method InformationTemplateBlock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InformationTemplateBlockRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InformationTemplateBlock::class);
    }

    public function add(InformationTemplateBlock $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InformationTemplateBlock $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return InformationTemplateBlock[] Returns an array of InformationTemplateBlock objects
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

//    public function findOneBySomeField($value): ?InformationTemplateBlock
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
