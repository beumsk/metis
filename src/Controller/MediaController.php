<?php

namespace App\Controller;


use App\Entity\Medias;
use App\Entity\Patients;
use App\Entity\Suggestions;
use App\Entity\FollowupReports;
use Doctrine\Persistence\ManagerRegistry;
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
    public function getAllMediasByPatients(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();
        $id = $request->request->get("id");
        $medias = $doctrine->getRepository(Medias::class)->findBy(["pati" => $id]);

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];

        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        $data = $serializer->serialize($medias, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts"]]);

        return $this->json(json_decode($data));
    }


    #[Route('/api/removeMedias', name: 'app_removeAllMedias')]
    public function remove(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();

        $id = $request->request->get("id");
        $medias = $doctrine->getRepository(Medias::class)->find($id);
        $entityManager->remove($medias);
        $entityManager->flush();
        unlink($this->getParameter('images_directory') . "/" . $medias->getFileName());
        unlink($this->getParameter('images_directoryProd') . "/" . $medias->getFileName());
        return $this->json($medias);
    }


    #[Route('/api/setMediasByPatients', name: 'app_gsetAllMedias')]
    public function setMediasByPatients(ManagerRegistry $doctrine, Request $request)
    {
        $request = Request::createFromGlobals();
        $uploadedFile = $request->files->get('image');
        $sugg = $request->request->get("sugg");
        $filename = $request->request->get("filename");
        $id = $request->request->get("id");
        $isProfilePage = $request->request->get("isProfilePage");

        // profile || current C:\projets\metis-app-2022\assets\images\4c6af1c072f8f574f9e98ccfc6c22658eb290689.jpeg
        $destination = '../../assets/images';


        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();

        $entityManager = $doctrine->getManager();

        $medias = new Medias();

        // sugg 32 for profile page
        // if ($isProfilePage === )
        $suggestion = $doctrine->getRepository(Suggestions::class)->find($sugg);
        $patients = $doctrine->getRepository(Patients::class)->find($id);
        $medias->setSugg($suggestion);
        $medias->setOriginalFilename($originalFilename);
        $medias->setPati($patients);
        $medias->setFilename($newFilename);
        $medias->setDate(new \DateTime("now"));

        $entityManager->persist($medias);
        $entityManager->flush();


        $uploadedFile->move($this->getParameter('images_directory'), $newFilename);
        $uploadedFile->move($this->getParameter('images_directoryProd'), $newFilename);

        return $this->json("send");
    }
}
