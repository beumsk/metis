<?php

namespace App\Controller;


use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Patients;
use App\Entity\PatientsContacts;
use App\Entity\PatientsInformation;
use App\Serializer\MyMaxDepthHandler;
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
        $contacts = $doctrine->getRepository(Contacts::class)->findByPaquetsContacts();

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        return new Response($serializer->serialize($contacts, 'json'), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }
    #[Route('/api/getCallsAndOrganisationRunning', name: 'app_getLastWomenStanding')]
    public function getCallsAndOrganisationRunning(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        $contact = $doctrine->getRepository(Contacts::class)->findByPaquetsContacts();

        foreach ($contact as $value) {
            $fogo = $doctrine->getRepository(FollowupGoals::class)->findBy(["cont" => $value->getId(), "deleted_at" => null, "type" => 2, "status" => 1]);
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
    #[Route('/api/getAppandOrga', name: 'app_getAppandOrga')]
    public function getAppandOrga(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        // if (!$this->get('security.context')->isGranted('ROLE_USER')) {
        //     return $this->redirect($this->generateUrl('idr_suivi_home'));
        // }

        // $request = $this->getRequest();
        $antenna = 'Bruxelles';

        $followUpReportRepository = $doctrine->getRepository(FollowupReports::class);
        $calls = $followUpReportRepository->findCalls(
            [FollowupReports::ACTIVITY_CALL_OUT, FollowupReports::ACTIVITY_CALL_IN],
            $antenna
        );

        /*        $calls = $followUpReportRepository->findBy(
            ['activityType' => [FollowUpReport::ACTIVITY_CALL_OUT, FollowUpReport::ACTIVITY_CALL_IN]],
            ["reportDate" => "DESC" ],
            1000
        );
*/
        // if ($format == "json") {
        // return new JsonResponse([
        //     'calls' => $calls,
        // ]);
        // }
        return $this->json($calls);
        // return [
        //     'calls' => $calls,
        // ];
    }

    #[Route('/api/getOrganisationAndAppels', name: 'app_getOrganisationAndAppels')]
    public function getOrganisationAndAppels(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        // $request = $this->getRequest();
        $antenna = "Bruxelles";

        $since = null;
        // $since = $request->query->get('call_filter')['date'];
        // if (null == $since) {
        //     $since = new \Datetime();
        //     $since->modify('-1 month');
        // } else {
        //     $since = \Datetime::createFromFormat('d/m/Y', $since);
        // }

        // $filter = $request->query->get('call_filter');

        $function = isset($filter['function']) ? $filter['function'] : "";
        $team = isset($filter['team']) ? $filter['team'] : "";
        $referent = isset($filter['referent']) ? $filter['referent'] : "";
        $isHighlight = isset($filter['isHighlight']) ? $filter['isHighlight'] : "";

        // $functions = $this->get('idr_suivi.repository.suggestion')->findById($function);
        // $teams = $this->get('idr_suivi.repository.suggestion')->findById($team);
        // $referents = $this->get('idr_suivi.repository.contact')->findById($referent);

        // $tt = [];
        // foreach ($teams as $t) {
        //     $tt[] = $t->getValue();
        // }
        // $team = implode("','", $tt);

        // $rr = [];
        // foreach ($referents as $r) {
        //     $rr[] = $r->getId();
        // }
        // $referents = implode("','", $rr);   

        // var_dump($referents);

        // $filterForm = $this->createForm(new CallFilterType(), [
        //     'function' => $functions,
        //     'team' => $teams,
        //     'referent' => $referents,
        //     'date' => $since,
        //     'isHighlight' => (bool)$isHighlight
        // ]);

        $followUpReportRepository = $doctrine->getRepository(FollowupReports::class);
        $followUpGoalRepository = $doctrine->getRepository(FollowupGoals::class);

        $contacts = $followUpGoalRepository->findDistinctContacts(Contacts::TYPE_PERSON);
        $organisations = $followUpGoalRepository->findDistinctContacts(Contacts::TYPE_ORGANISATION);
        $patients = $followUpGoalRepository->findDistinctPatients();

        $contactRepository = $doctrine->getRepository(Contacts::class);
        $patientInfosRepository = $doctrine->getRepository(PatientsInformation::class);
        $followUpGoalsRepository = $doctrine->getRepository(FollowupGoals::class);

        $runningCalls = [];
        $closedCalls = [];
        $phones = [];
        $phonesPatient = [];
        //        $reports = [];

        foreach ($contacts as $contact) {
            $followUpGoalsEntity = new FollowupGoals();
            $todo = $followUpGoalsRepository->findTodo(
                $contact,
                $followUpGoalsEntity->getStatusForGroup(FollowupGoals::STATUS_GROUP_RUNNING),
                FollowupGoals::TYPE_CALL,
                $function,
                $team,
                $isHighlight,
                null,
                $antenna,
                $referent
            );
            if ($todo) {
                $runningCalls[] = $todo;
            }

            $closed = $followUpGoalRepository->findClosedByContact($contact, FollowupGoals::TYPE_CALL, $since, $function, $team, $isHighlight, $antenna, $referent);
            if ($closed) {
                $closedCalls[] = $closed;
            }

            $contactId = $contact->getId();

            $phones[$contactId] = $contactRepository->findContactInfos($contactId, Contacts::PHONE_PATH);
            // $reports[$contactId] = $followUpReportRepository->findBy(['followupGoals' => $contact], ['report_date' => 'asc']);
            // dd($followUpReportRepository);
        }


        foreach ($organisations as $organisation) {
            $followUpGoalsEntity = new FollowupGoals();
            $todo = $followUpGoalRepository->findTodo(
                $organisation,
                $followUpGoalsEntity->getStatusForGroup(FollowupGoals::STATUS_GROUP_RUNNING),
                FollowupGoals::TYPE_CALL,
                $function,
                $team,
                $isHighlight,
                null,
                $antenna,
                $referent
            );
            if ($todo) {
                $runningCalls[] = $todo;
            }

            $closed = $followUpGoalRepository->findClosedByContact($organisation, FollowupGoals::TYPE_CALL, $since, $function, $team, $isHighlight, $antenna, $referent);
            if ($closed) {
                $closedCalls[] = $closed;
            }

            $contactId = $organisation->getId();

            $phones[$contactId] = $contactRepository->findContactInfos($contactId, Contacts::PHONE_PATH);
            //            $reports[$contactId] = $followUpReportRepository->findBy(['followUpGoals' => $contact], ['reportDate' => 'asc']);
        }

        foreach ($patients as $patient) {
            $followUpGoalsEntity = new FollowupGoals();
            $todo = $followUpGoalRepository->findTodo(
                NULL,
                $followUpGoalsEntity->getStatusForGroup(FollowupGoals::STATUS_GROUP_RUNNING),
                FollowupGoals::TYPE_CALL,
                $function,
                $team,
                $isHighlight,
                $patient,
                $antenna,
                $referent
            );
            if ($todo) {
                $runningCalls[] = $todo;
            }

            $closed = $followUpGoalRepository->findClosedByPatient($patient, FollowupGoals::TYPE_CALL, $since, $function, $team, $isHighlight, $antenna, $referent);
            if ($closed) {
                $closedCalls[] = $closed;
            }

            $patientId = $patient->getId();

            $phonesPatient[$patientId] = $patientInfosRepository->findPatientInfos($patientId, PatientsInformation::INFO_PHONE);
        }

        $contacts = [
            // 'calls' => $runningCalls,
            // 'oldCalls' => $closedCalls,
            // 'phones' => $phones,
            'phonesPatient' => $phonesPatient,
            // 'filterForm' => $filterForm->createView(),
        ];


        // return dd($runningCalls);
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        return new Response($serializer->serialize($contacts, 'json'), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
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
