<?php

namespace App\Controller;

use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use App\Entity\Patients;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

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

    #[Route('/api/getPatients', name: 'app_getPatients')]
    public function getPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $page = $request->request->get('page');
        $patients = $doctrine->getRepository(Patients::class)->findByPaquets($page);
        return $this->json($patients);
    }

    #[Route('/api/getPatient', name: 'app_getPatient')]
    public function getPatient(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $patients = $doctrine->getRepository(Patients::class)->find($id);
        return $this->json($patients);
    }

    #[Route('/api/getMedias', name: 'app_medias')]
    public function getMedias(ManagerRegistry $doctrine): Response
    {
        $medias = $doctrine->getRepository(Medias::class)->findAll();
        return $this->json($medias);
    }

    #[Route('/api/setPatients', name: 'app_setPatients')]
    public function setPatients(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $nickname = $request->request->get('nickname');
        $lastname = $request->request->get('lastname');
        $firstname = $request->request->get('firstname');
        $team = $request->request->get('team');

        $entityManager = $doctrine->getManager();

        $patient = new Patients();

        $patient->setNicknames($nickname);
        $patient->setLastname($lastname);
        $patient->setFirstname($firstname);
        $patient->setTeam($team);
        $patient->setBirthLocation('null', null);
        $patient->setStory('null', null);
        $patient->setFollowUpType(0);

        $entityManager->persist($patient);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $patient->getId(),
            'response' => "Sent !"
        ]);
    }
}
