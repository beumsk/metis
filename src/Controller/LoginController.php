<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class LoginController extends AbstractController
{
    #[Route('/api/getUser')]
    public function index(Request $request, ManagerRegistry $doctrine, EntityManagerInterface $entityManager, TokenStorageInterface $token): Response
    {
        $tokenget = $token->getToken();
        return $this->json($tokenget);
    }
}
