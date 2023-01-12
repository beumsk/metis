<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use App\Bpost\Bpost_Address_Validation;
use App\Entity\Contact;
use App\Entity\Patients;
use App\Entity\InformationTemplateElement;
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
    #[Route('/api/getPlacesSelect', name: 'app_getPlacesForSelect')]
    public function getPlacesForSelect(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();


        $pati_id = $request->request->get('id');
        $query = $request->request->get('query');

        // dd($query);
        $contacts = $doctrine->getRepository(Contacts::class)->findBy(["type" => 3, "deleted_at" => null]);

        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $calls = [];
        foreach ($contacts as $value) {
            // dd($value);
            if ($value->getDeletedAt() === null) {
                $calls[] = [
                    "value" => $value->getId(),
                    "label" => $value->getFirstName() . " " . $value->getLastName(),

                ];
            }
        }





        $jsonObject = $serializer->serialize($calls, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
            JsonEncoder::FORMAT,
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ["url", "description", "type", "pathString", "sugg", "patients", "path", "calls", "informations", "cont", "calls", "informations", "occupants"]]
        ]);

        $response =  new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        $response->setSharedMaxAge(3600);



        return $response;
    }


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
        $places = $doctrine->getRepository(Contacts::class)->findBy(["type" => 3, "deleted_at" => null]);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $jsonObject = $serializer->serialize($places, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "orga", "calls", "patients", "cont", "goalsByBlock"]
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        $response->setSharedMaxAge(3600);
        return $response;
    }

    #[Route('/api/getPlacesListById', name: 'app_getPlacesListById')]
    public function getPlacesListById(ManagerRegistry $doctrine): Response
    {

        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $contact = $doctrine->getRepository(Contacts::class)->find($id);
        $itbk = $doctrine->getRepository(InformationTemplateElement::class)->findBy(['itbk' => 12]);


        $arritbk = [];
        foreach ($itbk as $value) {
            $arritbk[] = $value->getSuge()->getId();
        }


        $suggestions = $doctrine->getRepository(Suggestions::class)->findBy(array('id' => $arritbk));

        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $nameOfBlocks = [];
        foreach ($suggestions as $value) {
            $nameOfBlocks[] = ["id" => $value->getId(), "value" => $value->getValue(), "obj" => []];
        }




        $blocksEncode = json_encode($nameOfBlocks);
        $blocksDecode = json_decode($blocksEncode);

        // dd($blocksDecode);
        foreach ($blocksDecode as $value) {
            foreach ($contact->getInformations() as $infosCont) {
                if ($infosCont->getItel()->getSuge()->getId() === $value->id) {
                    array_push($value->obj, ["id" => $infosCont->getId(), "valueInformations" => $infosCont->getValue(), "valueDescription" => $infosCont->getComment(), "sugge" => ($infosCont !== null) ? $infosCont->getSugg() : null]);
                }
            }
        }
        // dd($infosCont->getItel());
        $patients = [];

        foreach ($contact->getPatients() as $patient) {
            $patients[] = ["id" => $patient->getPati()->getId(), "firstName" => $patient->getPati()->getFirstName(), "lastName" => $patient->getPati()->getLastName()];
        }



        $jsonObject = $serializer->serialize(["informations" => $blocksDecode, "patients" => $patients, "firstname" => $contact->getFirstName(), "lastname" => $contact->getLastName(), "description" => $contact->getDescription()], 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);




        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }

    #[Route('/api/deleteLierPlaces', name: 'app_deleteLierPlaces')]
    public function deleteLierPlaces(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();



        $idPatient = $request->request->get('idPatient');
        $idLieu = $request->request->get('idLieu');

        $entityManager = $doctrine->getManager();

        $place = $doctrine->getRepository(PatientsPlaces::class)->find($idLieu);
        $place->setDeletedAt(new \DateTime('now'));

        $entityManager->flush();


        return new JsonResponse([
            'id' => $place->getId(),
            'response' => "Sent !"
        ]);
    }



    #[Route('/api/addPlace', name: 'app_addPlace')]
    public function addPlace(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();


        $name = $request->request->get('name');
        $url = $request->request->get('url');
        $description = $request->request->get('description');
        $entityManager = $doctrine->getManager();
        $places = new Contacts();

        $places->setFirstname($name);
        $places->setLastname($name);
        $places->setUrl($url);
        $places->setDescription($description);
        $places->setType(3);

        $entityManager->persist($places);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $places->getId(),
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
        $place->setPlace($places);
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
            'id' => $place->getId(),
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
