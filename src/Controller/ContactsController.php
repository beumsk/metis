<?php

namespace App\Controller;



use App\Entity\Contacts;
use App\Entity\Patients;
use App\Entity\Suggestions;
use App\Entity\FollowupGoals;
use App\Entity\PatientsContacts;
use App\Entity\PatientsPatients;
use App\Entity\ContactsInformation;

use Doctrine\Persistence\ManagerRegistry;
use App\Entity\InformationTemplateElement;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ContactsController extends AbstractController
{

    #[Route('/api/getContacts', name: 'app_listContacts')]
    public function listContacts(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $contacts = $doctrine->getRepository(Contacts::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $calls = [];
        foreach ($contacts as $value) {
            $calls[] = [
                "id" => $value->getId(),
                "firstname" => $value->getFirstName(),
                "lastname" => $value->getLastName()
            ];
        }



        $jsonObject = $serializer->serialize($calls, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
            JsonEncoder::FORMAT,
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ["url", "description", "type", "pathString", "path", "calls", "patients", "informations"]]
        ]);

        $response =  new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        $response->setSharedMaxAge(3600);



        return $response;
    }


    #[Route('/api/getContactsPage', name: 'app_allContacts')]
    public function index(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $contacts = $doctrine->getRepository(Contacts::class)->findPackBySomeField();

        $arrContact = [];
        foreach ($contacts as $value) {
            $arrContact[] = [
                "id" => $value->getId(),
                "firstname" => $value->getFirstName(),
                "lastname" => $value->getLastName(),
                "type" => $value->getType(),
                "numberPatients" => count($value->getPatients()),
                "numberApps" => count($value->getCalls())
            ];
        }

        // dd($contacts);
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        return new Response($serializer->serialize($arrContact, 'json'), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }



    #[Route('/api/saveItemAppels', name: 'app_saveItemAppels')]
    public function saveItemAppels(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $id = $request->request->get('idInfo');
        $value = $request->request->get('value');
        $comment = $request->request->get('commentaire');
        $idCont = $request->request->get('idCont');

        $contactInfos = $doctrine->getRepository(ContactsInformation::class)->find($id);

        $contactInfos->setValue($value);
        $contactInfos->setComment($comment);

        // dd($contactInfos);
        $entityManager->flush();



        $contact = $doctrine->getRepository(Contacts::class)->find($idCont);

        if ($contactInfos) {
            return new JsonResponse([
                'data' => ["id" => $contactInfos->getCont()->getId()],
                'response' => "Sent !"
            ]);
        }
    }

    #[Route('/api/setPlacesToContact', name: 'app_setPlacesToContact')]
    public function setPlacesToContact(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        $search = "Place  Cathédrale";
        $new = str_replace(' ', '%20', $search);
        $url = 'https://webservices-pub.bpost.be/ws/ExternalMailingAddressProofingCSREST_v1/address/autocomplete?id=1&q={' . $new . '}1000';

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $url);

        $content = $response->getContent();
        return $this->json(json_decode($content));
    }



    #[Route('/api/getCallsAndOrganisationById', name: 'app_getLastWomenStanding')]
    public function getCallsAndOrganisationById(ManagerRegistry $doctrine, SerializerInterface $serializer)
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
                // dd($contact->getInformations());
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
    #[Route('/api/getCallsAndOrganisationRunning', name: 'app_getCallsAndOrganisationRunning')]
    public function getCallsAndOrganisationRunning(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {

        $request = Request::createFromGlobals();

        $antenna = $request->request->get('antenna');

        $followup = $doctrine->getRepository(FollowupGoals::class)->followupGoalsByAntenna($antenna);
        $arrCont = [];

        foreach ($followup as $value) {
            if ($value->getCont() !== null && $value->getDeletedAt() !== null && $value->getType() === 2 && $value->getStatus() === 1) {
                $arrCont[] = $value->getCont()->getId();
            }
        }
        $arrunique = array_unique($arrCont);

        $arrByPaquets = [];

        // dd($arrunique);
        for ($i = 0; $i < 10; $i++) {
            array_push($arrByPaquets, $arrCont[$i]);
        }


        $contact = $doctrine->getRepository(Contacts::class)->findBy(array('id' => $arrByPaquets));





        foreach ($contact as $value) {
            $fogo = $doctrine->getRepository(FollowupGoals::class)->findBy(["cont" => $value->getId(), "deleted_at" => null]);
            // $value->setGoalsInformation($fogo);
            foreach ($fogo as $fg) {
                //     // dd($fg);
                // $value->setGoalsInformation($fogo);
                $value->setGoalsInformation([
                    "id" => $fg->getId(), "description" => $fg->getDescription(), "type" => $fg->getType(), "creationDate" => $fg->getCreationDate(), "contact" => $fg->getContact(), "patientfirstName" => $fg->getPati()->getFirstName(), "patientLastName" => $fg->getPati()->getLastName(),
                    "fore" =>     array_map(function ($a) {
                        return $a->getContent();
                    }, [...$fg->getFore()])
                ]);
            }
        }






        $encoder = new JsonEncoder();
        // $encoders = [new JsonEncoder()];
        // $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        // $serializer = new Serializer($normalizers, $encoders);

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];

        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        // var_dump($serializer->serialize($org, 'json'));
        $data = $serializer->serialize($contact, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts", "patients", "cont", "orga", "calls", "informations"]]);

        return $this->json(json_decode($data)); // Output: {"name":"foo"}
    }

    #[Route('/api/getCallsAndOrganisationFinnished', name: 'app_getCallsAndOrganisationFinnished')]
    public function getCallsAndOrganisationFinnished(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        $contact = $doctrine->getRepository(Contacts::class)->findAll();

        foreach ($contact as $value) {
            $fogo = $doctrine->getRepository(FollowupGoals::class)->findBy(["cont" => $value->getId(), "deleted_at" => null, "type" => 2, "status" => 0]);
            $value->setGoalsInformation($fogo);
        }
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize($contact, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);


        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }


    #[Route('/api/setPatientPatient', name: 'app_setPatientPatient')]
    public function setPatientPatient(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $description = $request->request->get('description');
        $commentaire = $request->request->get('commentaire');
        $patientItemList = $request->request->get('patientItemList');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $typeItemList = $request->request->get('typeItemList');
        $idPatient = $request->request->get('idPatient');

        $entityManager = $doctrine->getManager();

        $contact = new PatientsPatients();

        $contact->setLinkDescription($description);
        $pati_item = $doctrine->getRepository(Patients::class)->find($patientItemList);
        $contact->setOrpa($pati_item);

        if ($start !== "null") {
            $contact->setStart(new \DateTime($start));
        }

        if ($end !== "null") {
            $contact->setEnd(new \DateTime($end));
        }
        $sugg_item = $doctrine->getRepository(Suggestions::class)->find($typeItemList);
        $contact->setSugg($sugg_item);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);
        $contact->setTapa($patient);


        $entityManager->persist($contact);
        $entityManager->flush();


        return $this->json($contact);
    }

    #[Route('/api/updatePatientPatient', name: 'app_updatePatientPatient')]
    public function updatePatientPatient(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $description = $request->request->get('description');
        $commentaire = $request->request->get('commentaire');
        $patientItemList = $request->request->get('patientItemList');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $typeItemList = $request->request->get('typeItemList');
        $idPatient = $request->request->get('idPatient');

        $entityManager = $doctrine->getManager();

        $contact = new PatientsPatients();

        $contact->setLinkDescription($description);
        $pati_item = $doctrine->getRepository(Patients::class)->find($patientItemList);
        $contact->setOrpa($pati_item);

        if ($start !== "null") {
            $contact->setStart(new \DateTime($start));
        }

        if ($end !== "null") {
            $contact->setEnd(new \DateTime($end));
        }
        $sugg_item = $doctrine->getRepository(Suggestions::class)->find($typeItemList);
        $contact->setSugg($sugg_item);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);
        $contact->setTapa($patient);


        // $entityManager->persist($contact);
        $entityManager->flush();


        return $this->json($contact);
    }


    #[Route('/api/setPatientContact', name: 'app_setPatientContact')]
    public function setContactPatient(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $description = $request->request->get('description');
        $commentaire = $request->request->get('commentaire');
        $contactItemList = $request->request->get('contactItemList');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $typeItemList = $request->request->get('typeItemList');
        $idPatient = $request->request->get('idPatient');
        $Idinfos = $request->request->get('Idinfos');

        $entityManager = $doctrine->getManager();

        $contact = new PatientsContacts();

        $contact->setLinkDescription($description);
        $cont_item = $doctrine->getRepository(Contacts::class)->find($contactItemList);
        $contact->setCont($cont_item);

        if ($start !== "null") {
            $contact->setStart(new \DateTime($start));
        }

        if ($end !== "null") {
            $contact->setEnd(new \DateTime($end));
        }
        $sugg_item = $doctrine->getRepository(Suggestions::class)->find($typeItemList);
        $contact->setSugg($sugg_item);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);
        $contact->setPati($patient);


        $entityManager->persist($contact);
        $entityManager->flush();


        return $this->json($contact);
    }

    #[Route('/api/updatePatientContact', name: 'app_updatePatientContact')]
    public function updatePatientContact(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $description = $request->request->get('description');
        $commentaire = $request->request->get('commentaire');
        $contactItemList = $request->request->get('contactItemList');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $typeItemList = $request->request->get('typeItemList');
        $idPatient = $request->request->get('idPatient');
        $Idinfos = $request->request->get('Idinfos');

        $entityManager = $doctrine->getManager();

        $contact = $doctrine->getRepository(PatientsContacts::class)->find($Idinfos);

        $contact->setLinkDescription($description);
        $cont_item = $doctrine->getRepository(Contacts::class)->find($contactItemList);
        $contact->setCont($cont_item);

        if ($start !== "null") {
            $contact->setStart(new \DateTime($start));
        }

        if ($end !== "null") {
            $contact->setEnd(new \DateTime($end));
        }
        $sugg_item = $doctrine->getRepository(Suggestions::class)->find($typeItemList);
        $contact->setSugg($sugg_item);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);
        $contact->setPati($patient);


        // $entityManager->persist($contact);
        $entityManager->flush();


        return $this->json($contact);
    }


    #[Route('/api/setContacts', name: 'app_medias')]
    public function setPatients(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $firstName = $request->request->get('name');
        $lastName = $request->request->get('description');
        $type = $request->request->get('url');
        $description = $request->request->get('url');
        $url = $request->request->get('url');


        $entityManager = $doctrine->getManager();

        $contact = new Contacts();

        $contact->setFirstname($firstName);
        $contact->setLastname($lastName);
        $contact->setType($type);
        $contact->setDescription($description);
        $contact->setUrl($url);

        $entityManager->persist($contact);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $contact->getId(),
            'response' => "Sent !"
        ]);
    }
}
