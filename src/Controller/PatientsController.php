<?php

namespace App\Controller;

use App\Entity\FollowupGoals;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\BrowserKit\Request;

class PatientsController extends AbstractController
{
    #[Route('/api/getPatients', name: 'app_patients')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $patients = $doctrine->getRepository(FollowupGoals::class)->findAll();
        // $goals = $patients->getPati();

        return $this->json($patients);
    }
}
