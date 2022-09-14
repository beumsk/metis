<?php

namespace App\Repository;

use App\Entity\PatientsInformationTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PatientsInformationTemplate>
 *
 * @method PatientsInformationTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method PatientsInformationTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method PatientsInformationTemplate[]    findAll()
 * @method PatientsInformationTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientsInformationTemplateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PatientsInformationTemplate::class);
    }

    public function add(PatientsInformationTemplate $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PatientsInformationTemplate $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PatientsInformationTemplate[] Returns an array of PatientsInformationTemplate objects
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

//    public function findOneBySomeField($value): ?PatientsInformationTemplate
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
