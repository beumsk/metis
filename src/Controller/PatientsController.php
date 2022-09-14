<?php

namespace App\Controller;

use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\BrowserKit\Request;

class PatientsController extends AbstractController
{
    #[Route('/api/getGoals', name: 'app_patients')]
    public function getGoals(ManagerRegistry $doctrine): Response
    {
        $goals = $doctrine->getRepository(FollowupGoals::class)->findAll();
        return $this->json($goals);
    }

    #[Route('/api/getReports', name: 'app_reports')]
    public function getReports(ManagerRegistry $doctrine): Response
    {
        $reports = $doctrine->getRepository(FollowupReports::class)->findAll();
        return $this->json($reports);
    }

    #[Route('/api/getMedias', name: 'app_medias')]
    public function getMedias(ManagerRegistry $doctrine): Response
    {
        $medias = $doctrine->getRepository(Medias::class)->findAll();
        return $this->json($medias);
    }
}
