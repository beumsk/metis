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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


class InformationTemplateElementController extends AbstractController
{
    #[Route('/information/template/element', name: 'app_information_template_element')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {

        // $informationTemplateBlock = $doctrine->getRepository(InformationTemplateBlock::class)->findElementBlock();
        $informationTemplateBlock = $doctrine->getRepository(InformationTemplateElement::class)->findElement();
        // $test = [];
        // foreach ($informationTemplateBlock as $key) {
        //     $test[] = $key["sugb"]->getId();
        // }

        // dd($test);
        $request = Request::createFromGlobals();


        $val = $request->request->get('id');

        // dd($val);

        $patient = $doctrine->getRepository(Patients::class)->find($val);
        $patientInfo = $doctrine->getRepository(PatientsInformation::class)->findBy(["pati" => $patient->getId()]);
        $array1 = array_merge($informationTemplateBlock, $patientInfo);

        return $this->json($array1);
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
