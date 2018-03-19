<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @Route("/{vue}", name="api_redirect", requirements={"vue" = "[\/\w\.-]*"})
     */
    public function redirectToHomepage()
    {
        return $this->redirectToRoute('home');
    }
}
