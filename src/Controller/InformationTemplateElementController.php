<?php

namespace App\Controller;

use App\Entity\InformationTemplateElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Proxies\__CG__\App\Entity\InformationTemplateBlock;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\BrowserKit\Request;


class InformationTemplateElementController extends AbstractController
{
    #[Route('/information/template/element', name: 'app_information_template_element')]
    public function index(ManagerRegistry $doctrine): Response
    {

        $informationTemplateBlock = $doctrine->getRepository(InformationTemplateBlock::class)->findElementBlock();
        // $test = [];
        // foreach ($informationTemplateBlock as $key) {
        //     $test[] = $key["sugb"]->getId();
        // }

        // dd($test);


        return $this->json($informationTemplateBlock);
    }
}
