<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\InformationTemplateBlock;
use App\Entity\InformationTemplateElement;
use App\Entity\Medias;
use App\Entity\Patients;
use App\Entity\PatientsContacts;
use App\Entity\PatientsInformation;

use App\Entity\PatientsInformationTemplateBlock;
use App\Entity\PatientsInformationTemplateElement;
use App\Entity\PatientsPatients;
use App\Entity\PatientsPlaces;
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

class PatientsController extends AbstractController
{

    #[Route('/api/getGoals', name: 'app_patients')]
    public function getGoals(ManagerRegistry $doctrine, Request $request): Response
    {

        $goals = $doctrine->getRepository(FollowupGoals::class)->findAll();
        return $this->json($goals);
    }


    #[Route('/api/setContactsResearch', name: 'app_setContactsResearch')]
    public function setContactsResearch(ManagerRegistry $doctrine, Request $request): Response
    {

        // $request = Request::createFromGlobals();
        $valuetest = $request->query->get('value');
        $antenna = $request->query->get('antenna');
        // dd($valuetest);
        $reports = $doctrine->getRepository(Contacts::class)->findContactsResearch("loub", $antenna);
        return $this->json($reports);
    }


    #[Route('/api/getReports', name: 'app_reports')]
    public function getReports(ManagerRegistry $doctrine): Response
    {
        $reports = $doctrine->getRepository(FollowupReports::class)->findAll();
        return $this->json($reports);
    }



    #[Route('/api/getSearch', name: 'app_patientsSearch')]
    public function getSearchPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();
        $val = $request->query->get('val');
        $antenna = $request->query->get('antenna');

