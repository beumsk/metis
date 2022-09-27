<?php

namespace App\Controller;

use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\Medias;
use App\Entity\Patients;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class MediaController extends AbstractController
{
    // getAllPatient

    #[Route('/api/getMediaForPatient', name: 'app_media')]
    public function getPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();
        $objPatients = new Patients();
        $id = $request->request->get("id");
        $page = $request->request->get('page');
        $patient = $doctrine->getRepository(Patients::class)->find($id);
        $mediaRepository = $doctrine->getRepository(Medias::class);
        $media = $mediaRepository->getCurrentProfile($patient);
        $image = $media->getAbsolutePath();


        return $this->json([
            'image' => $image,
            'width' => "25px",
            'height' => "24px",
            'class' => "test"
        ]);
    }
}
