<?php

namespace App\Controller;

use App\Entity\Contacts;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;

class CallsController extends AbstractController
{
    #[Route('/api/findReferents', name: 'app_findReferents')]
    public function findReferents(ManagerRegistry $doctrine): Response
    {
        $findReferents = $doctrine->getRepository(Contacts::class)->findReferents();
        $arrReferents = [];

        foreach ($findReferents as $value) {
            $arrReferents[] = ["firstName" => $value->getFirstname(), "lastName" => $value->getLastname(), "id" => $value->getId()];
        }

        return $this->json($arrReferents);
    }
}