        $reports = $doctrine->getRepository(Patients::class)->findByNameByFirstNameByName($val, $antenna);
        return $this->json($reports);
    }

    #[Route('/api/setCreationPatient', name: 'app_setCreationPatient')]
    public function setCreationPatient(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {

        $request = Request::createFromGlobals();

        // $yearEnd = $dateEnd->format('Y-m-d');
        // $idSugg = $request->request->get('idsugg');
        $lastname = $request->request->get('lastname');
        $firstname = $request->request->get('firstname');
        $nickname = $request->request->get('nicknames');
        $antenna = $request->request->get('antenna');
        // $patiId = $request->request->get('patiid');
        // $itelId = $request->request->get('itelId');
        $entityManager = $doctrine->getManager();


        // $time = strtotime($start);
        // $datestart = new \DateTime('@' . $time);
        // $timeend = strtotime($end);
        // $dateend = new \DateTime('@' . $timeend);


        $patientInfo = new Patients();

        $patientInfo->setLastname($lastname);
        $patientInfo->setFirstname($firstname);
        $patientInfo->setNicknames($nickname);
        $patientInfo->setAntenna($antenna);
        $patientInfo->setFollowUpType(0);

        $entityManager->persist($patientInfo);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $patientInfo->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/setPatientsInformation', name: 'app_setPatientsInformation')]
    public function setPatientsInformation(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {

        $request = Request::createFromGlobals();

        // $yearEnd = $dateEnd->format('Y-m-d');
        $idSugg = $request->request->get('idsugg');
        $value = $request->request->get('value');
        $start = $request->request->get('start');
        $end = $request->request->get('end');
        $comment = $request->request->get('comment');
        $patiId = $request->request->get('patiid');
        $itelId = $request->request->get('itelId');
        $entityManager = $doctrine->getManager();


        $time = strtotime($start);
        $datestart = new \DateTime('@' . $time);
        $timeend = strtotime($end);
        $dateend = new \DateTime('@' . $timeend);


        $patientInfo = new PatientsInformation();

        $suggestion = $doctrine->getRepository(Suggestions::class)->find($idSugg);
        $patient = $doctrine->getRepository(Patients::class)->find($patiId);
        $itelInfo = $doctrine->getRepository(PatientsInformationTemplateElement::class)->findBy(['suge' => $suggestion->getparentSugg()->getId()]);

        $patientInfo->setSugg($suggestion);
        $patientInfo->setValue($value);
        $patientInfo->setStart($datestart);
        $patientInfo->setEnd($dateend);
        $patientInfo->setComment($comment);
        $patientInfo->setPati($patient);
        $patientInfo->setItel($itelInfo[0]);

        $entityManager->persist($patientInfo);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $patient->getId(),
            'response' => "Sent !"
        ]);
    }


    #[Route('/api/patientsInformation', name: 'app_patientsInformation')]
    public function getPatientsInformation(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {

        $patient = $doctrine->getRepository(PatientsInformation::class)->find(31);
        return $this->json($patient);
    }



    #[Route('/api/patientsInformationByPatients', name: 'app_patientsInformationByPatients')]
    public function getPatientsInformationByPatients(ManagerRegistry $doctrine, Request $request,  SerializerInterface $serializer)
    {
        $request = Request::createFromGlobals();


        $val = $request->request->get('id');
        // dd($val);

        $templateElement = $doctrine->getRepository(InformationTemplateElement::class)->findElement();
        $suggestionElement = $doctrine->getRepository(Suggestions::class)->findAll();

        $patient = $doctrine->getRepository(Patients::class)->find($val);
        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->findBy(["pati" => $patient->getId()]);
        $test = [];
        // dd($val);
        foreach ($templateElement as $key) {
            $te = $key->getId();
            // dd(count($patientInfo));
            if (count($patientInfo) > 0) {
                foreach ($patientInfo as $pati) {
                    if ($pati->getItel()->getId() === $key->getId()) {
                        $test[] = $pati;
                        // dd($pati);
                        if ($pati->getDeletedAt() === null) {
                            $key->setPatientInformation($pati);
                        }
                    }
                }
            }
        }


        foreach ($templateElement as $key) {
            $te = $key->getId();


            foreach ($suggestionElement as $sugg) {

                // $test[] = $pati;
                if ($sugg->getParentSugg() !== null && $sugg->getId() === $key->getSuge()->getId()) {
                    $s = $doctrine->getRepository(Suggestions::class)->findBy(["parentSugg" => $sugg->getId()]);

                    // dd($s);
                    $key->setSuggestionsByBlock([...$s]);
                }
            }
        }


        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize($templateElement, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts", "pati", "orga", "calls", "user", "fore", "contact"]
        ]);


        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }

    #[Route('/api/patientsInformationStatus', name: 'app_patientsInformationStatus')]
    public function getPatientsInformationStatus(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        // queryPathString
        $request = Request::createFromGlobals();


        $val = $request->request->get('id');
        $patient = $doctrine->getRepository(PatientsInformation::class)->find($val);
        $reports = $doctrine->getRepository(Patients::class)->findLatestSuggestion($patient, "/patient/fiche/statut-du-suivi");
        // return $this->json($reports, Response::HTTP_OK, [], ['groups' =>  'PatientsInformation', 'Patients', 'PatientsInformationTemplateElement']);

        return $this->json(["firstname" => $reports->getFirstName(), "lastname" => $reports->getLastName()]);
    }


    #[Route('/api/getPatients', name: 'app_getPatientsByPaquests')]
    public function getPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $page = $request->request->get('page');
        $antenna = $request->request->get('antenna');
        $searchNamePatient = $request->request->get('searchNamePatient');
        $searchDatePatient = $request->request->get('searchDateBirthPatient');
        $searchByRepports = $request->request->get('searchByRepports');
        $searchTypeForPatient = $request->request->get('typeSelectPatient');
        $patients = $doctrine->getRepository(Patients::class)->findPatients($page, $antenna, $searchNamePatient, $searchDatePatient, $searchTypeForPatient, $searchByRepports);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);




        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($patients, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts", "pati", "sugg", "orga", "calls", "user", "contact", "patient", "fogo", "cont", "plac", "user", "pati", "content", "hash", "firstContactDate", "deletedAt", "followUpType", "noCare", "noActivities", "noIndicators", "followupReportsCare", "followupReportsGoals", "followupReportsActivities", "followupReportsIndicators", "isHightlight", "duration", "description", "story", "unknownYear"]
        ]);


        // $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        // $response->setSharedMaxAge(3600);
        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }

    #[Route('/api/getAllPatientsSelect', name: 'app_getAllPatientsSelect')]
    public function getAllPatientsSelect(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $page = $request->request->get('page');
        $antenna = $request->request->get('antenna');
        $patients = $doctrine->getRepository(Patients::class)->listPatientsByAntenna($antenna);
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];

        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        $data = $serializer->serialize($patients, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ["fore", "nicknames", "birthLocation", "isAlive", "birthdate", "status", "team", "antenna", "contacts", "pati", "sugg", "orga", "calls", "user", "contact", "patient", "fogo", "cont", "plac", "user", "pati", "content", "hash", "firstContactDate", "deletedAt", "followUpType", "noCare", "noActivities", "noIndicators", "followupReportsCare", "followupReportsGoals", "followupReportsActivities", "followupReportsIndicators", "isHightlight", "duration", "description", "story", "unknownYear"]]);
        // dd($patients[0]);
        return $this->json(json_decode($data));
    }


    #[Route('/api/getAllPatients', name: 'app_getPatients')]
    public function getAllPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $page = $request->request->get('page');
        $antenna = $request->request->get('antenna');
        $patients = $doctrine->getRepository(Patients::class)->listPatientsByAntenna($antenna);
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];

        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        $data = $serializer->serialize($patients, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ["fore", "nicknames", "birthLocation", "isAlive", "birthdate", "status", "team", "antenna", "contacts", "pati", "sugg", "orga", "calls", "user", "contact", "patient", "fogo", "cont", "plac", "user", "pati", "content", "hash", "firstContactDate", "deletedAt", "followUpType", "noCare", "noActivities", "noIndicators", "followupReportsCare", "followupReportsGoals", "followupReportsActivities", "followupReportsIndicators", "isHightlight", "duration", "description", "story", "unknownYear"]]);
        // dd($patients[0]);
        return $this->json(json_decode($data));
    }

    #[Route('/api/getPatient', name: 'app_getPatient')]
    public function getPatient(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $patients = $doctrine->getRepository(Patients::class)->find($id);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);




        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($patients, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts", "pati", "sugg", "orga", "calls", "user", "informations", "fore", "contact"]
        ]);


        // $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        // $response->setSharedMaxAge(3600);
        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }

    #[Route('/api/getMedias', name: 'app_allMedias')]
    public function getMedias(ManagerRegistry $doctrine): Response
    {
        $medias = $doctrine->getRepository(Medias::class)->findAll();
        // dd($medias);

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
