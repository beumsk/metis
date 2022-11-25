<?php

namespace App\Repository;

use App\Entity\PatientsInformationTemplateBlock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PatientsInformationTemplateBlock>
 *
 * @method PatientsInformationTemplateBlock|null find($id, $lockMode = null, $lockVersion = null)
 * @method PatientsInformationTemplateBlock|null findOneBy(array $criteria, array $orderBy = null)
 * @method PatientsInformationTemplateBlock[]    findAll()
 * @method PatientsInformationTemplateBlock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientsInformationTemplateBlockRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PatientsInformationTemplateBlock::class);
    }

    public function add(PatientsInformationTemplateBlock $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PatientsInformationTemplateBlock $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return PatientsInformationTemplateBlock[] Returns an array of PatientsInformationTemplateBlock objects
     */
    public function findBlockElements(): array
    {
        return $this->createQueryBuilder('iftb')
            ->orderBy('iftb.block_order', 'ASC')
            ->getQuery()
            ->getResult();
    }

    //    public function findOneBySomeField($value): ?PatientsInformationTemplateBlock
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
