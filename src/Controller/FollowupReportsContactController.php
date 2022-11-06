<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupReports;
use App\Entity\FollowupReportsContact;
use App\Entity\PatientsContacts;
use App\Entity\PatientsPatients;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class FollowupReportsContactController extends AbstractController
{
    #[Route('/api/getPatientsByPatients', name: 'app_getPatientsByPatients')]
    public function getPatientsByPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $reports = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);

        $cont = $doctrine->getRepository(PatientsContacts::class)->findBy(["pati" => $id]);
        $patientspatients = $doctrine->getRepository(PatientsPatients::class)->findBy(['tapa' => $id]);



        return $this->json($patientspatients);
    }

    #[Route('/api/getContactsByPatients', name: 'app_contactsbypatients')]
    public function getContactsByPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $reports = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);
        $test = [];
        foreach ($reports as $key) {
            $test[] = $key->getId();
        }

        $cont = $doctrine->getRepository(PatientsContacts::class)->findBy(["pati" => $id]);
        $patientspatients = $doctrine->getRepository(PatientsPatients::class)->findBy(['tapa' => $id]);



        return $this->json($cont);
    }
}
