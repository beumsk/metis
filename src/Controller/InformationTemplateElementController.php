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


class InformationTemplateElementController extends AbstractController
{
    #[Route('/api/findElAndBlckAndValByPatient', name: 'app_information')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {


        $request = Request::createFromGlobals();


        $val = $request->request->get('id');
        // $pathString = "/patient/fiche/statut-du-suivi";
        $pathString = $request->request->get('pathString');
        $informationTemplateBlock = $doctrine->getRepository(InformationTemplateElement::class)->findElement($pathString);





        $patient = $doctrine->getRepository(Patients::class)->find($val);
        $sugg = $doctrine->getRepository(Suggestions::class)->findBy(["path_string" => $pathString]);

        $parentSugg = $doctrine->getRepository(Suggestions::class)->findBy(["parentSugg" => $sugg[0]->getId()]);

        $test = [];
        foreach ($parentSugg as $key) {
            $test[] = $key->getId();
        }

        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->findBy(["pati" => $patient->getId(), ...['sugg' => $test]]);

        return $this->json(["elementtemplateblock" => $informationTemplateBlock, "patientinfo" => $patientInfo]);
    }


    #[Route('/api/orderpatients', name: 'app_orderpatient')]
    public function viewAction(ManagerRegistry $doctrine, Request $request)
    {

        // $serializer = new Serializer([new ObjectNormalizer()], [new XmlEncoder(), new JsonEncoder()]);
        // $request = Request::createFromGlobals();


        $val = $request->request->get('id');
        $patient = $doctrine->getRepository(Patients::class)->find(28);

        $templateBlocks = $doctrine->getRepository(InformationTemplateBlock::class)->findBy(
            [],
            ['block_order' => 'ASC']
        );

        $templateElements = [];
        $templateElementRepository = $doctrine->getRepository(InformationTemplateElement::class);

        $elementValues = [];
        $patientInformationRepository = $doctrine->getRepository(PatientsInformation::class);

        /** @var InformationTemplateBlock $templateBlock */
        foreach ($templateBlocks as $templateBlock) {
            $blockId = $templateBlock->getId();

            $templateElements[$blockId] = $templateElementRepository->findBy(
                ['id' => $blockId],
                ['element_order' => 'ASC']
            );

            /** @var InformationTemplateElement $templateElement */
            foreach ($templateElements[$blockId] as $templateElement) {
                $elementId = $templateElement->getId();

                $elementValues[$blockId][$elementId] = $patientInformationRepository->findBy(
                    [
                        'id' => $elementId,
                        'pati' => $patient
                    ]
                );
            }
        }

        $arr = [
            'patient' => $patient,
            'blocks' => $templateBlocks,
            'elements' => $templateElements,
            'values' => $elementValues
        ];

        // $response = new Response();
        // $response->raw_body = $arr;
        // $response->code = $arr;
        return $this->json($arr);
    }
}
