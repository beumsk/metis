<?php

namespace App\Controller;


use App\Entity\Contacts;
use App\Entity\FollowupReports;
use App\Entity\Patients;
use App\Entity\PatientsContacts;
use App\Entity\PatientsPatients;
use App\Entity\Suggestions;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;

class ContactsController extends AbstractController
{
    #[Route('/api/getContacts', name: 'app_allContacts')]
    public function index(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $contacts = $doctrine->getRepository(Contacts::class)->find(1);

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        return new Response($serializer->serialize($contacts, 'json'), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        // $encoders = [new JsonEncoder()];
        // $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        // $serializer = new Serializer($normalizers, $encoders);



        // $jsonObject = $serializer->serialize($contacts, 'json', [
        //     'circular_reference_handler' => function ($object) {
        //         return $object->getId();
        //     },
        //     JsonEncoder::FORMAT,
        //     [AbstractNormalizer::IGNORED_ATTRIBUTES => ["url", "description", "type", "pathString", "path"]]
        // ]);

        // $response =  new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        // $response->setSharedMaxAge(3600);



        // return $response;


        // return $this->json($contacts);
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
