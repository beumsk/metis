<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\FollowupReportsActivities;
use App\Entity\FollowupReportsIndicators;
use App\Entity\Indicators;
use App\Entity\Patients;
use App\Entity\PatientsPlaces;
use App\Entity\User;
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

use Symfony\Component\Validator\Constraints as Assert;

class FollowUpReportsController extends AbstractController
{

    /**
     * @var string A "Y-m-d H:i:s" formatted value
     */
    #[Assert\DateTime]
    public $createdAt;


    #[Route('/api/getFollowUpReportsById', name: 'app_reportByPatient')]
    public function index(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);

        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize(
            $places,
            JsonEncoder::FORMAT,
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati']]
        );


        // dd($jsonObject);

        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }


    // /api/sendReport
    #[Route('/api/sendReport', name: 'app_sendReport')]
    public function getSendReport(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $contacts = $request->request->get('contacts');
        $changeTypeMeet = $request->request->get('changeTypeMeet');
        $changeDate = $request->request->get('changeDate');
        $changeGoals = $request->request->get('changeGoals');
        $changeContacts = $request->request->get('changeContacts');
        $changePlaces = $request->request->get('changePlaces');
        $changeEditor = $request->request->get('changeEditor');
        $goalsInput = $request->request->get('goalsInput');
        $meetType = $request->request->get('meetType');
        $formSoins = $request->request->get('formSoins');
        $formActivities = $request->request->get('formActivities');
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportDate = new \DateTime("now");
        $userId = $request->request->get('userId');
        $changeEditor = $request->request->get('changeEditor');
        $patiId = $request->request->get('patiId');




        $care_jsondecode = json_decode($formSoins);
        $activities_jsondecode = json_decode($formActivities);
        $indicateurs_jsondecode = json_decode($formIndicateurs);




        // $care = [];
        // foreach ($care_jsondecode as $key) {
        //     if (count((array)$key) > 1 && ($key->type !== null || $key->contact !== null || $key->place !== null || $key->description !== null)) {
        //         array_push($care, $key);
        //     }
        // }

        // $activities = [];
        // foreach ($activities_jsondecode as $key) {
        //     if (count((array)$key) > 1 && ($key->type !== null || $key->contact !== null || $key->place !== null || $key->description !== null)) {
        //         array_push($activities, $key);
        //     }
        // }

        // $indicators = [];
        // foreach ($indicateurs_jsondecode as $key) {

        //     if ($key->indicateursFormCVC && $key->indicateursFormCVC !== null || $key->indicateursFormHestiaRisqueDeces && $key->indicateursFormHestiaRisqueDeces !== null || $key->indicateursEstLeLogement && $key->indicateursEstLeLogement !== null) {
        //         array_push($indicators, $key);
        //     }
        // }
        // dd($care_jsondecode, $activities_jsondecode, $indicateurs_jsondecode);


        $no_care = ($care_jsondecode !== null) ? 0 : 1;
        $no_activities =  ($activities_jsondecode !== null) ? 0 : 1;
        $no_indicateurs =  ($indicateurs_jsondecode !== null) ? 0 : 1;


        $user = $doctrine->getRepository(User::class)->find($userId);
        if ($changeContacts !== null) {
            $contact = $doctrine->getRepository(Contacts::class)->find($changeContacts);
        } else {
            $contact = null;
        }

        $patient =  $doctrine->getRepository(Patients::class)->find($patiId);



        $report = new FollowupReports();

        $report->setUser($user);
        $report->setActivityType(1);
        $report->setReportDate($reportDate);
        $report->setPlac($contact);
        $report->setLastUpdate($reportDate);
        $report->setContent($changeEditor);
        $report->setDeletedAt(null);
        $report->setPati($patient);
        $report->setDuration(null);
        $report->setCreationDate($reportDate);
        $report->setNoCare($no_care);
        $report->setNoActivities($no_activities);
        $report->setNoIndicators($no_indicateurs);
        $report->setReportType("1");

        // dd($report);
        $entityManager = $doctrine->getManager();

        $entityManager->persist($report);

        // $entityManager->flush();

        // dd($indicateurs_jsondecode->indicateursFormCVC !== null);

        // if ($report && $report->getId() && $indicateurs_jsondecode->indicateursFormCVC !== null) {
        //     // dd("ok");
        //     $followUpReportIndicators = new FollowupReportsIndicators();
        //     $indicators =  $doctrine->getRepository(Indicators::class)->find(1);
        //     $followUpReportIndicators->setFore($report);
        //     $followUpReportIndicators->setIndi($indicators);
        //     $followUpReportIndicators->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->corpsScore);




        //     $entityManager->persist($followUpReportIndicators);
        //     $entityManager->flush();

        //     $indicators =  $doctrine->getRepository(Indicators::class)->find(2);
        //     $followUpReportIndicators->setFore($report);
        //     $followUpReportIndicators->setIndi($indicators);
        //     $followUpReportIndicators->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->vetementsScore);

        //     $entityManager->persist($followUpReportIndicators);
        //     $entityManager->flush();

        //     $indicators =  $doctrine->getRepository(Indicators::class)->find(3);
        //     $followUpReportIndicators->setFore($report);
        //     $followUpReportIndicators->setIndi($indicators);
        //     $followUpReportIndicators->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->comportementScore);

        //     $entityManager->persist($followUpReportIndicators);
        //     $entityManager->flush();
        // }



        // dd($care, $activities, $indicators);
        // // array('id' => $idList)

        // // dd($test);
        // $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(array('fore' => $test));

        return $this->json($report);
    }



    #[Route('/api/getFollowUpReportsIndicators', name: 'app_indicatorsByPatients')]
    public function getIndicatorsByPatients(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $report = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);

        // dd($report);
        $test = [];
        foreach ($report as $key) {
            $test[] = $key->getId();
        }
        // array('id' => $idList)

        // dd($test);
        $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(array('fore' => $test));

        return $this->json($indicators);
    }

    #[Route('/api/getPlacesPatients', name: 'app_PlacesPatients')]
    public function getPatientsPlaces(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(PatientsPlaces::class)->findBy(["pati" => $id]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();

        return $this->json($places);
    }

    #[Route('/api/getFollowUpReportsGoals', name: 'app_FollowUpReportsGoals')]
    public function getGoals(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();

        return $this->json($places);
    }

    #[Route('/api/getActivitiesReports', name: 'app_FollowUpReportsActivities')]
    public function getActivitiesReport(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupReportsActivities::class)->findBy(["pati_id" => $id]);
        return $this->json($places);
    }

    #[Route('/api/setFollowUpReport', name: 'app_report')]
    public function setReport(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $content = $request->request->get('content');
        $idPati = $request->request->get('pati_id');
        $idUser = $request->request->get('user_id');
        // $patient = new Patients();
        // $patient->setId($idPati);

        $patient = $doctrine->getRepository(Patients::class)->find($idPati);
        $user = $doctrine->getRepository(User::class)->find($idUser);



        $entityManager = $doctrine->getManager();

        $report = new FollowupReports();

        $report->setContent($content);
        $report->setActivityType(0);
        $report->setReportType(0);
        $report->setPati($patient);
        $report->setUser($user);
        $report->setLastUpdate(($this->createdAt = new \DateTime("now")));
        $report->setCreationDate($this->createdAt = new \DateTime("now"));
        $report->setCreationDate($this->createdAt = new \DateTime("now"));

        $entityManager->persist($patient);
        $entityManager->persist($report);

        $entityManager->flush();


        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/setReportActivities', name: 'app_reportActivities')]
    public function setReportActivities(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $description = $request->request->get('description');
        $followUpReportId = $request->request->get('fore_id');



        $report = $doctrine->getRepository(FollowupReports::class)->find($followUpReportId);

        // dd($report);
        $entityManager = $doctrine->getManager();

        $activityReport = new FollowupReportsActivities();

        $activityReport->setDescription($description);
        $activityReport->setFore($report);

        $entityManager->persist($activityReport);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $activityReport->getId(),
            'response' => "Sent !"
        ]);
    }
}
