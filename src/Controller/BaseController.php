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
     * @Route("/profil-lieux/{id}", name="subdomain-profil-lieux")
     */
    public function subdomainLieux()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/profil-contact/{id}", name="subdomain-profil-contact")
     */
    public function subdomainContact()
    {
        return $this->render('default/index.html.twig');
    }
}
