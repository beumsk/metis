<?php

namespace App\Controller;

use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use App\Entity\Patients;
use App\Entity\PatientsInformation;
use App\Entity\PatientsInformationTemplateBlock;
use App\Entity\PatientsInformationTemplateElement;
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



    // public const SERIALIZE = new Serializer([new ObjectNormalizer()], [new XmlEncoder(), new JsonEncoder()]);


    #[Route('/api/getGoals', name: 'app_patients')]
    public function getGoals(ManagerRegistry $doctrine): Response
    {
        $goals = $doctrine->getRepository(FollowupGoals::class)->findAll();
        return $this->json($goals);
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

        $reports = $doctrine->getRepository(Patients::class)->findByNameByFirstNameByName($val);
        return $this->json($reports);
    }

    #[Route('/api/patientsInformation', name: 'app_patientsInformation')]
    public function getPatientsInformation(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {
        // queryPathString

        $patient = $doctrine->getRepository(PatientsInformation::class)->find(31);
        // $reports = $doctrine->getRepository(Patients::class)->findLatestSuggestion($patient, "/patient/fiche/statut-du-suivi");
        // return $this->json($reports, Response::HTTP_OK, [], ['groups' =>  'PatientsInformation', 'Patients', 'PatientsInformationTemplateElement']);
        // dd($this->json($patient));
        return $this->json($patient);
    }

    #[Route('/api/patientsInformationByPatients', name: 'app_patientsInformationByPatients')]
    public function getPatientsInformationByPatients(ManagerRegistry $doctrine, Request $request, SerializerInterface $serializer)
    {
        // queryPathString

        $serializer = new Serializer([new ObjectNormalizer()], [new XmlEncoder(), new JsonEncoder()]);
        $request = Request::createFromGlobals();


        $val = $request->request->get('id');

        $patient = $doctrine->getRepository(Patients::class)->find($val);
        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->findInformationByBlockPatients($patient->getId());
        $patientInfoAndElement = $doctrine->getRepository(PatientsInformation::class)->findInformationByBlockPatientsWithElements($patient->getId());
        // $json = $this->json($patientInfo);

        // dd($json);
        // $json = $serializer->serialize($patientInfo, JsonEncoder::FORMAT, [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d', ObjectNormalizer::PRESERVE_EMPTY_OBJECTS => true, AbstractNormalizer::ALLOW_EXTRA_ATTRIBUTES => true, AbstractNormalizer::ATTRIBUTES => ['id', 'sugg', 'value', 'comment', 'start']]);
        // // $json = $serializer->serialize($patientInfo, JsonEncoder::FORMAT);
        // $response = new Response($json, 200);
        return $this->json([...$patientInfoAndElement, ...$patientInfo]);
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

        return $this->json($reports);
    }

    #[Route('/api/patientInformationValue', name: 'app_patientsInformationStatus')]
    public function viewAction(ManagerRegistry $doctrine, SerializerInterface $serializer)
    {

        $request = Request::createFromGlobals();
        $request = Request::createFromGlobals();


        $val = $request->request->get('id');

        $val = $request->request->get('id');
        $patientRepository = $doctrine->getRepository(Patients::class);
        // $this->get('idr_patient.repository.patient');
        $patientInformationRepository = $doctrine->getRepository(PatientsInformation::class);
        //  $this->get('idr_patient.repository.patient_information');
        $templateBlocks = $doctrine->getRepository(PatientsInformationTemplateBlock::class);
        //  $this->get('idr_patient.repository.information_template_block');
        $templateElementRepository = $doctrine->getRepository(PatientsInformationTemplateElement::class);
        // $this->get('idr_patient.repository.information_template_element');

        $patient = $patientRepository->find($val);
        // dd($templateBlockRepository);
        $templateBlocks = $templateBlocks->findBy(
            ['type' => [PatientsInformationTemplateBlock::TYPE_PATIENT]],
            ['order' => 'ASC']
        );



        $templateElements = [];
        $elementValues = [];

        /** @var \Idr\SuiviBundle\Entity\InformationTemplateBlock $templateBlock */
        foreach ($templateBlocks as $templateBlock) {
            $blockId = $templateBlock->getId();

            $templateElements[$blockId] = $templateElementRepository->findBy(
                ['id' => $blockId]
            );

            /** @var \Idr\SuiviBundle\Entity\InformationTemplateElement $templateElement */
            foreach ($templateElements[$blockId] as $templateElement) {


                $elementId = $templateElement->getId();

                // $patientInfo = $doctrine->getRepository(PatientsInformation::class)->findInformationByBlockPatients($patient->getId());

                $elementValues[$blockId][$elementId] = $patientInformationRepository->findBy(
                    [
                        'itel' => $elementId,
                        'pati' => $patient
                    ],
                    ['start' => 'DESC']
                );



                // dd([$elementId]);
            }
        }



        return $this->json([
            'patient' => $patient,
            'blocks' => $templateBlocks,
            'elements' => $templateElements,
            'values' => $elementValues
        ]);
    }

    #[Route('/api/getPatients', name: 'app_getPatients')]
    public function getPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $page = $request->request->get('page');
        $patients = $doctrine->getRepository(Patients::class)->findByPaquets($page);
        return $this->json($patients);
    }

    #[Route('/api/getPatient', name: 'app_getPatient')]
    public function getPatient(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $patients = $doctrine->getRepository(Patients::class)->find($id);
        return $this->json($patients);
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
