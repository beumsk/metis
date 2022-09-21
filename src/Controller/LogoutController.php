<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class LogoutController extends AbstractController
{
    #[Route('/api/test')]
    public function Index(Response $response, $jwt)
    {
        $response->headers->setCookie(
            new Cookie(
                "BEARER",
                '',
                new \DateTime("+6 hours"),
                "/",
                null,
                false,
                true,
                false,
                'strict'
            )
        );
    }
}
