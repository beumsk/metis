<?php

namespace App\Controller;


use App\Entity\Contacts;
use App\Entity\FollowupReports;
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

class ContactsController extends AbstractController
{
    #[Route('/api/getContacts', name: 'app_allContacts')]
    public function index(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $contacts = $doctrine->getRepository(Contacts::class)->findAll();
        // dd($contacts);

        // $cont = [];
        // $contObj = new Contacts();
        // foreach ($contacts as $key) {


        //     if ($key->getDeletedAt() === null) {

        //         $contObj->setLastName($key->getlastName());
        //         $contObj->setFirstName($key->getfirstName());
        //         $contObj->getId();

        //         // array_push($cont, $contObj);
        //     }
        // }

        // dd($contObj);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);



        $jsonObject = $serializer->serialize($contacts, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
            JsonEncoder::FORMAT,
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ["url", "description", "type", "pathString", "path"]]
        ]);

        $response =  new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        $response->setSharedMaxAge(3600);



        return $response;


        // return $this->json($contacts);
    }



    #[Route('/api/setContacts', name: 'app_medias')]
    public function setPatients(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $firstName = $request->request->get('name');
        $lastName = $request->request->get('description');
        $type = $request->request->get('url');
        $description = $request->request->get('url');
        $url = $request->request->get('url');


        $entityManager = $doctrine->getManager();

        $contact = new Contacts();

        $contact->setFirstname($firstName);
        $contact->setLastname($lastName);
        $contact->setType($type);
        $contact->setDescription($description);
        $contact->setUrl($url);

        $entityManager->persist($contact);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $contact->getId(),
            'response' => "Sent !"
        ]);
    }
}
