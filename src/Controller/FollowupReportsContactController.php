<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupReports;
use App\Entity\FollowupReportsContact;
use App\Entity\PatientsContacts;
use App\Entity\PatientsPatients;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\SerializerBuilder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;


class FollowupReportsContactController extends AbstractController
{



    #[Route('/api/getPatientsByPatients', name: 'app_getPatientsByPatients')]
    public function getPatientsByPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $reports = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);

        $cont = $doctrine->getRepository(PatientsContacts::class)->findBy(["pati" => $id]);
        $patientspatients = $doctrine->getRepository(PatientsPatients::class)->findBy(['tapa' => $id]);

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];

        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer], [$encoder]);
        $data = $serializer->serialize($patientspatients, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ["contacts"]]);

        return $this->json(json_decode($data));
    }

    #[Route('/api/getContactsByPatients', name: 'app_contactsbypatients')]
    public function getContactsByPatients(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');


        // $cont = $doctrine->getRepository(PatientsContacts::class)->findBy(["pati" => $id, "deleted_at" => null]);
        $cont = $doctrine->getRepository(PatientsContacts::class)->patientsContactsByDate($id);

        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $arrContactByPatients = [];

        foreach ($cont as $value) {
            // dd($value->getCont()->getFirstname());
            if ($value) {
                $arrContactByPatients[] = [
                    "id" => $value->getId(),
                    "start" => $value->getStart(),
                    "end" => $value->getEnd(),
                    "comment" => $value->getLinkDescription(),
                    "cont" => [$value->getCont()],
                    "pati" => [$value->getPati()],
                    "sugg" => [$value->getSugg()]
                    // "firstname" => ($value->getCont()->getFirstname() !== null) ? $value->getCont()->getFirstname() : null,
                ];
            }
        }
        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($arrContactByPatients, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["cont", "pati", "sugg", "orga", "calls", "user", "informations", "fore", "contact"]
        ]);


        // $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        // $response->setSharedMaxAge(3600);
        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }
}
