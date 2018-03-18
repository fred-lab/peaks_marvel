<?php
/**
 * Created by IntelliJ IDEA.
 * User: fred
 * Date: 18/03/18
 * Time: 16:10
 */

namespace App\Services;


interface FetchApiDataInterface
{
    /**
     * Fetch Data from an API endpoint
     * @return mixed
     */
    public function getData();
}