<?php

namespace App\Controller;

use App\Entity\Patients;
use App\Entity\Contacts;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;

class BirthdaysController extends AbstractController
{
    #[Route('/api/birthdays', name: 'app_birthdays')]
    public function index(ManagerRegistry $doctrine): Response
    {


        $contactRepository = $doctrine->getRepository(Contacts::class);
        $patientRepository = $doctrine->getRepository(Patients::class);


        $months = [date('m'), date('m', strtotime('+1 month')), date('m', strtotime('+2 month'))];

        $p_bdays = $isPatiBirthday = $ages = [];
        foreach ($months as $month) {
            $labelOfMonth = date('F ', $month);
            // dd($month);
            $p_bdays[$month] = $patientRepository->findBirthdays($month);
        }

        $isPatiBirthday = [];
        $referenceDateTimeObject = new \DateTime();
        // dd($contactRepository);
        foreach ($p_bdays as $timestamp => $patients) {

            foreach ($patients as $patient) {

                $date = $referenceDateTimeObject->diff(new \DateTime($patient['birthdate']));
                $ages[$patient['id']] = $date->y;
                if (date('m-d', strtotime($patient['birthdate'])) == date('m-d'))
                    $isPatiBirthday[$patient['id']] = true;
                else $isPatiBirthday[$patient['id']] = false;
            }
        }

        // $isContBirthday = [];
        // foreach ($c_bdays as $timestamp => $contacts) {
        //     foreach ($contacts as $contact) {
        //         $date = $referenceDateTimeObject->diff(new \DateTime($contact['birthdate']));
        //         $ages[$contact['id']] = $date->y;
        //         if (date('m-d', strtotime($contact['birthdate'])) == date('m-d'))
        //             $isContBirthday[$contact['cont_id']] = true;
        //         else $isContBirthday[$contact['id']] = false;
        //     }
        // }

        $jsonObject = [
            'patients_bdays' => $p_bdays,
            // 'contacts_bdays' => $c_bdays,
            'ages' => $ages,
            'isPatientBirthday' => $isPatiBirthday,
            // 'isContactBirthday' => $isContBirthday,
        ];

        $response = new Response(json_encode($jsonObject), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        // $response->setSharedMaxAge(3600);
        return $response;
    }
}
