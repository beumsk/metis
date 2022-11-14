<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{
    /**
     * @Route("/appels-organisation/{id}", name="subdomain-appels-organisation")
     */
    public function subdomain()
    {
        return $this->render('default/index.html.twig');
    }
}
