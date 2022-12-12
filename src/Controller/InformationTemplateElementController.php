<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Patients;
use App\Entity\Suggestions;
use App\Entity\PatientsInformation;
use App\Entity\InformationTemplateBlock;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\InformationTemplateElement;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class InformationTemplateElementController extends AbstractController
{

    #[Route('/api/editPatientInformation', name: 'app_editPatientInformation')]
    public function editPatientInformation(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();


        $idInfo = $request->request->get('idInfo');


        $valueSelect = ($request->request->get('valueSelect') !== "null") ? $request->request->get('valueSelect') : null;


        $specificValueInput = ($request->request->get('specificValueInput') !== "null") ? $request->request->get('specificValueInput') : null;
        $commentaireInput = ($request->request->get('commentaireInput') !== "null") ? $request->request->get('commentaireInput') : null;
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

    #[Route('/api/deletePatientInformation', name: 'app_deletePatientInformation')]
    public function deletePatientInformation(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();


        $idInfo = $request->request->get('idInfo');
        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->find($idInfo);

        $patientInfo->setDeletedAt(new \DateTime('now'));
        $entityManager->flush();
        return new JsonResponse([
            'response' => "Delete !",
            'idAppel' => $patientInfo->getId()
        ]);
    }

    #[Route('/api/setPatientInformation', name: 'app_setPatientInformation')]
    public function setPatientInformation(ManagerRegistry $doctrine, Request $request, SerializerInterface $serializer): Response
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


        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize($patientInfo, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts", "pati", "sugg", "orga", "calls", "user", "informations", "fore", "contact"]
        ]);


        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
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
