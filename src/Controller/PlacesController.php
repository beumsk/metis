<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use App\Bpost\Bpost_Address_Validation;
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
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\SerializerBuilder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;



class PlacesController extends AbstractController
{
    #[Route('/api/getPlaces', name: 'app_places')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $places = $doctrine->getRepository(Contacts::class)->findBy(["type" => 3, "deleted_at" => null]);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $jsonObject = $serializer->serialize($places, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "informations", "orga", "calls", "patients", "informations", "cont", "goalsByBlock", "occupants"]
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        $response->setSharedMaxAge(3600);
        return $response;
    }

    #[Route('/api/getPlacesList', name: 'app_getPlacesList')]
    public function getPlacesList(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();



        $antenna = $request->request->get('antenna');


        $places = $doctrine->getRepository(Contacts::class)->findBy(["type" => 3, "deleted_at" => null]);


        // dd($isBrussels);

        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $jsonObject = $serializer->normalize($places, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "orga", "calls", "cont", "goalsByBlock", "informations"]
        ]);

        $lieuxInBrussels = [];
        $lieuxInLiege = [];
        $other = [];

        foreach ($jsonObject as $value) {
            $suggestionsBruxelles = ["/Bruxelles/i", "/gare du midi/i", "/Anderlecht/i", "/Auderghem/i", "/Berchem-Sainte-Agathe/i", "/Etterbeek/i", "/Evere/i", "/Forest/i", "/Ganshoren/i", "/Ixelles/i", "/Jette/i", "/Koekelberg/i", "/Molenbeek-Saint-Jean/i", "/Saint-Gilles/i", "/Saint-Josse-ten-Noode/i", "/Schaerbeek/i", "/Uccle/i", "/Watermael-Boitsfort/i", "/Woluwe-Saint-Lambert/i", "/Woluwe-Saint-Pierre/i"];
            $suggestionsLiege = ["/Liège/i"];
            $isBrussels = "/Bruxelles/i";
            $isLiege = "/Liège/i";

            $mergeArr = array_merge($suggestionsBruxelles, $suggestionsLiege);
            // dd($mergeArr);
            foreach ($suggestionsBruxelles as $dpt) {
                dd($value);
                if (
                    preg_match($dpt, $value->getLastName()) === 1 ||
                    preg_match($dpt, $value->getUrl()) === 1
                ) {
                    array_push($lieuxInBrussels, $value);
                }
            }

            foreach ($suggestionsLiege as $dpt) {
                if (
                    preg_match($dpt, $value->getLastName()) === 1 ||
                    preg_match($dpt, $value->getUrl()) === 1
                ) {
                    array_push($lieuxInLiege, $value);
                }
            }

            foreach ($mergeArr as $dpt) {


                if (
                    preg_match($dpt, $value->getLastName()) !== 1 ||
                    preg_match($dpt, $value->getUrl()) !== 1
                ) {
                    array_push($other, $value);
                }
            }
        }

        $arr = [count($lieuxInBrussels) => [$lieuxInBrussels], count($lieuxInLiege) => [$lieuxInLiege], count($other) => [$other]];
        // dd($arr);
        $response = new Response(json_encode($arr), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        // $response->setSharedMaxAge(3600);
        return $response;
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
