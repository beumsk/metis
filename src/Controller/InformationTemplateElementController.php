<?php

namespace App\Controller;

use App\Entity\InformationTemplateElement;
use App\Entity\PatientsInformation;
use App\Entity\Patients;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\InformationTemplateBlock;
use App\Entity\Suggestions;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;


class InformationTemplateElementController extends AbstractController
{

    #[Route('/api/editPatientInformation', name: 'app_editPatientInformation')]
    public function editPatientInformation(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();


        $idInfo = $request->request->get('idInfo');

        $valueSelect = $request->request->get('valueSelect');
        $specificValueInput = $request->request->get('specificValueInput');
        $commentaireInput = $request->request->get('commentaireInput');
        $start = $request->request->get('start');
        $end = $request->request->get('end');

        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->find($idInfo);


        if ($valueSelect !== "null") {
            $suggestion = $doctrine->getRepository(Suggestions::class)->find($valueSelect);
            $patientInfo->setSugg($suggestion);
        }

        $patientInfo->setValue($specificValueInput);
        if ($start !== "null") {
            $patientInfo->setStart(new \DateTime($start));
        }
        if ($end !== "null") {
            $patientInfo->setEnd(new \DateTime($end));
        }
        $patientInfo->setComment($commentaireInput);



        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $patientInfo->getId()
        ]);
    }

    #[Route('/api/setPatientInformation', name: 'app_setPatientInformation')]
    public function setPatientInformation(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();


        $idInfo = $request->request->get('idInfo');

        $valueSelect = $request->request->get('valueSelect');
        $specificValueInput = $request->request->get('specificValueInput');
        $commentaireInput = $request->request->get('commentaireInput');
        $start = $request->request->get('start');
        $end = $request->request->get('end');

        $idPatient = $request->request->get('idPatient');
        $idItel = $request->request->get('itel');
        $itel = $doctrine->getRepository(InformationTemplateElement::class)->find($idItel);
        $patient = $doctrine->getRepository(Patients::class)->find($idPatient);

        $patientInfo = new PatientsInformation();


        if ($valueSelect !== "null") {
            $suggestion = $doctrine->getRepository(Suggestions::class)->find($valueSelect);
            $patientInfo->setSugg($suggestion);
        }

        $patientInfo->setValue($specificValueInput);
        if ($start !== "null") {
            $patientInfo->setStart(new \DateTime($start));
        }
        if ($end !== "null") {
            $patientInfo->setEnd(new \DateTime($end));
        }
        $patientInfo->setComment($commentaireInput);
        $patientInfo->setPati($patient);
        $patientInfo->setItel($itel);
        $entityManager->persist($patientInfo);

        $entityManager->flush();

        return $this->json($patientInfo);
    }
    #[Route('/api/findElAndBlckAndValByPatient', name: 'app_information')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {


        $request = Request::createFromGlobals();


        $val = $request->request->get('id');
        $pathString = $request->request->get('pathString');

        $sugg = $doctrine->getRepository(Suggestions::class)->findBy(["path_string" => $pathString]);
        $informationTemplateBlock = $doctrine->getRepository(InformationTemplateElement::class)->findElement($pathString);


        $patient = $doctrine->getRepository(Patients::class)->find($val);


        $parentSugg = $doctrine->getRepository(Suggestions::class)->findBy(["parentSugg" => $sugg[0]->getId()]);
        // dd($parentSugg);
        $test = [];
        foreach ($parentSugg as $key) {
            $test[] = $key->getId();
        }

        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->findBy(["pati" => $patient->getId(), ...['sugg' => $test]]);

        return $this->json([...$parentSugg, ...$informationTemplateBlock, ...$patientInfo]);
    }
}
