<?php

namespace App\Controller;


use App\Services\FetchApiDataInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ApiController extends Controller
{
    /**
     * @Route("/api/marvel/characters", name="api_marvel_characters")
     * @param FetchApiDataInterface $marvelData
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function index(FetchApiDataInterface $marvelData)
    {
        return $this->json($marvelData->getData());
    }
}
