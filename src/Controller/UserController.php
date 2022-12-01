<?php

namespace App\Controller;

use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    #[Route('/api/editUser', name: 'app_editUser')]
    public function editUser(ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher, Request $request): Response
    {

        // envoyer un mail pour le changement d'emails ?
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $id = $request->request->get('id');

        $username = $request->request->get('username');
        $email = $request->request->get('email');
        $user = $doctrine->getRepository(User::class)->find($id);


        if ($username === $user->getUsername() && $email === $user->getEmail()) {
            return new JsonResponse([
                'response' => "Les identifiants que vous avez donnée sont les mêmes que les précédentes",
                'idAppel' => $user->getId()
            ]);
        } else {
            $user->setUsername($username);
            $user->setEmail($email);
            // $entityManager->persist($user);
            $entityManager->flush();

            return new JsonResponse([
                'response' => "Le profil a été changée",
                'idAppel' => $user->getId()
            ]);
        }
    }
}
