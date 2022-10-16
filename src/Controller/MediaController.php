<?php

namespace App\Controller;


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
    public function getCurrentProfile(ManagerRegistry $doctrine): Response
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

    #[Route('/api/getAllMediasByPatients', name: 'app_getAllMedias')]
    public function getAllMediasByPatients(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();
        $id = $request->request->get("id");
        $medias = $doctrine->getRepository(Medias::class)->findBy(["pati" => $id]);

        return $this->json($medias);
    }


    #[Route('/api/setMediasByPatients', name: 'app_gsetAllMedias')]
    public function setMediasByPatients(ManagerRegistry $doctrine, Request $request)
    {
        $request = Request::createFromGlobals();
        $uploadedFile = $request->files->get('image');
        $sugg = $request->request->get("sugg");

        // profile || current

        $destination = $this->getParameter('kernel.project_dir') . '../build/images';


        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
        // $newFilename = Urlizer::urlize($originalFilename) . '-' . uniqid() . '.' . $uploadedFile->guessExtension();

        $uploadedFile->move($destination, $newFilename);
        return [
            "add" => "added!"
        ];
        // return $this->json($medias);
    }
}
