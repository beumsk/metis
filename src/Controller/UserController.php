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

    #[Route('/api/addUserAdmin', name: 'app_addUserAdmin')]
    public function addUserAdmin(ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher, Request $request): Response
    {

        // envoyer un mail pour le changement d'emails ?
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $username = $request->request->get('username');
        $email = $request->request->get('email');
        $firstname = $request->request->get('firstname');
        $lastName = $request->request->get('lastname');
        $roles = $request->request->get('groups');
        $enabled = $request->request->get('enabled');
        $username = $request->request->get('username');
        $id = $request->request->get('idUser');
        $password = $request->request->get('password');



        $user = new User();
        $rolesArray = json_decode($roles);

        $user->setUsername($username);
        $user->setUsernameCanonical($username);
        $user->setEmail($email);
        $user->setEmailCanonical($email);
        $user->setFirstname($firstname);
        $user->setLastname($lastName);
        // dd($rolesArray);
        $user->setRoles($rolesArray);




        if ($enabled === "true") {
            $user->setEnabled(1);
        } else {
            $user->setEnabled(0);
        }

        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $password
        );
        $user->setPassword($hashedPassword);
        $entityManager->persist($user);
        $entityManager->flush();


        return new Response(json_encode($user), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }

    #[Route('/api/editUserAdmin', name: 'app_editUserAdmin')]
    public function editUserAdmin(ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher, Request $request): Response
    {

        // envoyer un mail pour le changement d'emails ?
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $username = $request->request->get('username');
        $email = $request->request->get('email');
        $firstname = $request->request->get('firstname');
        $lastName = $request->request->get('lastname');
        $roles = $request->request->get('groups');
        $enabled = $request->request->get('enabled');
        $username = $request->request->get('username');
        $id = $request->request->get('idUser');



        $user = $doctrine->getRepository(User::class)->find($id);
        $rolesArray = json_decode($roles);

        $user->setUsername($username);
        $user->setEmail($email);
        $user->setFirstname($firstname);
        $user->setLastname($lastName);
        // dd($rolesArray);
        $user->setRoles($rolesArray);




        if ($enabled === "true") {
            $user->setEnabled(1);
        } else {
            $user->setEnabled(0);
        }


        $entityManager->flush();

        return new Response(json_encode($user), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }

    #[Route('/api/listUsers', name: 'app_listUsers')]
    public function listUsers(ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher, Request $request): Response
    {

        $request = Request::createFromGlobals();
        $user = $doctrine->getRepository(User::class)->findAll();

        $listUsers = [];
        foreach ($user as $value) {
            $arrSpacesLess = [];
            foreach ($value->getRoles() as $key => $trimValue) {
                $arrSpacesLess[$key] = ($trimValue !== " ") ? trim($trimValue) : null;
            }

            $listUsers[] = [
                "id" => $value->getId(),
                "lastname" => $value->getLastName(),
                "firstname" => $value->getFirstname(),
                "username" => $value->getUserName(),
                "email" => $value->getEmail(),
                "enabled" => $value->getEnabled(),
                "lastLogin" => ($value->getLastLogin()) ? $value->getLastLogin()->format(DATE_RFC3339_EXTENDED) : null,
                "roles" => $value->getRoles()
            ];
        }

        return new Response(json_encode($listUsers), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }
}
