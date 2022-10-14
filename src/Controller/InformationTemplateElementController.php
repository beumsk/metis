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
