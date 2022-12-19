<?php

namespace App\Controller;

use App\Entity\PatientsContacts;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactsPatientsController extends AbstractController
{
    #[Route('/api/setDeleteContactsByPatients', name: 'app_setDeleteContactsByPatients')]
    public function setDeleteContactsByPatients(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        // $request = Request::createFromGlobals();
        $id = $request->get('id');

        $reports = $doctrine->getRepository(PatientsContacts::class)->find($id);

        $reports->setDeletedAt(new \DateTime('now'));
        $entityManager->flush();
        return $this->json(["id" => $reports->getId()]);
    }
}
