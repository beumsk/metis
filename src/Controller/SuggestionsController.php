<?php

namespace App\Controller;

use App\Entity\Suggestions;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

class SuggestionsController extends AbstractController
{
    #[Route('/api/suggestionsById', name: 'app_suggestionsById')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();
        $id = $request->request->get("id");
        $test = [57, 658, 174, 25];
        foreach ($test as $key) {
            $test[] = $key;
        }
        $suggestion = $doctrine->getRepository(Suggestions::class)->findBy(array("parentSugg" => [...$test]));

        return $this->json($suggestion);
    }
}
