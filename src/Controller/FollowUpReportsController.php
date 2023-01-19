<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Places;
use App\Entity\Contacts;
use App\Entity\Patients;
use App\Entity\Indicators;
use App\Entity\Suggestions;
use App\Entity\FollowupGoals;
use App\Entity\PatientsPlaces;
use App\Entity\FollowupReports;
use App\Entity\FollowupReportsContact;
use App\Entity\FollowupReportsActivities;
use App\Entity\FollowupReportsIndicators;
use App\Entity\IndicatorsGroups;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerBuilder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;

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
        if ($description !== "null") {
            $followupGoals->setDescription($description);
        }

        $followupGoals->setStatus(0);

        if ($valueType !== "null") {
            $followupGoals->setTitle($valueType);
        }

        $entityManager->persist($followupGoals);

        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupGoals->getId()
        ]);
    }

    #[Route('/api/editProfile', name: 'app_editProfile')]
    public function editProfile(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $firstname = $request->request->get('firstname');
        $lastname = $request->request->get('lastname');
        $nickname = $request->request->get('nickname');
        $birthDate = $request->request->get('birthDate');
        $unknownYear = $request->request->get('unknownYear');
        $birthlocation = $request->request->get('birthlocation');
        $firstContactDate = $request->request->get('firstContactDate');
        $pati_id = $request->request->get('patient');


        //   dd($firstname);
        $patient = $doctrine->getRepository(Patients::class)->find($pati_id);


        if ($firstname !== "null") {
            $patient->setFirstname($firstname);
        }

        if ($lastname !== "null") {
            $patient->setLastname($lastname);
        }

        if ($nickname !== "null") {

            $patient->setNicknames($nickname);
        }

        if ($birthDate !== "null") {
            $patient->setBirthdate(new \DateTime($birthDate));
        }

        if ($unknownYear !== "null") {
            $patient->setUnknownYear($unknownYear !== "true" ? true : false);
        }

        if ($birthlocation !== "null") {
            $patient->setBirthLocation($birthlocation);
        }

        if ($firstContactDate !== "null") {
            $patient->setFirstContactDate(new \DateTime($firstContactDate));
        }




        $entityManager->flush();

        return $this->json($patient->getId());
    }


    #[Route('/api/getFollowUpGoalsById', name: 'app_getFollowUpGoalsById')]
    public function getFollowUpGoalsById(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $textSearch = $request->request->get('setTextRapport');
        $dateSearch = $request->request->get('setDateRapport');
        $typeSearch = $request->request->get('setTypeRapport');
        $searchLink = $request->request->get('idSearch');


        $reportFollowUp = $doctrine->getRepository(FollowupGoals::class)->find($id);



        foreach ([$reportFollowUp] as  $value) {
            if ($value->getId()) {

                $value->setIsShow(false);

                foreach ($value->getFore() as $fore) {
                    $fore->setIsShow(false);
                }
            }
        }


        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $arrForeByFogo = [];

        if ($reportFollowUp && $reportFollowUp->getFore()) {
            foreach ($reportFollowUp->getFore() as $value) {
                $arrForeByFogo[] =   [
                    "id" => $value->getId(),
                    "activityType" => $value->getActivityType(),
                    "reportType" => $value->getReportType(),
                    "reportDate" => ($value->getReportDate()) ? $value->getReportDate()->format(DATE_RFC3339_EXTENDED) : null,
                    "lastUpdate" => ($value->getLastUpdate()) ? $value->getLastUpdate()->format(DATE_RFC3339_EXTENDED) : null,
                    "creationDate" => ($value->getCreationDate()) ? $value->getCreationDate()->format(DATE_RFC3339_EXTENDED) : null,
                    "description" => $value->getContent(),
                    "isHightlight" => $value->getIsHightlight(),
                    "noCare" => $value->getNoCare(),
                    "noActivities" => $value->getNoActivities(),
                    "noIndicators" => $value->getNoIndicators(),
                    "deletedAt" => ($value->getDeletedAt() !== null) ? $value->getDeletedAt()->format(DATE_RFC3339_EXTENDED) : null,
                    "duration" => ($value->getDuration() !== null) ? $value->getDuration()->format(DATE_RFC3339_EXTENDED) : null,
                    "plac" => (is_array($value->getPlac()) === true && count($value->getPlac()) > 0) ?
                        array_map(function ($a) {
                            return [
                                "id" => $a->getId(),
                                "lastname" => ($a->getLastName() && $a->getLastName() !== null) ? $a->getLastname() : null,
                            ];
                        }, [...$value->getPlac()])
                        :
                        [
                            "id" => ($value->getPlac() && $value->getPlac()->getId() !== null) ? $value->getPlac()->getId() : null,
                            "lastname" => ($value->getPlac() && $value->getPlac()->getLastName() && $value->getPlac()->getLastName() !== null) ? $value->getPlac()->getLastname() : null,
                        ],
                    "cont" => (count($value->getCont()) > 0) ?
                        array_map(function ($a) {
                            return [
                                "value" => $a->getId(),
                                "label" => $a->getFirstName() . " " . $a->getLastName(),
                            ];
                        }, [...$value->getCont()])
                        : null,
                    "fogo" => (count($value->getFogo()) > 0) ?
                        array_map(function ($a) {
                            return [
                                "value" => $a->getId(),
                                "label" => $a->getCreationDate()->format('d/m/Y') . " " . (($a->getFunc() && $a->getFunc()->getValue()) ? $a->getFunc()->getValue() : null) . " " . (($a->getDescription()) ? $a->getDescription() : null),

                                // "id" => ($a->getId() !== null) ? $a->getId() : null,
                                // "description" => ($a->getDescription() !== null) ? $a->getDescription() : null,
                                // "creationDate" => $a->getCreationDate()->format(DATE_RFC3339_EXTENDED),
                                // "type" => $a->getType(),
                                // "sugg" => ($a->getSugg() && $a->getSugg() !== null) ? [
                                //     "id" => $a->getSugg()->getId(),
                                //     "value" => $a->getSugg()->getValue(),
                                // ] : null,
                                // "deletedAt" => ($a->getDeletedAt() !== null) ? $a->getDeletedAt()->format(DATE_RFC3339_EXTENDED) : null,
                                // "title" => ($a->getTitle() !== null) ? $a->getTitle() : null,
                                // "cont" => ($a->getCont() && $a->getCont() !== null) ? [
                                //     "id" => $a->getCont()->getId(),
                                //     "lastname" => ($a->getCont()->getLastName() && $a->getCont()->getLastName() !== null) ? $a->getCont()->getLastname() : null,
                                //     "firstname" => ($a->getCont()->getFirstName() && $a->getCont()->getFirstName() !== null) ? $a->getCont()->getFirstName() : null
                                // ] : null
                            ];
                        }, [...$value->getFogo()])
                        : null,
                    "followupReportsIndicators" => (count($value->getIndicators()) > 0) ?
                        array_map(function ($a) {
                            // dd($a);
                            return [
                                "id" => ($a->getId() !== null) ? $a->getId() : null,
                                "value" => $a->getValue(),
                                "comment" => ($a->getComment() && $a->getComment() !== null) ? $a->getComment() : null,
                                "indi" => ($a->getIndi() && $a->getIndi() !== null) ? [
                                    "id" => $a->getIndi()->getId(),
                                    "name" => ($a->getIndi() && $a->getIndi()->getName()) ? $a->getIndi()->getName() : null,
                                    "description" => ($a->getIndi() && $a->getIndi()->getDescription()) ? $a->getIndi()->getDescription() : null,
                                    "groups" => [
                                        "name" => ($a->getIndi()->getGroups()[0]->getName()) ? $a->getIndi()->getGroups()[0]->getName() : null,
                                        "id" => ($a->getIndi()->getGroups()[0]->getId()) ? $a->getIndi()->getGroups()[0]->getId() : null
                                    ]
                                ] : null
                            ];
                        }, [...$value->getIndicators()])
                        : null,

                    "indicatorsGroups" => (count($value->getIndicatorsGroups()) > 0) ?

                        array_map(function ($a) {

                            return [
                                "id" => ($a->getId() !== null) ? $a->getId() : null,
                                "name" => ($a->getName() && $a->getName() !== null) ? $a->getName() : null,
                            ];
                        }, [...$value->getIndicatorsGroups()])
                        : null,
                    "isShow" => false,
                    "followupReportsActivities" => (count($value->getActivities()) > 0) ?
                        array_map(function ($a) {

                            return [
                                "id" => ($a->getId() !== null) ? $a->getId() : null,
                                "description" => ($a->getDescription() && $a->getDescription() !== null) ? $a->getDescription() : null,
                                // "valueParent" => ($a->getValue() && $a->getValue() !== null) ? $a->getValue() : null,
                                "sugg" => ($a->getSugg() && $a->getSugg() !== null) ? [
                                    "id" => $a->getSugg()->getId(),
                                    "value" => ($a->getSugg() !== null && $a->getSugg()->getValue()) ? $a->getSugg()->getValue() : null,
                                    "parentValue" => ($a->getSugg() !== null && $a->getSugg()->getValue()) ? $a->getSugg()->getParentSugg()->getValue() : null,
                                    // "description" => ($a->getIndi() && $a->getIndi()->getDescription()) ? $a->getIndi()->getDescription() : null
                                ] : null,
                                "places" => ($a->getPlaces() && $a->getPlaces() !== null) ?

                                    array_map(function ($b) {
                                        return [
                                            "id" => $b->getId(),
                                            "lastname" => $b->getLastName()
                                        ];
                                    }, [...$a->getPlaces()]) : null,

                                "contacts" => ($a->getContacts() && $a->getContacts() !== null) ?

                                    array_map(function ($b) {
                                        return [
                                            "value" => $b->getId(),
                                            "label" => $b->getFirstName() . " " . $b->getLastName(),
                                        ];
                                    }, [...$a->getContacts()]) : null,
                            ];
                        },  [...$value->getActivities()])
                        :  null,
                ];
            }
        }




        $jsonObject = $serializer->serialize([...$arrForeByFogo], 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'informations', 'occupants', 'fore', 'parentSugg', 'patient', 'user', 'contact', 'func', 'calls', 'patients']
        ]);


        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        $response->setSharedMaxAge(3600);

        return $response;
    }


    #[Route('/api/getFollowUpReportsById', name: 'app_getFollowUpReportsById')]
    public function getFollowUpReportsById(ManagerRegistry $doctrine, SerializerInterface $serializer): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $textSearch = $request->request->get('setTextRapport');
        $dateSearch = $request->request->get('setDateRapport');
        $typeSearch = $request->request->get('setTypeRapport');
        $searchLink = $request->request->get('idSearch');
        $number = $request->request->get('number');

        $reportFollowUp = $doctrine->getRepository(FollowupReports::class)->mergeFollowUpGoalsAndReports($id, $textSearch, $dateSearch, $typeSearch, $searchLink, $number);

        $arr = [];
        foreach ($reportFollowUp as  $value) {
            if ($value->getDeletedAt() === null) {
                $arr[] = [
                    "id" => $value->getId(),
                    "activityType" => $value->getActivityType(),
                    "reportType" => $value->getReportType(),
                    "reportDate" => ($value->getReportDate()) ? $value->getReportDate()->format(DATE_RFC3339_EXTENDED) : null,
                    "lastUpdate" => ($value->getLastUpdate()) ? $value->getLastUpdate()->format(DATE_RFC3339_EXTENDED) : null,
                    "creationDate" => ($value->getCreationDate()) ? $value->getCreationDate()->format(DATE_RFC3339_EXTENDED) : null,
                    "description" => $value->getContent(),
                    "isHightlight" => $value->getIsHightlight(),
                    "noCare" => $value->getNoCare(),
                    "noActivities" => $value->getNoActivities(),
                    "noIndicators" => $value->getNoIndicators(),
                    "deletedAt" => ($value->getDeletedAt() !== null) ? $value->getDeletedAt()->format(DATE_RFC3339_EXTENDED) : null,
                    "duration" => ($value->getDuration() !== null) ? $value->getDuration()->format(DATE_RFC3339_EXTENDED) : null,
                    "plac" => (is_array($value->getPlac()) === true && count($value->getPlac()) > 0) ?
                        array_map(function ($a) {
                            return [
                                "id" => $a->getId(),
                                "lastname" => ($a->getLastName() && $a->getLastName() !== null) ? $a->getLastname() : null,
                            ];
                        }, [...$value->getPlac()])
                        :
                        [
                            "id" => ($value->getPlac() && $value->getPlac()->getId() !== null) ? $value->getPlac()->getId() : null,
                            "lastname" => ($value->getPlac() && $value->getPlac()->getLastName() && $value->getPlac()->getLastName() !== null) ? $value->getPlac()->getLastname() : null,
                        ],
                    "cont" => (count($value->getCont()) > 0) ?
                        array_map(function ($a) {
                            return [
                                "value" => $a->getId(),
                                "label" => $a->getFirstName() . " " . $a->getLastName() . " " . $a->getDescription(),
                            ];
                        }, [...$value->getCont()])
                        : null,
                    "fogo" => (count($value->getFogo()) > 0) ?
                        array_map(function ($a) {
                            return [

                                "label" => $a->getCreationDate()->format('d/m/Y') . " " . (($a->getSugg() && $a->getSugg()->getValue()) ? $a->getSugg()->getValue() : null) . " " . (($a->getDescription()) ? $a->getDescription() : null),
                                "value" => $a->getId(),
                                // "id" => ($a->getId() !== null) ? $a->getId() : null,
                                // "description" => ($a->getDescription() !== null) ? $a->getDescription() : null,
                                // "creationDate" => $a->getCreationDate()->format(DATE_RFC3339_EXTENDED),
                                // "type" => $a->getType(),
                                // "sugg" => ($a->getSugg() && $a->getSugg() !== null) ? [
                                //     "id" => $a->getSugg()->getId(),
                                //     "value" => $a->getSugg()->getValue(),
                                // ] : null,
                                // "deletedAt" => ($a->getDeletedAt() !== null) ? $a->getDeletedAt()->format(DATE_RFC3339_EXTENDED) : null,
                                // "title" => ($a->getTitle() !== null) ? $a->getTitle() : null,
                                // "cont" => ($a->getCont() && $a->getCont() !== null) ? [
                                //     "id" => $a->getCont()->getId(),
                                //     "lastname" => ($a->getCont()->getLastName() && $a->getCont()->getLastName() !== null) ? $a->getCont()->getLastname() : null,
                                //     "firstname" => ($a->getCont()->getFirstName() && $a->getCont()->getFirstName() !== null) ? $a->getCont()->getFirstName() : null
                                // ] : null
                            ];
                        }, [...$value->getFogo()])
                        : null,
                    "followupReportsIndicators" => (count($value->getIndicators()) > 0) ?
                        array_map(function ($a) {
                            // dd($a);
                            return [
                                "id" => ($a->getId() !== null) ? $a->getId() : null,
                                "value" => $a->getValue(),
                                "comment" => ($a->getComment() && $a->getComment() !== null) ? $a->getComment() : null,
                                "indi" => ($a->getIndi() && $a->getIndi() !== null) ? [
                                    "id" => $a->getIndi()->getId(),
                                    "name" => ($a->getIndi() && $a->getIndi()->getName()) ? $a->getIndi()->getName() : null,
                                    "description" => ($a->getIndi() && $a->getIndi()->getDescription()) ? $a->getIndi()->getDescription() : null,
                                    "groups" => [
                                        "name" => ($a->getIndi()->getGroups()[0]->getName()) ? $a->getIndi()->getGroups()[0]->getName() : null,
                                        "id" => ($a->getIndi()->getGroups()[0]->getId()) ? $a->getIndi()->getGroups()[0]->getId() : null
                                    ]
                                ] : null
                            ];
                        }, [...$value->getIndicators()])
                        : null,

                    "indicatorsGroups" => (count($value->getIndicatorsGroups()) > 0) ?

                        array_map(function ($a) {

                            return [
                                "id" => ($a->getId() !== null) ? $a->getId() : null,
                                "name" => ($a->getName() && $a->getName() !== null) ? $a->getName() : null,
                            ];
                        }, [...$value->getIndicatorsGroups()])
                        : null,
                    "isShow" => false,
                    "followupReportsActivities" => (count($value->getActivities()) > 0) ?
                        array_map(function ($a) {

                            return [
                                "id" => ($a->getId() !== null) ? $a->getId() : null,
                                "description" => ($a->getDescription() && $a->getDescription() !== null) ? $a->getDescription() : null,
                                // "valueParent" => ($a->getValue() && $a->getValue() !== null) ? $a->getValue() : null,
                                "sugg" => ($a->getSugg() && $a->getSugg() !== null) ? [
                                    "id" => $a->getSugg()->getId(),
                                    "value" => ($a->getSugg() !== null && $a->getSugg()->getValue()) ? $a->getSugg()->getValue() : null,
                                    "parentValue" => ($a->getSugg() !== null && $a->getSugg()->getValue()) ? $a->getSugg()->getParentSugg()->getValue() : null,
                                    // "description" => ($a->getIndi() && $a->getIndi()->getDescription()) ? $a->getIndi()->getDescription() : null
                                ] : null,
                                "places" => ($a->getPlaces() && $a->getPlaces() !== null) ?

                                    array_map(function ($b) {
                                        return [
                                            "id" => $b->getId(),
                                            "lastname" => $b->getLastName()
                                        ];
                                    }, [...$a->getPlaces()]) : null,

                                "contacts" => ($a->getContacts() && $a->getContacts() !== null) ?

                                    array_map(function ($b) {
                                        return [
                                            "value" => $b->getId(),
                                            "label" => $b->getFirstName() . " " . $b->getLastName(),
                                        ];
                                    }, [...$a->getContacts()]) : null,
                            ];
                        },  [...$value->getActivities()])
                        :  null,

                ];
            }

            array_filter($arr, function ($v) {
                return $v["followupReportsActivities"] !== null;
            });
        }

        $response = new Response(json_encode($arr), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);

        return $response;
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
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $activityType = $request->request->get('activityType');
        $contacts = $request->request->get('contacts');
        $changeTypeMeet = $request->request->get('changeTypeMeet');
        $changeDate = $request->request->get('changeDate');
        $goal_id = $request->request->get('changeGoals');
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
        $indicateurs = $request->request->get('formIndicateurs');
        $dureevalue = $request->request->get('dureeValue');



        $care_jsondecode = json_decode($formSoins);
        $activities_jsondecode = json_decode($formActivities);
        $indicateurs_jsondecode = json_decode($formIndicateurs);


        $no_care = ($care_jsondecode !== null) ? 0 : 1;
        $no_activities =  ($activities_jsondecode !== null) ? 0 : 1;
        $no_indicateurs =  ($indicateurs_jsondecode !== null) ? 0 : 1;


        $user = $doctrine->getRepository(User::class)->find($userId);


        $patient =  $doctrine->getRepository(Patients::class)->find($patiId);
        // $plac =  $doctrine->getRepository(Places::class)->find($changePlaces);
        // $cont =  $doctrine->getRepository(Contacts::class)->find($contId);

        $report = $doctrine->getRepository(FollowupReports::class)->find($rapportId);


        $report->setUser($user);
        $report->setActivityType($activityType);
        $report->setReportDate($reportDate);

        $report->setLastUpdate($reportDate);
        $report->setContent(($changeEditor === "null") ? FollowupReports::DEFAULT_REPORT_CONTENT : $changeEditor);
        $report->setDeletedAt(null);
        $report->setPati($patient);
        $report->setDuration(new \DateTime($dureevalue));
        $report->setCreationDate($reportDate);

        $report->setNoCare($no_care);
        $report->setNoActivities($no_activities);
        $report->setNoIndicators($no_indicateurs);

        if ($changeTypeMeet !== "null") {
            $report->setReportType($changeTypeMeet);
        }

        $report->setIsHightlight(false);
        $report->setReportDate(new \DateTime($changeDate));




        ///////////////partie contact du formulaire de rapport

        if ($contId !== "null") {
            $arrCont_id = [];

            foreach (json_decode($contId) as $value) {
                array_push($arrCont_id, $value->value);
            }
            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));

            foreach ($report->getCont() as $value) {
                $report->removeCont($value);
                // dd($followupGoals->getfogo());
            }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $report->addCont($value);
            }
        }


        // if ($contId !== "null") {
        //     $contact = $doctrine->getRepository(Contacts::class)->find($contId);
        //     $report->addCont($contact);
        // }

        if ($changePlaces !== "null") {
            $places = $doctrine->getRepository(Contacts::class)->find($changePlaces);
            // dd($changePlaces);
            $report->setPlac($places);
        }





        if ($goalsInput !== "null") {
            $arrGoals_id = [];

            foreach (json_decode($goalsInput) as $value) {
                array_push($arrGoals_id, $value->value);
            }
            $changeGoals = $doctrine->getRepository(FollowupGoals::class)->findBy(array("id" => $arrGoals_id));

            foreach ($report->getFogo() as $value) {
                $report->removefogo($value);

                // dd($followupGoals->getfogo());
            }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($changeGoals as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $value->removeFollowupReport($report);
                $value->addFollowupReport($report);

                $report->addfogo($value);
            }
        }

        // dd($report);
        $entityManager = $doctrine->getManager();

        // $entityManager->persist($report);

        $entityManager->flush();
        // dd($report);
        ///////////////partie indicateurs du formulaire de rapport



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
        $goal_id = $request->request->get('changeGoals');
        $contId = $request->request->get('contId');
        $goalsInput = $request->request->get('goalsInput');
        $userId = $request->request->get('userId');
        $patiId = $request->request->get('patiId');
        $description = $request->request->get('description');
        $dureevalue = $request->request->get('dureeValue');

        $followupGoals = $doctrine->getRepository(FollowupReports::class)->find($idRapport);

        if ($dureevalue !== 'null') {
            $followupGoals->setDuration(new \DateTime($dureevalue));
        }

        if ($goal_id !== "null") {
            $arrGoals_id = [];

            foreach (json_decode($goal_id) as $value) {
                array_push($arrGoals_id, $value->value);
            }

            $changeGoals = $doctrine->getRepository(FollowupGoals::class)->findBy(array("id" => $arrGoals_id));

            foreach ($followupGoals->getFogo() as $value) {
                $followupGoals->removefogo($value);
                // dd($followupGoals->getfogo());
            }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($changeGoals as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $followupGoals->addfogo($value);
            }
        }







        // $followupGoals->setCreationDate(new \DateTime($changeDate));
        if ($changeDate !== "null") {
            $followupGoals->setReportDate(new \DateTime($changeDate));
        }


        // $followupGoals->setActivityType($changeGoals);
        // if ($goal_id !== "null") {
        //     $followupGoals->addfogo($changeGoals);
        // }

        if ($contId !== "null") {
            $arrCont_id = [];

            foreach (json_decode($contId) as $value) {
                array_push($arrCont_id, $value->value);
            }
            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));

            foreach ($followupGoals->getCont() as $value) {
                $followupGoals->removeCont($value);
                // dd($followupGoals->getfogo());
            }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $followupGoals->addCont($value);
            }
        }


        $followupGoals->setContent($description);

        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupGoals->getId()
        ]);
    }

    #[Route('/api/updateCallsAndGoals', name: 'app_updateCallsAndGoals')]
    public function updateCallsAndGoals(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $callsFunctionValue = $request->request->get('callsFunctionValue');
        $isCallsPatients = $request->request->get('isCallsPatients');
        $isPriority = $request->request->get('isPriority');
        $contact = $request->request->get('contact');
        $typeValue = $request->request->get('typeValue');
        $description = $request->request->get('description');
        $valueWhatDoinFunction = $request->request->get('valueWhatDoinFunction');
        $patientId = $request->request->get('patientId');
        $userId = $request->request->get('userId');
        $goalsId = $request->request->get('goalsId');
        $valueStatus = $request->request->get('valueStatus');
        $dateCreation = $request->request->get('dateCreation');
        $valueType = $request->request->get('valueType');
        // dd($patientId);


        $followupGoals = $doctrine->getRepository(FollowupGoals::class)->find($goalsId);
        $patients = $doctrine->getRepository(Patients::class)->find($patientId);
        $user = $doctrine->getRepository(Patients::class)->find($userId);
        if ($valueType && $valueType !== "null") {

            // $suggestions = $doctrine->getRepository(Suggestions::class)->find($valueWhatDoinFunction);
            $followupGoals->setTitle($valueType);
        }

        if ($valueWhatDoinFunction && $valueWhatDoinFunction !== "null") {

            $suggestions = $doctrine->getRepository(Suggestions::class)->find($valueWhatDoinFunction);
            $followupGoals->setSugg($suggestions);
        }

        if ($callsFunctionValue && $callsFunctionValue !== "null") {
            $function = $doctrine->getRepository(Suggestions::class)->find($callsFunctionValue);
            $followupGoals->setFunc($function);
        }

        if ($typeValue && $typeValue !== "null") {
            $typeValue = $doctrine->getRepository(Suggestions::class)->find($typeValue);
            $followupGoals->setSugg($typeValue);
        }



        $followupGoals->setPati($patients);

        if ($isCallsPatients === "true") {

            $followupGoals->setType(2);
        }

        if ($isCallsPatients === "false") {
            $cont = $doctrine->getRepository(Contacts::class)->find($contact);

            $followupGoals->setCont($cont);
            $followupGoals->setContact($cont);
            $followupGoals->setType(2);
        }





        // $followupGoals->setUser($user);


        $followupGoals->setCreationDate(new \DateTime($dateCreation));


        if ($isPriority !== "null") {
            $followupGoals->setIsHightlight(($isPriority === "true") ? true : false);
        }

        if ($description !== 'null') {
            $followupGoals->setDescription($description);
        }


        $followupGoals->setStatus($valueStatus);
        // $entityManager->persist($followupGoals);
        // dd($followupGoals);
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
        $dateCall = $request->request->get('dateCall');
        $descriptionCallSortant = $request->request->get('descriptionCallSortant');
        $valueType = $request->request->get('valueType');
        // dd($patientId);

        $followupGoals = new FollowupGoals();
        $patients = $doctrine->getRepository(Patients::class)->find($patientId);
        $user = $doctrine->getRepository(User::class)->find($userId);
        $suggestions = $doctrine->getRepository(Suggestions::class)->find($valueWhatDoinFunction);
        $function = $doctrine->getRepository(Suggestions::class)->find($callsFunctionValue);

        $followupGoals->setPati($patients);
        $followupGoals->setTitle($valueType);
        if ($isCallsPatients === "true") {

            $followupGoals->setType(2);
        }

        if ($isCallsPatients === "false") {
            $cont = $doctrine->getRepository(Contacts::class)->find($contact);

            $followupGoals->setCont($cont);
            $followupGoals->setContact($cont);
            $followupGoals->setType(2);
        }
        $followupGoals->setFunc($function);
        $followupGoals->setSugg($suggestions);

        // $followupGoals->setUser($user);

        if ($dateCall !== "null") {
            $followupGoals->setCreationDate(new \DateTime($dateCall));
        } else {
            $followupGoals->setCreationDate(new \DateTime('now'));
        }

        // $followupGoals->setReportDate(new \DateTime("now"));

        if ($description && $description !== "null") {
            $followupGoals->setDescription($description);
        }


        if ($isCallsPatients === "false" && $descriptionCallSortant && $descriptionCallSortant !== "null") {
            $followupGoals->setStatus(1);
        } else {
            $followupGoals->setStatus(0);
        }

        $entityManager->persist($followupGoals);
        // dd($followupReports);
        $entityManager->flush();

        if ($isCallsPatients === "false" && $descriptionCallSortant && $descriptionCallSortant !== "null") {
            $followupReports = new FollowupReports();
            $followupReports->setContent($descriptionCallSortant);
            $followupReports->setPatient($patients);
            $followupReports->setCreationDate(new \DateTime('now'));
            $followupReports->setLastUpdate(new \DateTime('now'));
            $followupReports->setReportDate(new \DateTime('now'));
            $followupReports->setActivityType(2);
            $followupReports->setUser($user);
            $followupReports->addfogo($followupGoals);

            $entityManager->persist($followupReports);
            // dd($followupReports);
            $entityManager->flush();
        }
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupGoals->getId()
        ]);
    }

    #[Route('/api/setCallsAbsenceByContacts', name: 'app_setCallsAbsenceByContacts')]
    public function setCallsAbsenceByContacts(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $goal = $request->request->get('goal');
        $cont_id = $request->request->get('contact');
        $pati_id = $request->request->get('patientId');
        $user_id = $request->request->get('user_id');

        $cont = $doctrine->getRepository(Contacts::class)->find($cont_id);
        $fogo = $doctrine->getRepository(FollowupGoals::class)->find($goal);
        $pati = $doctrine->getRepository(Patients::class)->find($pati_id);
        $user = $doctrine->getRepository(User::class)->find($user_id);

        $followupReports = new FollowupReports();

        $followupReports->setContent(FollowupReports::DEFAULT_COMMENT_MISSING_ACTION);
        $followupReports->setPati($pati);
        $followupReports->setCreationDate(new \DateTime('now'));
        $followupReports->setLastUpdate(new \DateTime('now'));
        $followupReports->setUser($user);
        $followupReports->addCont($cont);

        $entityManager->persist($followupReports);
        $entityManager->flush();


        $fogo->addFollowupReport($followupReports);
        $entityManager->persist($fogo);
        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupReports->getId()
        ]);
    }

    #[Route('/api/setCallsCanceledByContacts', name: 'app_setCallsCanceledByContacts')]
    public function setCallsCanceledByContacts(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $goal = $request->request->get('goal');
        $cont_id = $request->request->get('contact');
        $pati_id = $request->request->get('patientId');
        $user_id = $request->request->get('user_id');

        $cont = $doctrine->getRepository(Contacts::class)->find($cont_id);
        $fogo = $doctrine->getRepository(FollowupGoals::class)->find($goal);
        $pati = $doctrine->getRepository(Patients::class)->find($pati_id);
        $user = $doctrine->getRepository(User::class)->find($user_id);

        $followupReports = new FollowupReports();

        $followupReports->setContent(FollowupReports::DEFAULT_COMMENT_CANCEL_ACTION);
        $followupReports->setPati($pati);
        $followupReports->setCreationDate(new \DateTime('now'));
        $followupReports->setLastUpdate(new \DateTime('now'));
        $followupReports->setUser($user);
        $followupReports->addCont($cont);

        $entityManager->persist($followupReports);
        $entityManager->flush();

        $fogo->setStatus(4);
        $fogo->addFollowupReport($followupReports);
        $entityManager->persist($fogo);
        $entityManager->flush();
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupReports->getId()
        ]);
    }
    #[Route('/api/setCallsByContactsForFollowUpReports', name: 'app_setCallsByContactsForFollowUpReports')]
    public function setCallsByContactsForFollowUpReports(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $goals = $request->request->get('goals');
        $contacts = $request->request->get('contacts');
        $content = $request->request->get('content');
        $dureevalue = $request->request->get('dureeValue');
        $patientId = $request->request->get('patientId');
        $user_id = $request->request->get('userId');
        // $activity_type = $request->request->get('activity_type');
        $isCompleted = $request->request->get('is_completed');
        $activity_type = $request->request->get('activity_type');
        // dd($dureevalue);
        $patient = $doctrine->getRepository(Patients::class)->find($patientId);


        $user = $doctrine->getRepository(User::class)->find($user_id);
        $followupReports = new FollowupReports();
        $followupGoals = new FollowupGoals();

        $followupReports->setContent($content);
        $followupReports->setCreationDate(new \DateTime('now'));

        $followupReports->setLastUpdate(new \DateTime('now'));
        $followupReports->setPatient($patient);
        $followupReports->setDuration(new \DateTime($dureevalue));
        $followupReports->setUser($user);
        $followupReports->setActivityType($activity_type);




        if ($contacts !== "null") {
            $arrGoals_id = [];

            foreach (json_decode($contacts) as $value) {
                array_push($arrGoals_id, $value);
            }

            $contactsList = $doctrine->getRepository(Contacts::class)->findBy(array('id' => json_decode($contacts)));


            foreach ($contactsList as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);

                $followupReports->addCont($value);
            }
        }

        if ($goals !== "null") {
            $arrGoals_id = [];

            foreach (json_decode($goals) as $value) {
                array_push($arrGoals_id, $value);
            }

            $fogo = $doctrine->getRepository(FollowupGoals::class)->findBy(array('id' => json_decode($goals)));


            foreach ($fogo as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);

                // $followupReports->addfogo($value);
                $value->setStatus(1);
                $value->addFollowupReport($followupReports);
            }
        }


        $entityManager->persist($followupReports);
        $entityManager->flush();


        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupReports->getId()
        ]);
    }
    #[Route('/api/setCallsByContacts', name: 'app_setCallsByContacts')]
    public function setCallsByContacts(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();

        $goals = $request->request->get('goals');
        $contacts = $request->request->get('contacts');
        $content = $request->request->get('content');
        $dureevalue = $request->request->get('dureeValue');
        $patientId = $request->request->get('patientId');
        $user_id = $request->request->get('userId');
        $activity_type = $request->request->get('activity_type');
        $isCompleted = $request->request->get('is_completed');
        // dd($dureevalue);
        $patient = $doctrine->getRepository(Patients::class)->find($patientId);


        $user = $doctrine->getRepository(User::class)->find($user_id);
        $followupReports = new FollowupReports();
        $followupGoals = new FollowupGoals();

        $followupReports->setContent($content);
        $followupReports->setCreationDate(new \DateTime('now'));

        $followupReports->setLastUpdate(new \DateTime('now'));
        $followupReports->setPati($patient);
        $followupReports->setDuration(new \DateTime($dureevalue));
        $followupReports->setUser($user);
        $followupReports->setActivityType($activity_type);

        $contactsList = $doctrine->getRepository(Contacts::class)->findBy(array('id' => json_decode($contacts)));
        $fogo = $doctrine->getRepository(FollowupGoals::class)->findBy(array('id' => json_decode($goals)));
        $entityManager = $doctrine->getManager();
        // dd(
        //     $goals,
        //     $contacts,
        //     $content,
        //     $dureevalue,
        //     $patientId,
        //     $user_id,
        //     $activity_type,
        //     $isCompleted,
        // );




        foreach ($contactsList as  $contItem) {
            foreach ($fogo as  $fogoItem) {

                if ($fogoItem->getContact() && $fogoItem->getContact()->getId() !== $contItem->getId()) {
                    $arr1 = $doctrine->getRepository(FollowupGoals::class)->findBy(['cont' => $contItem->getId(), 'status' => 0, 'pati' => $patientId]);
                    $arr2 = $doctrine->getRepository(FollowupGoals::class)->findBy(['cont' => $contItem->getId(), 'status' => 1, 'pati' => $patientId]);
                    $fogo1 = [...$arr1, ...$arr2];

                    // dd($fogoItem->getContact()->getId());
                    if ($fogo1 === []) {

                        $followupGoals->setDescription($fogoItem->getDescription());
                        $followupGoals->setPati($fogoItem->getPati());
                        $contact = $doctrine->getRepository(Contacts::class)->find($contItem->getId());
                        $followupGoals->setContact($contact);
                        $followupGoals->setStatus($isCompleted); // appel new 
                        $followupGoals->setType(2); //si il est de type appel

                        $followupGoals->addFollowupReport($followupReports);
                        $entityManager->persist($followupGoals);
                        $entityManager->flush();
                    } else {
                        $fogo1[0]->addFollowupReport($followupReports);
                        $fogo1[0]->setStatus($isCompleted);
                        $entityManager->flush();
                    }
                } else {
                    $fogoItem->addFollowupReport($followupReports);
                    $fogoItem->setStatus($isCompleted);
                    $entityManager->flush();
                }
            }
        }
        return new JsonResponse([
            'response' => "Sent !",
            'idAppel' => $followupReports->getId()
        ]);
    }

    #[Route('/api/editIndicatorsCVC', name: 'app_editIndicatorsCVC')]
    public function editIndicatorsCVC(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRepport');
        $idIndicateurs = $request->request->get('idIndicateurs');
        $corpsScore = $request->request->get('corpsScore');
        $vetementsScore = $request->request->get('vetementsScore');
        $comportementScore = $request->request->get('comportementScore');
        $corpsDescription = $request->request->get('corpsDescription');
        $vetementsDescription = $request->request->get('vetementsDescription');
        $comportementDescription = $request->request->get('comportementDescription');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);

        $followupReportsIndi = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(array("id" => json_decode($idIndicateurs)));
        // dd($followupReportsIndi));

        foreach ($followupReportsIndi as $value) {

            $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->find($value->getId());
            $indi = $doctrine->getRepository(Indicators::class)->find($value->getIndi()->getId());
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);


            if ($indi->getName() === "Corps") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($corpsScore);
                if ($corpsDescription !== "null") {
                    $indicators->setComment($corpsDescription);
                }
            }

            if ($indi->getName() === "Vêtements") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($vetementsScore);
                if ($corpsDescription !== "null") {
                    $indicators->setComment($vetementsDescription);
                }
            }

            if ($indi->getName() === "Comportement") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($comportementScore);
                if ($corpsDescription !== "null") {
                    $indicators->setComment($comportementDescription);
                }
            }
            $entityManager->flush();
        }



        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }



    #[Route('/api/addIndicatorsCVC', name: 'app_addIndicatorsCVC')]
    public function addIndicatorsCVC(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRepport');
        $corpsScore = $request->request->get('corpsScore');
        $vetementsScore = $request->request->get('vetementsScore');
        $comportementScore = $request->request->get('comportementScore');
        $corpsDescription = $request->request->get('corpsDescription');
        $vetementsDescription = $request->request->get('vetementsDescription');
        $comportementDescription = $request->request->get('comportementDescription');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);


        if ($corpsScore !== null) {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(1);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($corpsScore);
            if ($corpsDescription !== "undefined") {
                $indicators->setComment($corpsDescription);
            }

            // $entityManager->persist($indicators);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }
        if ($vetementsScore !== null) {

            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(2);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($vetementsScore);

            if ($vetementsDescription !== "undefined") {
                $indicators->setComment($vetementsDescription);
            }

            // $entityManager->persist($indicators);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }
        if ($comportementScore !== null) {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(3);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($comportementScore);

            if ($comportementDescription !== "undefined") {
                $indicators->setComment($comportementDescription);
                // $entityManager->persist($indicators);
            }
            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }


        $indicatorsGroups = $doctrine->getRepository(IndicatorsGroups::class)->find(1);
        $report->addIndicatorsGroup($indicatorsGroups);
        $entityManager->persist($report);
        $entityManager->flush();
        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/deleteRapport', name: 'app_deleteRapport')]
    public function deleteRapport(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $reportId = $request->request->get('idRapport');
        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);
        // $entityManager->remove($activities);
        // $entityManager->flush();

        // $indicators = $doctrine->getRepository(FollowupReportsActivities::class)->find($activities);
        // dd("cul");
        $report->setDeletedAt(new \DateTime('now'));
        $entityManager->flush();


        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
        // formData.append("activity_id", props.activity.id);
        // formData.append("report_id", props.report.id);

    }

    #[Route('/api/deleteActivities', name: 'app_deleteActivities')]
    public function deleteActivities(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('report_id');
        $activities_id = $request->request->get('activity_id');
        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);
        $activities = $doctrine->getRepository(FollowupReportsActivities::class)->find($activities_id);

        // $entityManager->remove($activities);
        // $entityManager->flush();

        // $indicators = $doctrine->getRepository(FollowupReportsActivities::class)->find($activities);
        // dd("cul");
        $report->removeActivity($activities);
        $entityManager->flush();


        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
        // formData.append("activity_id", props.activity.id);
        // formData.append("report_id", props.report.id);

    }

    #[Route('/api/deleteIndicateurs', name: 'app_deleteIndicateurs')]
    public function deleteIndicateurs(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRapport');
        $idIndicateurs = $request->request->get('idIndicateurs');
        $idIndicatorsGroups = $request->request->get('idIndicatorsGroups');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);
        $indicatorsGroups = $doctrine->getRepository(IndicatorsGroups::class)->find($idIndicatorsGroups);

        $report->removeIndicatorsGroup($indicatorsGroups);

        $arrIndi = json_decode($idIndicateurs);


        foreach ($arrIndi as $value) {
            // dd($value);
            $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->find($value);

            $report->removeIndicator($indicators);
        }

        $entityManager->flush();

        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/addIndicatorsHestiaDeces', name: 'app_addIndicatorsHestiaDeces')]
    public function addIndicatorsHestiaDeces(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRepport');

        $valueSecuritee = $request->request->get('valueSecuritee');
        $descriptionSecuritee = $request->request->get('descriptionSecuritee');
        $valueSantee = $request->request->get('valueSantee');
        $descriptionSantee = $request->request->get('descriptionSantee');
        $valueConsommation = $request->request->get('valueConsommation');
        $descriptionConsommation = $request->request->get('descriptionConsommation');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);

        $indicateurs_jsondecode = json_decode($formIndicateurs);
        // dd($indicateurs_jsondecode);





        if ($valueSecuritee !== "undefined") {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(7);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($valueSecuritee);
            $indicators->setComment($descriptionSecuritee);
            // $entityManager->persist($indicators);


            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }

        if ($valueSantee !== "undefined") {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(8);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($valueSantee);
            $indicators->setComment($descriptionSantee);
            // $entityManager->persist($indicators);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }

        if ($valueConsommation !== "undefined") {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(9);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($valueConsommation);
            $indicators->setComment($descriptionConsommation);
            // $entityManager->persist($indicators);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }

        $indicatorsGroups = $doctrine->getRepository(IndicatorsGroups::class)->find(3);
        $report->addIndicatorsGroup($indicatorsGroups);
        $entityManager->persist($report);
        $entityManager->flush();
        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }



    #[Route('/api/addIndicatorsHestiaLogement', name: 'app_addIndicatorsHestiaLogement')]
    public function addIndicatorsHestiaLogement(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRepport');
        $bailleurSelected = $request->request->get('bailleurSelected');
        $descriptionBailleur = $request->request->get('descriptionBailleur');
        $hygieneSelected = $request->request->get('hygieneSelected');
        $descriptionHygiene = $request->request->get('descriptionHygiene');
        $voisinageSelected = $request->request->get('voisinageSelected');
        $descriptionVoisinage = $request->request->get('descriptionVoisinage');

        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);



        if ($bailleurSelected !== null) {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(6);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($bailleurSelected);
            $indicators->setComment($descriptionBailleur);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();


            // dd($indicateurs_jsondecode->indicateursEstLeLogement[0]);
        }

        if ($hygieneSelected !== null) {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(5);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($hygieneSelected);
            $indicators->setComment($descriptionHygiene);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();
        }

        if ($voisinageSelected !== null) {
            $indicators = new FollowupReportsIndicators();
            $indi = $doctrine->getRepository(Indicators::class)->find(4);
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);

            $indicators->setFore($fore);
            $indicators->setIndi($indi);
            $indicators->setValue($voisinageSelected);
            $indicators->setComment($descriptionVoisinage);

            $report->addIndicator($indicators);
            $entityManager->persist($indicators);
            $entityManager->flush();


            // dd($key);

        }

        $indicatorsGroups = $doctrine->getRepository(IndicatorsGroups::class)->find(2);
        $report->addIndicatorsGroup($indicatorsGroups);
        $entityManager->persist($report);
        $entityManager->flush();
        // dd($report->getIndicatorsGroups());

        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/editIndicatorsHestiaLogement', name: 'app_editIndicatorsHestiaLogement')]
    public function editIndicatorsHestiaLogement(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRepport');
        $bailleurSelected = $request->request->get('bailleurSelected');
        $idIndicateurs = $request->request->get('idIndicateurs');
        $descriptionBailleur = $request->request->get('descriptionBailleur');
        $hygieneSelected = $request->request->get('hygieneSelected');
        $descriptionHygiene = $request->request->get('descriptionHygiene');
        $voisinageSelected = $request->request->get('voisinageSelected');
        $descriptionVoisinage = $request->request->get('descriptionVoisinage');


        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);

        $followupReportsIndi = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(array("id" => json_decode($idIndicateurs)));
        // dd($followupReportsIndi));

        foreach ($followupReportsIndi as $value) {

            $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->find($value->getId());
            $indi = $doctrine->getRepository(Indicators::class)->find($value->getIndi()->getId());
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);


            if ($indi->getName() === "Bailleur") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($bailleurSelected);
                if ($descriptionBailleur !== "null") {
                    $indicators->setComment($descriptionBailleur);
                }
            }

            if ($indi->getName() === "Hygiène logement") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($hygieneSelected);
                if ($descriptionHygiene !== "null") {
                    $indicators->setComment($descriptionHygiene);
                }
            }

            if ($indi->getName() === "Voisinage") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($voisinageSelected);
                if ($descriptionVoisinage !== "null") {
                    $indicators->setComment($descriptionVoisinage);
                }
            }
            $entityManager->flush();
        }


        $entityManager->flush();
        // dd($report->getIndicatorsGroups());

        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }

    #[Route('/api/editIndicatorsHestiaDeces', name: 'app_editIndicatorsHestiaDeces')]
    public function editIndicatorsHestiaDeces(ManagerRegistry $doctrine, Request $request)
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formIndicateurs = $request->request->get('formIndicateurs');
        $reportId = $request->request->get('idRepport');

        $idIndicateurs = $request->request->get('idIndicateurs');

        $valueSecuritee = $request->request->get('valueSecuritee');
        $descriptionSecuritee = $request->request->get('descriptionSecuritee');
        $valueSantee = $request->request->get('valueSantee');
        $descriptionSantee = $request->request->get('descriptionSantee');
        $valueConsommation = $request->request->get('valueConsommation');
        $descriptionConsommation = $request->request->get('descriptionConsommation');


        $report = $doctrine->getRepository(FollowupReports::class)->find($reportId);

        $followupReportsIndi = $doctrine->getRepository(FollowupReportsIndicators::class)->findBy(array("id" => json_decode($idIndicateurs)));
        // dd($followupReportsIndi));

        foreach ($followupReportsIndi as $value) {

            $indicators = $doctrine->getRepository(FollowupReportsIndicators::class)->find($value->getId());
            $indi = $doctrine->getRepository(Indicators::class)->find($value->getIndi()->getId());
            $fore = $doctrine->getRepository(FollowupReports::class)->find($reportId);


            if ($indi->getName() === "Sécurité") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($valueSecuritee);
                if ($descriptionSecuritee !== "null") {
                    $indicators->setComment($descriptionSecuritee);
                }
            }

            if ($indi->getName() === "Santé") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($valueSantee);
                if ($descriptionSantee !== "null") {
                    $indicators->setComment($descriptionSantee);
                }
            }

            if ($indi->getName() === "Consommation") {
                $indicators->setFore($fore);
                $indicators->setIndi($indi);
                $indicators->setValue($valueConsommation);
                if ($descriptionConsommation !== "null") {
                    $indicators->setComment($descriptionConsommation);
                }
            }
            $entityManager->flush();
        }


        $entityManager->flush();
        // dd($report->getIndicatorsGroups());

        return new JsonResponse([
            'id' => $report->getId(),
            'response' => "Sent !"
        ]);
    }


    #[Route('/api/addActivitiesToReport', name: 'app_addActivitiesToReport')]
    public function addActivitiesToReport(ManagerRegistry $doctrine, Request $request): JsonResponse
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formSoins = $request->request->get('formActivities');
        // dd($formSoins);

        $idRepport = $request->request->get('idRepport');
        $description = $request->request->get('description');
        $type = $request->request->get('type');
        $place = $request->request->get('place');
        $contact = $request->request->get('contact');


        $report = $doctrine->getRepository(FollowupReports::class)->find($idRepport);

        // dd($report);
        $care_jsondecode = json_decode($formSoins);

        $followUpReportActivities = new FollowupReportsActivities();


        $sugg =  $doctrine->getRepository(Suggestions::class)->find($type);
        $followUpReportActivities->setActivity($sugg);

        $followUpReportActivities->setDescription($description);
        $followUpReportActivities->setIsIdrStep(0);
        $followUpReportActivities->setFollowupReports($report);



        if ($contact !== "null") {
            $arrCont_id = [];
            foreach (json_decode($contact) as $value) {
                array_push($arrCont_id, $value->value);
            }

            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));

            // foreach ($report->getCont() as $value) {
            //     $report->removeCont($value);
            //     // dd($followupGoals->getfogo());
            // }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $followUpReportActivities->addContact($value);
            }
        }

        if ($place !== "null") {
            $arrCont_id = [];
            foreach (json_decode($place) as $value) {
                array_push($arrCont_id, $value->value);
            }

            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));
            // dd($contact);
            // foreach ($report->getCont() as $value) {
            //     $report->removePlac($value);
            //     // dd($followupGoals->getfogo());
            // }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $followUpReportActivities->addPlace($value);
            }
        }


        $report->addActivity($followUpReportActivities);
        // $entityManager->persist($followUpReportActivities);
        $entityManager->flush();



        return new JsonResponse([
            'response' => $followUpReportActivities->getId()
        ]);
    }

    #[Route('/api/editActivitiesToReport', name: 'app_editActivitiesToReport')]
    public function editActivitiesToReport(ManagerRegistry $doctrine, Request $request): JsonResponse
    {

        $entityManager = $doctrine->getManager();
        $request = Request::createFromGlobals();
        $formSoins = $request->request->get('formActivities');
        // dd($formSoins);

        $idRepport = $request->request->get('idRepport');
        $description = $request->request->get('description');
        $type = $request->request->get('type');
        $place = $request->request->get('place');
        $contact = $request->request->get('contact');
        $idActivity = $request->request->get('idActivity');


        $report = $doctrine->getRepository(FollowupReports::class)->find($idRepport);

        // dd($report);
        $care_jsondecode = json_decode($formSoins);

        $followUpReportActivities = $doctrine->getRepository(FollowupReportsActivities::class)->find($idActivity);

        $sugg =  $doctrine->getRepository(Suggestions::class)->find($type);
        $followUpReportActivities->setActivity($sugg);

        $followUpReportActivities->setDescription($description);
        $followUpReportActivities->setIsIdrStep(0);
        $followUpReportActivities->setFollowupReports($report);



        if ($contact !== "null") {
            $arrCont_id = [];
            foreach (json_decode($contact) as $value) {
                array_push($arrCont_id, $value->value);
            }

            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));

            // foreach ($report->getCont() as $value) {
            //     $report->removeCont($value);
            //     // dd($followupGoals->getfogo());
            // }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $followUpReportActivities->addContact($value);
            }
        }

        if ($place !== "null") {
            $arrCont_id = [];
            foreach (json_decode($place) as $value) {
                array_push($arrCont_id, $value->id);
            }

            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));
            // dd($contact);
            // foreach ($report->getCont() as $value) {
            //     $report->removePlac($value);
            //     // dd($followupGoals->getfogo());
            // }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $followUpReportActivities->addPlace($value);
            }
        }


        $report->addActivity($followUpReportActivities);
        // $entityManager->persist($followUpReportActivities);
        $entityManager->flush();



        return new JsonResponse([
            'response' => $followUpReportActivities->getId()
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
        $activityType = $request->request->get('activityType');




        $care_jsondecode = json_decode($formSoins);
        $activities_jsondecode = json_decode($formActivities);
        $indicateurs_jsondecode = json_decode($formIndicateurs);


        $no_care = ($care_jsondecode !== null) ? 0 : 1;
        $no_activities =  ($activities_jsondecode !== null) ? 0 : 1;
        $no_indicateurs =  ($indicateurs_jsondecode !== null) ? 0 : 1;


        $user = $doctrine->getRepository(User::class)->find($userId);
        if ($changeContacts !== "null") {
            $contact = $doctrine->getRepository(Contacts::class)->find($changeContacts);
        } else {
            $contact = null;
        }

        $patient =  $doctrine->getRepository(Patients::class)->find($patiId);
        $plac =  $doctrine->getRepository(Places::class)->find($changePlaces);


        $report = new FollowupReports();

        $report->setUser($user);
        $report->setActivityType($activityType);
        if ($changeDate !== "null") {
            $report->setReportDate($reportDate);
        } else {
            $report->setReportDate(new \DateTime('now'));
        }
        $report->setPlac($contact);
        $report->setLastUpdate($reportDate);

        if ($changeEditor !== "null") {
            $report->setContent($changeEditor);
        } else {
            $report->setContent(FollowupReports::DEFAULT_REPORT_CONTENT);
        }




        $report->setDeletedAt(null);
        $report->setPatient($patient);
        $report->setDuration(null);

        if ($reportDate !== "null") {
            $report->setCreationDate($reportDate);
        } else {
            $report->setCreationDate(new \DateTime('now'));
        }




        $report->setNoCare($no_care);
        $report->setNoActivities($no_activities);
        $report->setNoIndicators($no_indicateurs);

        if ($meetType !== "null") {
            $report->setReportType($meetType);
        }


        $report->setIsHightlight(false);

        if ($changeDate !== "null") {
            $report->setReportDate(new \DateTime($changeDate));
        } else {
            $report->setReportDate(new \DateTime('now'));
        }





        if ($changeContacts !== "null") {
            $arrCont_id = [];
            foreach (json_decode($changeContacts) as $value) {
                array_push($arrCont_id, $value->value);
            }

            $contact = $doctrine->getRepository(Contacts::class)->findBy(array("id" => $arrCont_id));

            foreach ($report->getCont() as $value) {
                $report->removeCont($value);
                // dd($followupGoals->getfogo());
            }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($contact as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $report->addCont($value);
            }
        }





        if ($goalsInput !== "null") {
            $arrGoals_id = [];

            foreach (json_decode($goalsInput) as $value) {
                array_push($arrGoals_id, $value->value);
            }
            $changeGoals = $doctrine->getRepository(FollowupGoals::class)->findBy(array("id" => $arrGoals_id));
            foreach ($report->getFogo() as $value) {
                $report->removefogo($value);

                // dd($followupGoals->getfogo());
            }
            // $arrayCollectionDiff = new FollowupGoals($changeGoals);
            foreach ($changeGoals as $value) {
                // $arrayCollectionDiff = new FollowupGoals($value);
                $value->removeFollowupReport($report);
                $value->addFollowupReport($report);

                $report->addfogo($value);
            }
        }

        if ($changePlaces !== "null") {
            $places = $doctrine->getRepository(Contacts::class)->find($changePlaces);
            $report->setPlac($places);
        }




        $entityManager = $doctrine->getManager();

        $entityManager->persist($report);

        $entityManager->flush();

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
        // $timeend = strtotime($end);
        // $dateend = new \DateTime('@' . strtotime($end));
        foreach ($indicators as $value) {
            // dd($value);
            // foreach ($value->getFore() as $indi) {

            array_push($fore, ["indi" => [
                "id" => $value->getIndi()->getId(),
                "name" => $value->getIndi()->getName(),
                "description" => $value->getIndi()->getDescription()
            ], "value" => $value->getValue(), "comment" => $value->getComment(), "fore" => ["reportDate" => date('c', strtotime($value->getFore()->getReportDate()->format('Y-m-d')))]]);
            // }
        }

        // dd($fore);

        // $encoders = [new JsonEncoder()];
        // $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        // $serializer = new Serializer($normalizers, $encoders);

        // // $serializer = SerializerBuilder::create()->build();
        // $jsonObject = $serializer->serialize($fore, 'json', [
        //     AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
        //         return $object->getId();
        //     },
        //     AbstractNormalizer::IGNORED_ATTRIBUTES => ["pati", "sugg", "user", "informations", "fore"]
        // ]);


        // $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);



        // $response->setSharedMaxAge(3600);
        return new Response(json_encode($fore), 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);


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
            // dd($value);
            if ($value) {
                $arrPatientsByContacts[] = [
                    "id" => $value->getId(),
                    "start" => $value->getStart(),
                    "end" => $value->getEnd(),
                    "comment" => ($value->getComment() !== "null") ? $value->getComment() : null,
                    "cont" => [($value->getCont()) ? $value->getCont() : null],
                    "pati" => [$value->getPati()],
                    "sugg" => [$value->getSugg()],
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

    #[Route('/api/getFollowUpReportsCallsForSelect', name: 'app_getFollowUpReportsCallsForSelect')]
    public function getFollowUpReportsCallsForSelect(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $goals = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);

        $goalsArr = [];

        // dd($goals);
        foreach ($goals as $value) {
            // dd($value);
            if ($value->getDeletedAt() === null && $value->getType() === 2 && ($value->getStatus() === 1 || $value->getStatus() === 2)) {
                $goalsArr[] = [
                    "value" => $value->getId(),
                    "label" => $value->getDescription(),

                ];
            }
        }

        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($goalsArr, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'cont', 'contact', 'func', 'sugg']
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        return $response;
    }

    #[Route('/api/getFollowUpReportsGoalsForSelectForCalls', name: 'app_getFollowUpReportsGoalsForSelectForCalls')]
    public function getFollowUpReportsGoalsForSelectForCalls(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $goals = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);

        $goalsArr = [];

        // dd($goals);
        foreach ($goals as $value) {
            // dd($value);
            if ($value->getDeletedAt() === null && $value->getType() === 2 && ($value->getStatus() === 0 || $value->getStatus() === 1)) {
                $goalsArr[] = [
                    "value" => $value->getId(),
                    "label" => $value->getCreationDate()->format('d/m/Y') . " " . (($value->getFunc() && $value->getFunc()->getValue()) ? $value->getFunc()->getValue() : null) . " " . (($value->getDescription()) ? $value->getDescription() : null),

                ];
            }
        }

        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($goalsArr, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'cont', 'contact', 'func', 'sugg']
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        return $response;
    }
    #[Route('/api/getFollowUpReportsGoalsForSelect', name: 'app_getFollowUpReportsGoalsForSelect')]
    public function getFollowUpReportsGoalsForSelect(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $goals = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id]);

        $goalsArr = [];

        // dd($goals);
        foreach ($goals as $value) {
            // dd($value);
            if ($value->getDeletedAt() === null && $value->getType() === 1 && ($value->getStatus() === 0 || $value->getStatus() === 1)) {
                $goalsArr[] = [
                    "value" => $value->getId(),
                    "label" => $value->getCreationDate()->format('d/m/Y') . " " . (($value->getSugg() && $value->getSugg()->getValue()) ? $value->getSugg()->getValue() : null) . " " . (($value->getTitle()) ? $value->getTitle() : null),

                ];
            }
        }

        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();
        $jsonObject = $serializer->serialize($goalsArr, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'cont', 'contact', 'func', 'sugg']
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        return $response;
    }


    #[Route('/api/getFollowUpReportsGoals', name: 'app_FollowUpReportsGoals')]
    public function getGoals(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupGoals::class)->findBy(["pati" => $id, "deleted_at" => null]);
        // $places = $doctrine->getRepository(FollowupGoals::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new DateTimeNormalizer(), new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        // $serializer = SerializerBuilder::create()->build();

        $jsonObject = $serializer->serialize($places, 'json', [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },

            AbstractNormalizer::IGNORED_ATTRIBUTES => ['pati', 'contact', 'fore', 'orga', 'parentSugg', 'followupReportsIndicators', "followupReportsActivities", "followupReportsGoals", "followupReportsCare", "patients", "informations", "calls", 'contacts', 'contact', 'goalsInformation', 'followupInformation']
        ]);

        $response = new Response($jsonObject, 200, ['Content-Type' => 'application/json', 'datetime_format' => 'Y-m-d']);
        return $response;
    }

    #[Route('/api/getActivitiesReports', name: 'app_FollowUpReportsActivities')]
    public function getActivitiesReport(ManagerRegistry $doctrine): Response
    {
        $request = Request::createFromGlobals();

        $id = $request->request->get('id');

        $places = $doctrine->getRepository(FollowupReportsActivities::class)->find(13309);

        return $this->json($places->getContacts());
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
