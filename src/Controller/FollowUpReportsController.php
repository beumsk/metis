<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Entity\FollowupGoals;
use App\Entity\FollowupReports;
use App\Entity\FollowupReportsActivities;
use App\Entity\FollowupReportsContact;
use App\Entity\FollowupReportsIndicators;
use App\Entity\Indicators;
use App\Entity\Patients;
use App\Entity\PatientsPlaces;
use App\Entity\Places;
use App\Entity\Suggestions;
use App\Entity\User;
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

use Symfony\Component\Validator\Constraints as Assert;

class FollowUpReportsController extends AbstractController
{

    /**
     * @var string A "Y-m-d H:i:s" formatted value
     */
    #[Assert\DateTime]
    public $createdAt;


    #[Route('/api/getFollowUpReportsById', name: 'app_getFollowUpReportsById')]
    public function getFollowUpReportsById(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $report = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);




        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize(
            $report,
            JsonEncoder::FORMAT,
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati']]
        );


        // dd($jsonObject);
        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        $response->setSharedMaxAge(3600);

        return $response;

        // return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
    }


    #[Route('/api/getFollowUpReportsWithAnswers', name: 'app_getFollowUpReportsWithAnswers')]
    public function getFollowUpReportsWithAnswers(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {


        $request = Request::createFromGlobals();

        $id = $request->request->get('id');
        $countResult = $request->request->get('countResult');

        $followUpReports = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id, 'deleted_at' => null]);


        $id = null;
        foreach ($followUpReports as  $key => $value) {
            if ($value->getId()) {
                $report = $doctrine->getRepository(FollowupReportsActivities::class)->findBy(['fore' => $value->getId()]);




                $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(['fore' => $value->getId()]);
                $followUpGoals = $doctrine->getRepository(FollowupGoals::class)->findBy(['pati' => $value->getId()]);




                if ($report !== []) {
                    foreach ($report as $itemReport) {
                        if ($itemReport->getSugg()->getParentSugg()->getValue() === "Soins") {
                            $value->setFollowupReportsCare($itemReport);
                        }

                        if ($itemReport->getSugg()->getParentSugg()->getValue() === "Activités") {
                            $value->setFollowupReportsActivities($itemReport);
                        }
                    }
                }

                if ($indicators !== []) {
                    foreach ($indicators as  $indi) {
                        $value->setFollowupReportsIndicators($indi);
                    }
                }
                if ($followUpGoals !== []) {
                    foreach ($followUpGoals as  $goal) {
                        // dd($goal);

                        $value->setFollowupReportsGoals($goal);
                    }
                }
            }
        }


        $arrFollowUpLimited = [];



        for ($i = 0; $i < $countResult; $i++) {
            // dd($followUpReports[$i]);
            if ($i < $countResult && $followUpReports[$i]) {
                array_push($arrFollowUpLimited, $followUpReports[$i]);
            }
        }


        // dd($arrFollowUpLimited);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($arrFollowUpLimited, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
            JsonEncoder::FORMAT
        ]);


        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        $response->setSharedMaxAge(3600);
        // return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        return $response;
    }
    #[Route('/api/updateSendReport', name: 'app_updateReport')]
    public function updateReport(ManagerRegistry $doctrine, Request $request): Response
    {

        $request = Request::createFromGlobals();
        $activityType = $request->request->get('activityType');
        $contacts = $request->request->get('contacts');
        $changeTypeMeet = $request->request->get('changeTypeMeet');
        $changeDate = $request->request->get('changeDate');
        $changeGoals = $request->request->get('changeGoals');
        $changeContacts = $request->request->get('changeContacts');
        $changePlaces = $request->request->get('changePlaces');
        $changeEditor = $request->request->get('changeEditor');
        $goalsInput = $request->request->get('goalsInput');
        $meetType = $request->request->get('meetType');
        $formSoins = $request->request->get('formSoins');
        $formActivities = $request->request->get('formActivities');
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportDate = new \DateTime("now");
        $userId = $request->request->get('userId');
        $changeEditor = $request->request->get('changeEditor');
        $patiId = $request->request->get('patiId');
        $rapportId = $request->request->get('idRapport');




        $care_jsondecode = json_decode($formSoins);
        $activities_jsondecode = json_decode($formActivities);
        $indicateurs_jsondecode = json_decode($formIndicateurs);


        $no_care = ($care_jsondecode !== null) ? 0 : 1;
        $no_activities =  ($activities_jsondecode !== null) ? 0 : 1;
        $no_indicateurs =  ($indicateurs_jsondecode !== null) ? 0 : 1;


        $user = $doctrine->getRepository(User::class)->find($userId);
        if ($changeContacts !== null) {
            $contact = $doctrine->getRepository(Contacts::class)->find($changeContacts);
        } else {
            $contact = null;
        }

        $patient =  $doctrine->getRepository(Patients::class)->find($patiId);
        $plac =  $doctrine->getRepository(Places::class)->find($changePlaces);


        $report = $doctrine->getRepository(FollowupReports::class)->find($rapportId);


        $report->setUser($user);
        $report->setActivityType($activityType);
        $report->setReportDate($reportDate);
        $report->setPlac($contact);
        $report->setLastUpdate($reportDate);
        $report->setContent($changeEditor);
        $report->setDeletedAt(null);
        $report->setPati($patient);
        $report->setDuration(null);
        $report->setCreationDate($reportDate);
        $report->setNoCare($no_care);
        $report->setNoActivities($no_activities);
        $report->setNoIndicators($no_indicateurs);
        $report->setReportType("1");
        $report->setPlac($plac);

        // dd($report);
        $entityManager = $doctrine->getManager();

        // $entityManager->persist($report);

        $entityManager->flush();

        // dd($indicateurs_jsondecode);

        if ($indicateurs_jsondecode !== null) {
            foreach ($indicateurs_jsondecode as $key) {
                if ($key->indicateursFormCVC && $key->indicateursFormCVC !== null) {
                    $entityManager = $doctrine->getManager();
                    $followUpReportIndicators = new FollowupReportsIndicators();
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 1]);

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(1);

                    // dd($key->indicateursFormCVC);
                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursFormCVC[0]->value);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursFormCVC[0]->comment);
                        $entityManager->persist($followUpReportIndicators);
                    }


                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursFormCVC[0]->corpsScore);
                        $followUpReportIndicators->setComment($key->indicateursFormCVC[0]->corpsDescription);
                        $entityManager->persist($followUpReportIndicators);
                    }
                    // 
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(2);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 2]);

                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursFormCVC[0]->vetementsScore);
                        $followUpReportIndicators->setComment($key->indicateursFormCVC[0]->vetementsDescription);
                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursFormCVC[0]->value);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursFormCVC[0]->comment);
                    }

                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(3);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 3]);



                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursFormCVC[0]->comportementScore);
                        $followUpReportIndicators->setComment($key->indicateursFormCVC[0]->comportementDescription);
                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursFormCVC[0]->value);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursFormCVC[0]->comment);
                    }
                    $entityManager->flush();
                }

                if ($key->indicateursEstLeLogement && $key->indicateursEstLeLogement !== null) {
                    $entityManager = $doctrine->getManager();
                    $followUpReportIndicators = new FollowupReportsIndicators();
                    $indicators =  $doctrine->getRepository(Indicators::class)->find(4);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 6]);

                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->bailleurSelected);
                        $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionBailleur);
                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursEstLeLogement[0]->bailleurSelected);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursEstLeLogement[0]->descriptionBailleur);
                        // $entityManager->persist($followUpReportIndicators);    
                    }

                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(5);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 4]);
                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->voisinageSelected);
                        $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionVoisinage);

                        $entityManager->persist($followUpReportIndicators);
                    }


                    if (count($editFollowUpReportIndicators) === 1) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->voisinageSelected);
                        $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionVoisinage);

                        // $entityManager->persist($followUpReportIndicators);
                    }

                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(6);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 5]);


                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->hygieneSelected);
                        $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionHygiene);

                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursEstLeLogement[0]->hygieneSelected);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursEstLeLogement[0]->descriptionHygiene);

                        // $entityManager->persist($followUpReportIndicators);
                    }


                    $entityManager->flush();
                }

                if ($key->indicateursFormHestiaRisqueDeces && $key->indicateursFormHestiaRisqueDeces !== null) {
                    $entityManager = $doctrine->getManager();

                    $followUpReportIndicators = new FollowupReportsIndicators();


                    $indicators = $doctrine->getRepository(Indicators::class)->find(7);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 7]);


                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueSecuritee);
                        $followUpReportIndicators->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionSecuritee);


                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueSecuritee);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionSecuritee);
                    }


                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(8);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 8]);


                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueSantee);
                        $followUpReportIndicators->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionSantee);

                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueSantee);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionSantee);

                        // $entityManager->persist($followUpReportIndicators);
                    }
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(9);
                    $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(["fore" => $report->getId(), "indi" => 9]);


                    if (count($editFollowUpReportIndicators) === 0) {
                        $followUpReportIndicators->setFore($report);
                        $followUpReportIndicators->setIndi($indicators);
                        $followUpReportIndicators->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueConsommation);
                        $followUpReportIndicators->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionConsommation);

                        $entityManager->persist($followUpReportIndicators);
                    }

                    if (count($editFollowUpReportIndicators) === 1) {
                        $editFollowUpReportIndicators[0]->setFore($report);
                        $editFollowUpReportIndicators[0]->setIndi($indicators);
                        $editFollowUpReportIndicators[0]->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueConsommation);
                        $editFollowUpReportIndicators[0]->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionConsommation);

                        // $entityManager->persist($followUpReportIndicators);
                    }

                    $entityManager->flush();
                }
            }
        }


        if ($activities_jsondecode && $activities_jsondecode !== null) {

            $followUpReportActivities = new FollowupReportsActivities();
            // $followupReportContact = new FollowupReportsContact();
            // $followupReportActivityPlace = new FollowupReportActivityPlace();
            foreach ($activities_jsondecode as $key) {


                // $editFollowUpReportIndicators =  $doctrine->getRepository(FollowupReportsActivities::class)->findBy(["sugg" => $key->type, "fore" => $report->getId()]);
                // dd($activities_jsondecode);
                $typeSugg =  $doctrine->getRepository(Suggestions::class)->find(intval($key->type));


                $contact =  $doctrine->getRepository(Contacts::class)->find($key->contact);
                $place =  $doctrine->getRepository(Places::class)->find($key->place);
                $followUpReportActivities->setFore($report);
                $followUpReportActivities->setSugg($typeSugg);

                // $followupReportActivityPlace->setPlac

                $followUpReportActivities->setDescription($key->description);


                //must to have: add checkbox for idr step ?
                $followUpReportActivities->setIsIdrStep(1);

                // $entityManager->persist($followUpReportActivities);
                $entityManager->flush();

                $followUpReportActivities->setFore($report);
                // $followUpReportActivities->setCont($contact);

                // $entityManager->persist($followUpReportActivities);
                $entityManager->flush();
            }
        }

        if ($care_jsondecode && $care_jsondecode !== null) {

            $followUpReportActivities = new FollowupReportsActivities();
            // $followupReportContact = new FollowupReportsContact();
            foreach ($care_jsondecode as $key) {
                $typeSugg =  $doctrine->getRepository(Suggestions::class)->find(intval($key->type));
                $contact =  $doctrine->getRepository(Contacts::class)->find($key->contact);
                $followUpReportActivities->setFore($report);
                $followUpReportActivities->setSugg($typeSugg);
                $followUpReportActivities->setDescription($key->description);


                //must to have: add checkbox for idr step ?
                $followUpReportActivities->setIsIdrStep(1);

                // $entityManager->persist($followUpReportActivities);
                $entityManager->flush();

                $followUpReportActivities->setFore($report);
                // $followUpReportActivities->setCont($contact);

                // $entityManager->persist($followUpReportActivities);
                $entityManager->flush();
            }
        }



        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    // /api/sendReport
    #[Route('/api/sendReport', name: 'app_sendReport')]
    public function getSendReport(ManagerRegistry $doctrine, Request $request): Response
    {
        $request = Request::createFromGlobals();

        $contacts = $request->request->get('contacts');
        $changeTypeMeet = $request->request->get('changeTypeMeet');
        $changeDate = $request->request->get('changeDate');
        $changeGoals = $request->request->get('changeGoals');
        $changeContacts = $request->request->get('changeContacts');
        $changePlaces = $request->request->get('changePlaces');
        $changeEditor = $request->request->get('changeEditor');
        $goalsInput = $request->request->get('goalsInput');
        $meetType = $request->request->get('meetType');
        $formSoins = $request->request->get('formSoins');
        $formActivities = $request->request->get('formActivities');
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportDate = new \DateTime("now");
        $userId = $request->request->get('userId');
        $changeEditor = $request->request->get('changeEditor');
        $patiId = $request->request->get('patiId');




        $care_jsondecode = json_decode($formSoins);
        $activities_jsondecode = json_decode($formActivities);
        $indicateurs_jsondecode = json_decode($formIndicateurs);


        $no_care = ($care_jsondecode !== null) ? 0 : 1;
        $no_activities =  ($activities_jsondecode !== null) ? 0 : 1;
        $no_indicateurs =  ($indicateurs_jsondecode !== null) ? 0 : 1;


        $user = $doctrine->getRepository(User::class)->find($userId);
        if ($changeContacts !== null) {
            $contact = $doctrine->getRepository(Contacts::class)->find($changeContacts);
        } else {
            $contact = null;
        }

        $patient =  $doctrine->getRepository(Patients::class)->find($patiId);
        $plac =  $doctrine->getRepository(Places::class)->find($changePlaces);


        $report = new FollowupReports();

        $report->setUser($user);
        $report->setActivityType($meetType);
        $report->setReportDate($reportDate);
        $report->setPlac($contact);
        $report->setLastUpdate($reportDate);
        $report->setContent($changeEditor);
        $report->setDeletedAt(null);
        $report->setPati($patient);
        $report->setDuration(null);
        $report->setCreationDate($reportDate);
        $report->setNoCare($no_care);
        $report->setNoActivities($no_activities);
        $report->setNoIndicators($no_indicateurs);
        $report->setReportType("1");
        $report->setPlac($plac);

        // dd($report);
        $entityManager = $doctrine->getManager();

        $entityManager->persist($report);

        $entityManager->flush();

        // dd($indicateurs_jsondecode);

        if ($indicateurs_jsondecode !== null) {
            foreach ($indicateurs_jsondecode as $key) {
                if ($key->indicateursFormCVC && $key->indicateursFormCVC !== null) {
                    $entityManager = $doctrine->getManager();
                    $followUpReportIndicators = new FollowupReportsIndicators();


                    $indicators =  $doctrine->getRepository(Indicators::class)->find(1);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursFormCVC[0]->corpsScore);
                    $followUpReportIndicators->setComment($key->indicateursFormCVC[0]->corpsDescription);


                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(2);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursFormCVC[0]->vetementsScore);
                    $followUpReportIndicators->setComment($key->indicateursFormCVC[0]->vetementsDescription);

                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(3);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursFormCVC[0]->comportementScore);
                    $followUpReportIndicators->setComment($key->indicateursFormCVC[0]->comportementDescription);

                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();
                }

                if ($key->indicateursEstLeLogement && $key->indicateursEstLeLogement !== null) {
                    $entityManager = $doctrine->getManager();
                    $followUpReportIndicators = new FollowupReportsIndicators();


                    $indicators =  $doctrine->getRepository(Indicators::class)->find(1);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->bailleurSelected);
                    $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionBailleur);


                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(2);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->voisinageSelected);
                    $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionVoisinage);

                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(3);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursEstLeLogement[0]->hygieneSelected);
                    $followUpReportIndicators->setComment($key->indicateursEstLeLogement[0]->descriptionHygiene);

                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();
                }

                if ($key->indicateursFormHestiaRisqueDeces && $key->indicateursFormHestiaRisqueDeces !== null) {
                    $entityManager = $doctrine->getManager();
                    $followUpReportIndicators = new FollowupReportsIndicators();


                    $indicators =  $doctrine->getRepository(Indicators::class)->find(1);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueSecuritee);
                    $followUpReportIndicators->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionSecuritee);


                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(2);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueSantee);
                    $followUpReportIndicators->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionSantee);

                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();

                    $indicators =  $doctrine->getRepository(Indicators::class)->find(3);
                    $followUpReportIndicators->setFore($report);
                    $followUpReportIndicators->setIndi($indicators);
                    $followUpReportIndicators->setValue($key->indicateursFormHestiaRisqueDeces[0]->valueConsommation);
                    $followUpReportIndicators->setComment($key->indicateursFormHestiaRisqueDeces[0]->descriptionConsommation);

                    $entityManager->persist($followUpReportIndicators);
                    $entityManager->flush();
                }
            }
        }


        if ($activities_jsondecode && $activities_jsondecode !== null) {

            $followUpReportActivities = new FollowupReportsActivities();
            // $followupReportContact = new FollowupReportsContact();
            // $followupReportActivityPlace = new FollowupReportActivityPlace();
            foreach ($activities_jsondecode as $key) {


                $typeSugg =  $doctrine->getRepository(Suggestions::class)->find(intval($key->type));


                $contact =  $doctrine->getRepository(Contacts::class)->find($key->contact);
                $place =  $doctrine->getRepository(Places::class)->find($key->place);
                $followUpReportActivities->setFore($report);
                $followUpReportActivities->setSugg($typeSugg);

                // $followupReportActivityPlace->setPlac

                $followUpReportActivities->setDescription($key->description);


                //must to have: add checkbox for idr step ?
                $followUpReportActivities->setIsIdrStep(1);

                $entityManager->persist($followUpReportActivities);
                $entityManager->flush();

                $followUpReportActivities->setFore($report);
                // $followUpReportActivities->setCont($contact);

                $entityManager->persist($followUpReportActivities);
                $entityManager->flush();
            }
        }

        if ($care_jsondecode && $care_jsondecode !== null) {

            $followUpReportActivities = new FollowupReportsActivities();
            // $followupReportContact = new FollowupReportsContact();
            foreach ($care_jsondecode as $key) {
                $typeSugg =  $doctrine->getRepository(Suggestions::class)->find(intval($key->type));
                $contact =  $doctrine->getRepository(Contacts::class)->find($key->contact);
                $followUpReportActivities->setFore($report);
                $followUpReportActivities->setSugg($typeSugg);
                $followUpReportActivities->setDescription($key->description);


                //must to have: add checkbox for idr step ?
                $followUpReportActivities->setIsIdrStep(1);

                $entityManager->persist($followUpReportActivities);
                $entityManager->flush();

                $followUpReportActivities->setFore($report);
                // $followUpReportActivities->setCont($contact);

                $entityManager->persist($followUpReportActivities);
                $entityManager->flush();
            }
        }



        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }



    #[Route('/api/getFollowUpReportsIndicators', name: 'app_indicatorsByPatients')]
    public function getIndicatorsByPatients(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $report = $doctrine->getRepository(FollowupReports::class)->findBy(["pati" => $id]);

        // dd($report);
        $test = [];
        foreach ($report as $key) {
            $test[] = $key->getId();
        }
        // array('id' => $idList)

        // dd($test);
        $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(array('fore' => $test));

        return $this->json($indicators);
    }

    #[Route('/api/getPlacesPatients', name: 'app_PlacesPatients')]
    public function getPatientsPlaces(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(PatientsPlaces::class)->findBy(["pati" => $id]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();

        return $this->json($places);
    }

    #[Route('/api/getFollowUpReportsGoals', name: 'app_FollowUpReportsGoals')]
    public function getGoals(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();

        return $this->json($places);
    }

    #[Route('/api/getActivitiesReports', name: 'app_FollowUpReportsActivities')]
    public function getActivitiesReport(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupReportsActivities::class)->findBy(["pati_id" => $id]);
        return $this->json($places);
    }

    #[Route('/api/setFollowUpReport', name: 'app_report')]
    public function setReport(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $content = $request->request->get('content');
        $idPati = $request->request->get('pati_id');
        $idUser = $request->request->get('user_id');
        // $patient = new Patients();
        // $patient->setId($idPati);

        $patient = $doctrine->getRepository(Patients::class)->find($idPati);
        $user = $doctrine->getRepository(User::class)->find($idUser);



        $entityManager = $doctrine->getManager();

        $report = new FollowupReports();

        $report->setContent($content);
        $report->setActivityType(0);
        $report->setReportType(0);
        $report->setPati($patient);
        $report->setUser($user);
        $report->setLastUpdate(($this->createdAt = new \DateTime("now")));
        $report->setCreationDate($this->createdAt = new \DateTime("now"));
        $report->setCreationDate($this->createdAt = new \DateTime("now"));

        $entityManager->persist($patient);
        $entityManager->persist($report);

        $entityManager->flush();


        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/setReportActivities', name: 'app_reportActivities')]
    public function setReportActivities(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $request = Request::createFromGlobals();

        $description = $request->request->get('description');
        $followUpReportId = $request->request->get('fore_id');



        $report = $doctrine->getRepository(FollowupReports::class)->find($followUpReportId);

        // dd($report);
        $entityManager = $doctrine->getManager();

        $activityReport = new FollowupReportsActivities();

        $activityReport->setDescription($description);
        $activityReport->setFore($report);

        $entityManager->persist($activityReport);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $activityReport->getId(),
            'response' => "Sent !"
        ]);
    }
}
