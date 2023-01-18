<?php

namespace App\Controller;

use App\Entity\Suggestions;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;

class SuggestionsController extends AbstractController
{
    #[Route('/api/suggestionsById', name: 'app_suggestionsById')]
    public function index(ManagerRegistry $doctrine, Request $request,  SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();
        $id = $request->request->get("id");

        $suggestion = $doctrine->getRepository(Suggestions::class)->findBy(["parentSugg" => $id, "is_deleted" => null], ['value' => 'ASC']);




        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize(
            $suggestion,
            JsonEncoder::FORMAT,
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ['parentSugg', "tags", "requireCustomValue", "isLocked", "attributes", "pathString", "path", 'defaultComment', "isDeleted"]]
        );

        $response =  new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        // dd($jsonObject);

        $response->setSharedMaxAge(3600);

        return $response;
    }
}
