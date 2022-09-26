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
    // #[Route('/api/getMediaForPatient', name: 'app_media')]
    // public function getProfileAction(ManagerRegistry $doctrine, Patients $patient, $width = 165, $height = 165, $class = null)
    // {
    //     $request = Request::createFromGlobals();


    //     $mediaRepository = $doctrine->getRepository(Medias::class);

    //     $media = $mediaRepository->getCurrentProfile($patient);


    //     $image = $media->getAbsolutePath();
    //     dd($image);



    //     // if ($media instanceof Medias) {
    //     //     $image = $media->getAbsolutePath();
    //     //     dd($image);
    //     // } else {
    //     //     $image = '@IdrSuiviBundle/Resources/public/images/profile_m.png';
    //     // }

    //     // return [
    //     //     'image' => $image,
    //     //     'width' => $width,
    //     //     'height' => $height,
    //     //     'class' => $class
    //     // ];
    // }

    #[Route('/api/getMediaForPatient', name: 'app_media')]
    public function getPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $page = $request->request->get('page');
        $patient = $doctrine->getRepository(Patients::class)->find(28);
        $mediaRepository = $doctrine->getRepository(Medias::class);


        $media = $mediaRepository->getCurrentProfile($patient);
        // return $this->json($patients);

        // $image = $media->getAbsolutePath();
        dd($media);

        // if ($media instanceof Medias) {
        //     $image = $media->getAbsolutePath();
        // } else {
        //     $image = '@IdrSuiviBundle/Resources/public/images/profile_m.png';
        // }

        // return [
        //     'image' => $image,
        //     'width' => "25px",
        //     'height' => "24px",
        //     'class' => "test"
        // ];
    }
}
