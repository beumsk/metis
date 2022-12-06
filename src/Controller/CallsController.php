<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
