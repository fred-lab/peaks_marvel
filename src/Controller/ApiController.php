<?php

namespace App\Controller;


use App\Services\FetchApiDataInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ApiController extends Controller
{
    /**
     * @Route("/api/marvel", name="api_marvel")
     * @param FetchApiDataInterface $marvelData
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(FetchApiDataInterface $marvelData)
    {
        return $this->json($marvelData->getData());
    }
}
