<?php

namespace App\Controller;


use App\Entity\PatientsPatients;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PatientsPatientsController extends AbstractController
{


    #[Route('/api/getDeletePatientsPatients', name: 'getDeletePatientsPatients')]
    public function getDeletePatientsPatients(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        // $request = Request::createFromGlobals();
        $id = $request->get('id');

        $reports = $doctrine->getRepository(PatientsPatients::class)->find($id);

        $reports->setDeletedAt(new \DateTime('now'));
        $entityManager->flush();
        return $this->json(["id" => $reports->getId()]);
    }
}
