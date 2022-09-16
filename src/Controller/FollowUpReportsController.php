<?php

namespace App\Controller;

use App\Entity\FollowupReports;
use App\Entity\FollowupReportsActivities;
use App\Entity\Patients;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\Validator\Constraints as Assert;

class FollowUpReportsController extends AbstractController
{

    /**
     * @var string A "Y-m-d H:i:s" formatted value
     */
    #[Assert\DateTime]
    public $createdAt;


    #[Route('/api/getFollowUpReports', name: 'app_report')]
    public function index(ManagerRegistry $doctrine): Response
    {


        $places = $doctrine->getRepository(FollowupReports::class)->findAll();
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
