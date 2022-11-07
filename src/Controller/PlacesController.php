<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use App\Entity\Patients;
use App\Entity\PatientsPlaces;
use App\Entity\Places;
use App\Entity\Suggestions;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class PlacesController extends AbstractController
{
    #[Route('/api/getPlaces', name: 'app_places')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $places = $doctrine->getRepository(Contacts::class)->findBy(["type" => 3]);
        return $this->json($places);
    }

    #[Route('/api/deleteLierPlaces', name: 'app_deleteLierPlaces')]
    public function deleteLierPlaces(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();



        $idPatient = $request->request->get('idPatient');
        $idLieu = $request->request->get('idLieu');

        $entityManager = $doctrine->getManager();

        $place = $doctrine->getRepository(PatientsPlaces::class)->find($idLieu);


        // $place->setComment($valueCommentary);
        // $place->setCont($places);
        // if ($start !== "null") {
        //     $place->setStart(new \DateTime($start));
        // }

        // if ($end !== "null") {
        //     $place->setEnd(new \DateTime($end));
        // }
        // $place->setSugg($suggType);
        // $place->setPati($patient);
        $place->setDeletedAt(new \DateTime('now'));

        // $entityManager->persist($place);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $place->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/updateLierPlaces', name: 'app_updateLierPlaces')]
    public function updateLierPlaces(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();


        $valueLieux = $request->request->get('valueLieux');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $valueType = $request->request->get('valueType');
        $idPatient = $request->request->get('idPatient');
        $idLieu = $request->request->get('idLieu');

        $entityManager = $doctrine->getManager();

        $place = $doctrine->getRepository(PatientsPlaces::class)->find($idLieu);
        $valueCommentary = $request->request->get('valueCommentary');

        $places = $doctrine->getRepository(Contacts::class)->find($valueLieux);
        $suggType = $doctrine->getRepository(Suggestions::class)->find($valueType);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);


        $place->setComment($valueCommentary);
        $place->setCont($places);
        if ($start !== "null") {
            $place->setStart(new \DateTime($start));
        }

        if ($end !== "null") {
            $place->setEnd(new \DateTime($end));
        }
        $place->setSugg($suggType);
        $place->setPati($patient);

        // $entityManager->persist($place);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $patient->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/setLierPlaces', name: 'app_setLierPlaces')]
    public function setLierPlaces(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();


        $valueLieux = $request->request->get('valueLieux');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $valueType = $request->request->get('valueType');
        $idPatient = $request->request->get('idPatient');

        $entityManager = $doctrine->getManager();

        $place = new PatientsPlaces();
        $valueCommentary = $request->request->get('valueCommentary');

        $places = $doctrine->getRepository(Contacts::class)->find($valueLieux);
        $suggType = $doctrine->getRepository(Suggestions::class)->find($valueType);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);


        $place->setComment($valueCommentary);
        $place->setCont($places);
        if ($start !== "null") {
            $place->setStart(new \DateTime($start));
        }

        if ($end !== "null") {
            $place->setEnd(new \DateTime($end));
        }
        $place->setSugg($suggType);
        $place->setPati($patient);

        $entityManager->persist($place);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $patient->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/setPlaces', name: 'app_setPlaces')]
    public function setPatients(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $name = $request->request->get('name');
        $description = $request->request->get('description');
        $url = $request->request->get('url');

        $entityManager = $doctrine->getManager();

        $patient = new Places();

        $patient->setName($name);
        $patient->setDescription($description);
        $patient->setUrl($url);

        $entityManager->persist($patient);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $patient->getId(),
            'response' => "Sent !"
        ]);
    }
}
