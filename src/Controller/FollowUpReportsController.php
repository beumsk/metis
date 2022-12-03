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

    #[Route('/api/setGoals', name: 'app_setGoals')]
    public function setGoals(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $typeValue = $request->request->get('typeValue');
        $isPriority = $request->request->get('isPriority');
        $description = $request->request->get('description');
        $valueType = $request->request->get('valueType');
        $description = $request->request->get('description');
        $patientId = $request->request->get('patientId');
        $userId = $request->request->get('userId');
        $valueType = $request->request->get('valueType');



        $followupGoals = new FollowupGoals();
        $patients = $doctrine->getRepository(Patients::class)->find($patientId);
        $user = $doctrine->getRepository(Patients::class)->find($userId);
        $suggestions = $doctrine->getRepository(Suggestions::class)->find($typeValue);
        // $function = $doctrine->getRepository(Suggestions::class)->find($callsFunctionValue);

        $followupGoals->setPati($patients);
        $followupGoals->setType(1);
        $followupGoals->setSugg($suggestions);
        $followupGoals->setCreationDate(new \DateTime("now"));
        $followupGoals->setDescription($description);
        $followupGoals->setStatus(3);
        $followupGoals->setTitle($valueType);
        $entityManager->persist($followupGoals);

        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupGoals->getId()
        ]);
    }

    #[Route('/api/getFollowUpReportsById', name: 'app_getFollowUpReportsById')]
    public function getFollowUpReportsById(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $report = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);




        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $jsonObject = $serializer->serialize($report, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'cont', 'contact', 'func', 'sugg', 'contacts']
        ]);



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

        $followUpReports = $doctrine->getRepository(FollowupReports::class)->findBy(['pati' => $id]);
        $followUpGoals = $doctrine->getRepository(FollowupGoals::class)->findBy(['pati' => $id]);
        // dd($followUpReports);

        $id = null;
        foreach ($followUpReports as  $value) {
            if ($value->getId()) {
                $report = $doctrine->getRepository(FollowupReportsActivities::class)->findBy(['fore' => $value->getId()]);




                $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(['fore' => $value->getId()]);





                if ($report !== []) {
                    foreach ($report as $itemReport) {
                        if ($itemReport->getSugg()->getParentSugg() !== null && $itemReport->getSugg()->getParentSugg()->getValue() === "Soins") {
                            $value->setFollowupReportsCare($itemReport);
                        }

                        if ($itemReport->getSugg()->getParentSugg() !== null && $itemReport->getSugg()->getParentSugg()->getValue() === "Activités") {

                            // array_push([$itemReport], ["idFront" => $itemReport->getId()]);
                            $value->setFollowupReportsActivities($itemReport);
                        }
                    }
                }

                if ($indicators !== []) {
                    foreach ($indicators as  $indi) {
                        $value->setFollowupReportsIndicators($indi);
                    }
                }
                // if ($followUpGoals !== []) {
                //     foreach ($followUpGoals as  $goal) {
                //         // dd($goal);

                //         $value->setFollowupReportsGoals($goal);
                //     }
                // }
            }
        }


        $arrFollowUpLimited = [];



        for ($i = 0; $i < $countResult; $i++) {
            // dd($followUpReports[$i]);
            if ($i < $countResult && $followUpReports[$i]) {

                array_push($followUpReports, $followUpReports[$i]);
            }
        }

        // array_push($arrFollowUpLimited, ...$followUpGoals);
        $result = array_merge([...$followUpReports], [...$followUpGoals]);

        // dd($followUpGoals);
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($followUpReports, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "informations", "cont", "fogo", "occupants", "parentSugg", "contacts"]
        ]);

        $jsonObject2 = $serializer->serialize($followUpGoals, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "informations", "cont", "fore", "contacts"]
        ]);

        $result = array_merge([$jsonObject], [$jsonObject2]);
        $response = new Response($result[0], 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        // $response2 = new Response($jsonObject2, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        // $response->setSharedMaxAge(3600);
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
        $contId = $request->request->get('contId');



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
        $cont =  $doctrine->getRepository(Contacts::class)->find($contId);

        $report = $doctrine->getRepository(FollowupReports::class)->find($rapportId);


        $report->setUser($user);
        $report->setActivityType(1);
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
        $report->setReportType(1);
        $report->setPlac($plac);
        $report->addCont($cont);
        $report->setIsHightlight(false);
        $report->setReportDate(new \DateTime($changeDate));



        if ($changeContacts) {
            $contact = $doctrine->getRepository(Contacts::class)->find($changeContacts);
            $report->addCont($contact);
        }

        if ($changePlaces) {
            $places = $doctrine->getRepository(Contacts::class)->find($changePlaces);
            $report->setPlac($places);
        }


        // dd($report);
        $entityManager = $doctrine->getManager();

        // $entityManager->persist($report);

        $entityManager->flush();



        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/updateCalls', name: 'app_updateCalls')]
    public function updateCalls(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $idRapport = $request->request->get('idRapport');
        $changeDate = $request->request->get('changeDate');
        $changeGoals = $request->request->get('changeGoals');
        $contId = $request->request->get('contId');
        $goalsInput = $request->request->get('goalsInput');
        $userId = $request->request->get('userId');
        $patiId = $request->request->get('patiId');
        $description = $request->request->get('description');

        $followupGoals = $doctrine->getRepository(FollowupGoals::class)->find(["id" => $idRapport]);
        $changeGoals = $doctrine->getRepository(Suggestions::class)->find($changeGoals);
        $contact = $doctrine->getRepository(Contacts::class)->find($contId);


        $followupGoals->setCreationDate(new \DateTime($changeDate));


        $followupGoals->setSugg($changeGoals);
        $followupGoals->setCont($contact);
        $followupGoals->setDescription($description);

        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupGoals->getId()
        ]);
    }


    #[Route('/api/setCalls', name: 'app_setCalls')]
    public function setCalls(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $callsFunctionValue = $request->request->get('callsFunctionValue');
        $isCallsPatients = $request->request->get('isCallsPatients');
        $isPriority = $request->request->get('isPriority');
        $contact = $request->request->get('contact');
        $description = $request->request->get('description');
        $valueWhatDoinFunction = $request->request->get('valueWhatDoinFunction');
        $patientId = $request->request->get('patientId');
        $userId = $request->request->get('userId');


        $followupGoals = new FollowupGoals();
        $patients = $doctrine->getRepository(Patients::class)->find($patientId);
        $user = $doctrine->getRepository(Patients::class)->find($userId);
        $suggestions = $doctrine->getRepository(Suggestions::class)->find($valueWhatDoinFunction);
        $function = $doctrine->getRepository(Suggestions::class)->find($callsFunctionValue);

        $followupGoals->setPati($patients);

        if ($isCallsPatients === "false") {

            $followupGoals->setType(2);
        }

        if ($isCallsPatients === "true") {
            $contact = $doctrine->getRepository(Contacts::class)->find($contact);
            $followupGoals->setCont($contact);
            $followupGoals->setType(1);
        }
        $followupGoals->setFunc($function);
        $followupGoals->setSugg($suggestions);

        // $followupGoals->setUser($user);

        $followupGoals->setCreationDate(new \DateTime("now"));
        $followupGoals->setDescription($description);
        $followupGoals->setStatus(0);
        $entityManager->persist($followupGoals);

        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupGoals->getId()
        ]);
    }
    #[Route('/api/addIndicators', name: 'app_addIndicators')]
    public function addIndicators(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('rapportId');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);

        $indicateurs_jsondecode = json_decode($formIndicateurs);
        // dd($indicateurs_jsondecode);
        if ($indicateurs_jsondecode !== null) {
            if ($indicateurs_jsondecode->selectedOptionType === "HESTIA - Risque décès") {
                $securitee = ($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_secur !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_secur) : null;
                $santee = ($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_sant !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_sant) : null;
                $consommation = ($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_conso !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_conso) : null;

                if ($securitee === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(7);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->valueSecuritee);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->descriptionSecuritee);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($santee === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(8);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->valueSantee);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->descriptionSantee);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($consommation === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(9);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->valueConsommation);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->descriptionConsommation);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($securitee !== null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(7);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->valueSecuritee);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->descriptionSecuritee);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($santee !== null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(8);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->valueSantee);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->descriptionSantee);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($consommation !== null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(9);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->valueConsommation);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->descriptionConsommation);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }
            }
            if ($indicateurs_jsondecode->selectedOptionType === "CVC") {
                // dd($indicateurs_jsondecode);
                $corps = ($indicateurs_jsondecode->indicateursFormCVC[0]->id_corps !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormCVC[0]->id_corps) : null;
                $vetements = ($indicateurs_jsondecode->indicateursFormCVC[0]->id_vetements !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormCVC[0]->id_vetements) : null;
                $comportement = ($indicateurs_jsondecode->indicateursFormCVC[0]->id_comportement !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormCVC[0]->id_comportement) : null;

                // dd(count(get_object_vars($corps)));

                if ($corps === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(1);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->corpsScore);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormCVC[0]->corpsDescription);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }
                if ($vetements === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(2);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->vetementsScore);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormCVC[0]->vetementsDescription);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }
                if ($comportement === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(3);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->comportementScore);
                    $indicators->setComment($indicateurs_jsondecode->indicateursFormCVC[0]->comportementDescription);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($corps !== null) {

                    $indi = $doctrine->getRepository(Indicators::class)->find(1);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $corps->setFore($fore);
                    $corps->setIndi($indi);
                    $corps->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->corpsScore);
                    $corps->setComment($indicateurs_jsondecode->indicateursFormCVC[0]->corpsDescription);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }
                if ($vetements !== null) {
                    $indi = $doctrine->getRepository(Indicators::class)->find(2);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $vetements->setFore($fore);
                    $vetements->setIndi($indi);
                    $vetements->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->vetementsScore);
                    $vetements->setComment($indicateurs_jsondecode->indicateursFormCVC[0]->vetementsDescription);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }
                if ($comportement !== null) {
                    $indi = $doctrine->getRepository(Indicators::class)->find(3);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $comportement->setFore($fore);
                    $comportement->setIndi($indi);
                    $comportement->setValue($indicateurs_jsondecode->indicateursFormCVC[0]->comportementScore);
                    $comportement->setComment($indicateurs_jsondecode->indicateursFormCVC[0]->comportementDescription);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                // dd($indicateurs_jsondecode->indicateursFormCVC[0]);
            }
            if ($indicateurs_jsondecode->selectedOptionType === "HESTIA - Risque perte logement") {

                // dd($indicateurs_jsondecode->indicateursEstLeLogement[0]);
                $bailleur = ($indicateurs_jsondecode->indicateursEstLeLogement[0]->id_bailleur !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_bailleur) : null;
                $hygiene = ($indicateurs_jsondecode->indicateursEstLeLogement[0]->id_hygiene !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_hygiene) : null;
                $voisinage = ($indicateurs_jsondecode->indicateursEstLeLogement[0]->id_voisinage !== null) ? $doctrine->getRepository(FollowupReportsIndicators::class)->find($indicateurs_jsondecode->indicateursFormHestiaRisqueDeces[0]->id_voisinage) : null;

                if ($bailleur === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(6);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursEstLeLogement[0]->bailleurSelected);
                    $indicators->setComment($indicateurs_jsondecode->indicateursEstLeLogement[0]->descriptionBailleur);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                    // dd($indicateurs_jsondecode->indicateursEstLeLogement[0]);
                }

                if ($hygiene === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(5);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursEstLeLogement[0]->bailleurSelected);
                    $indicators->setComment($indicateurs_jsondecode->indicateursEstLeLogement[0]->descriptionBailleur);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($voisinage === null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(4);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursEstLeLogement[0]->bailleurSelected);
                    $indicators->setComment($indicateurs_jsondecode->indicateursEstLeLogement[0]->descriptionBailleur);
                    $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($bailleur !== null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(6);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursEstLeLogement[0]->bailleurSelected);
                    $indicators->setComment($indicateurs_jsondecode->indicateursEstLeLogement[0]->descriptionBailleur);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($hygiene !== null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(5);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursEstLeLogement[0]->bailleurSelected);
                    $indicators->setComment($indicateurs_jsondecode->indicateursEstLeLogement[0]->descriptionBailleur);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }

                if ($voisinage !== null) {
                    $indicators = new FollowupReportsIndicators();
                    $indi = $doctrine->getRepository(Indicators::class)->find(4);
                    $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

                    $indicators->setFore($fore);
                    $indicators->setIndi($indi);
                    $indicators->setValue($indicateurs_jsondecode->indicateursEstLeLogement[0]->bailleurSelected);
                    $indicators->setComment($indicateurs_jsondecode->indicateursEstLeLogement[0]->descriptionBailleur);
                    // $entityManager->persist($indicators);

                    $entityManager->flush();
                }
            }
            // dd($key);

        }
        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }


    #[Route('/api/addCaresToReport', name: 'app_addCaresToReport')]
    public function addCaresToReport(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formSoins = $request->request->get('formSoins');
        // dd($formSoins);

        $reportId = $request->request->get('rapportId');
        $value = $request->request->get('value');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);
        $sugg =  $doctrine->getRepository(Suggestions::class)->find($value);
        // dd($report);
        $care_jsondecode = json_decode($formSoins);


        if ($care_jsondecode && $care_jsondecode !== null) {
            $editFollowUpReportCare =  $doctrine->getRepository(FollowupReportsActivities::class)->findBy(["id" => $care_jsondecode->care_id]);

            $contact =  (property_exists($care_jsondecode, "contact") === true) ? $doctrine->getRepository(Contacts::class)->find(intval($care_jsondecode->contact)) : null;
            $place =  (property_exists($care_jsondecode, "place") === true) ? $doctrine->getRepository(Contacts::class)->find(intval($care_jsondecode->place)) : null;

            $description = $care_jsondecode->description;

            $followUpReportActivities = new FollowupReportsActivities();
            if (count($editFollowUpReportCare) === 0) {
                $followUpReportActivities->setActivity($sugg);

                $followUpReportActivities->setDescription($care_jsondecode->description);
                $followUpReportActivities->setIsIdrStep(1);
                $followUpReportActivities->setFore($report);

                if (property_exists($care_jsondecode, "place") === true && $care_jsondecode->place !== null) {
                    $followUpReportActivities->addPlace($place);
                }

                if (property_exists($care_jsondecode, "contact") === true && $care_jsondecode->contact !== null) {
                    $followUpReportActivities->addContact($contact);
                }


                $entityManager->persist($followUpReportActivities);
                $entityManager->flush();
            }
        }

        return new JsonResponse([
            'response' => $followUpReportActivities
        ]);
    }
    #[Route('/api/addActivitiesToReport', name: 'app_addActivitiesToReport')]
    public function addActivitiesToReport(ManagerRegistry $doctrine, Request $request): JsonResponse
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formSoins = $request->request->get('formActivities');
        // dd($formSoins);

        $reportId = $request->request->get('rapportId');
        $value = $request->request->get('value');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);
        $sugg =  $doctrine->getRepository(Suggestions::class)->find($value);
        // dd($report);
        $care_jsondecode = json_decode($formSoins);


        if ($care_jsondecode && $care_jsondecode !== null) {
            $editFollowUpReportCare =  $doctrine->getRepository(FollowupReportsActivities::class)->findBy(["id" => $care_jsondecode->act_id]);

            $contact =  (property_exists($care_jsondecode, "contact") === true) ? $doctrine->getRepository(Contacts::class)->find(intval($care_jsondecode->contact)) : null;
            $place =  (property_exists($care_jsondecode, "place") === true) ? $doctrine->getRepository(Contacts::class)->find(intval($care_jsondecode->place)) : null;

            $description = $care_jsondecode->description;

            $followUpReportActivities = new FollowupReportsActivities();
            if (count($editFollowUpReportCare) === 0) {
                $followUpReportActivities->setActivity($sugg);

                $followUpReportActivities->setDescription($care_jsondecode->description);
                $followUpReportActivities->setIsIdrStep(1);
                $followUpReportActivities->setFore($report);

                if (property_exists($care_jsondecode, "place") === true && $care_jsondecode->place !== null) {
                    $followUpReportActivities->addPlace($place);
                }

                if (property_exists($care_jsondecode, "contact") === true && $care_jsondecode->contact !== null) {
                    $followUpReportActivities->addContact($contact);
                }


                $entityManager->persist($followUpReportActivities);
                $entityManager->flush();
            }
        }

        return new JsonResponse([
            'response' => $followUpReportActivities
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
        $changeContacts = $request->request->get('contId');
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
        $report->setActivityType(1);
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
        $report->setReportType($meetType);

        $report->setIsHightlight(false);
        $report->setReportDate(new \DateTime($changeDate));



        if ($changeContacts) {
            $contact = $doctrine->getRepository(Contacts::class)->find($changeContacts);
            $report->addCont($contact);
        }

        if ($changePlaces) {
            $places = $doctrine->getRepository(Contacts::class)->find($changePlaces);
            $report->setPlac($places);
        }


        // dd($report);
        $entityManager = $doctrine->getManager();

        $entityManager->persist($report);

        $entityManager->flush();

        // dd($indicateurs_jsondecode);









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
        // dd($indicators);
        $fore = [];
        // dd($indicators);
        foreach ($indicators as $value) {
            // dd($value);
            // foreach ($value->getFore() as $indi) {

            array_push($fore, ["indi" => $value->getIndi(), "value" => $value->getValue(), "comment" => $value->getComment(), "fore" => ["reportDate" => $value->getFore()->getReportDate()]]);
            // }
        }

        // dd($fore);

        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($fore, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "informations", "fore"]
        ]);


        // $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        // $response->setSharedMaxAge(3600);
        return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);


        // return $this->json($fore);
    }

    #[Route('/api/getPlacesPatients', name: 'app_PlacesPatients')]
    public function getPatientsPlaces(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(PatientsPlaces::class)->findBy(["pati" => $id, "deleted_at" => null]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();


        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $arrPatientsByContacts = [];

        foreach ($places as $value) {
            // dd($value->getCont()->getFirstname());
            if ($value) {
                $arrPatientsByContacts[] = [
                    "id" => $value->getId(),
                    "start" => $value->getStart(),
                    "end" => $value->getEnd(),
                    "comment" => $value->getComment(),
                    "cont" => [$value->getCont()],
                    "pati" => [$value->getPati()],
                    "sugg" => [$value->getSugg()]
                    // "firstname" => ($value->getCont()->getFirstname() !== null) ? $value->getCont()->getFirstname() : null,
                ];
            }
        }


        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($arrPatientsByContacts, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ["cont", "pati", "sugg", "orga", "calls", "user", "informations", "fore", "contact"]
        ]);


        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        $response->setSharedMaxAge(3600);
        // return new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        return $response;
    }

    #[Route('/api/getFollowUpReportsGoals', name: 'app_FollowUpReportsGoals')]
    public function getGoals(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($places, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'cont', 'contact', 'func', 'sugg']
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        return $response;
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
