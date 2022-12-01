<?php

namespace App\Controller;

// ...
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class PasswordController extends AbstractController
{
    #[Route('/api/editPassword', name: 'app_editPassword')]
    public function editPassword(ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $id = $request->request->get('id');
        $password = $request->request->get('password');
        $currentPassword = $request->request->get('currentPassword');
        $user = $doctrine->getRepository(User::class)->find($id);


        if ($passwordHasher->isPasswordValid($user, $currentPassword)) {
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $password
            );
            $user->setPassword($hashedPassword);
            // $entityManager->persist($user);
            $entityManager->flush();

            return new JsonResponse([
                'response' => "Le mot de passe a été changée",
                'idAppel' => $user->getId()
            ]);
        } else {
            return new JsonResponse([
                'response' => "Le mot de passe que vous avez tapée ne correspond pas au mot de passe actuel",
                'idAppel' => $user->getId()
            ]);
        }
    }

    // public function delete(UserPasswordHasherInterface $passwordHasher, UserInterface $user)
    // {
    //     // ... e.g. get the password from a "confirm deletion" dialog
    //     $plaintextPassword = ...;

    //     if (!$passwordHasher->isPasswordValid($user, $plaintextPassword)) {
    //         throw new AccessDeniedHttpException();
    //     }
    // }
}
