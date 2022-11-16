<?php

namespace App\Controller;


use App\Bpost\Bpost_Address_Validation;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class BaseController extends AbstractController
{

    /**
     * @Route("/appels-organisation/{id}", name="subdomain-appels-organisation")
     */
    public function subdomain()
    {
        return $this->render('default/index.html.twig');
    }



    /**
     * @Route("/api/adress", name="subdomain-appels-organisation")
     */
    public function adress(): Response
    {
        $bpost = new Bpost_Address_Validation();

        // Find relevant address according to input
        /* Option 1: Structured */
        // $bpost->getAddress_Structured("Rue de la loix", "15", null, 1000, "Bruxelles");
        /* Option 2: Unstructured */
        $bpost->getAddress_Unstructured("Parc du Botanique - 1210 St-Josse");

        // get array with validated address
        // dd($bpost);
        $result = $bpost->getStructuredAddress();
        dd($bpost);
        // print_r($result);
        /*getAddress_Unstructured
        ArraygetAddress_Structured
        (
            [StreetName] => Rue De La Loi
            [StreetNumber] => 15
            [BoxNumber] => 
            [PostalCode] => 1040
            [MunicipalityName] => Bruxelles
            [CountryName] => Belgique
        )
        */

        // get array with latitude/longitude
        // $result = $bpost->getGeographicalLocation();
        return $this->json($result);
    }
}
