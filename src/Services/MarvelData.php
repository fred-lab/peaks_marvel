<?php
/**
 * Created by IntelliJ IDEA.
 * User: fred
 * Date: 18/03/18
 * Time: 15:46
 */

namespace App\Services;
use PhpParser\Node\Expr\Cast\Object_;

/**
 * Fetch Data from Marvel's API
 *
 * Class MarvelData
 * @package App\Services
 */
class MarvelData implements FetchApiDataInterface
{
    /**
     * @var string
     */
    private $url;
    /**
     * @var string
     */
    private $endpoint;
    /**
     * @var string
     */
    private $limit;
    /**
     * @var string
     */
    private $offset;
    /**
     * @var string
     */
    private $publicKey;
    /**
     * @var string
     */
    private $privateKey;
    /**
     * @var string
     */
    private $timestamp;


    /**
     * MarvelData constructor.
     * @param string $url
     * @param string $endpoint
     * @param string $limit
     * @param string $offset
     * @param string $publicKey
     * @param string $privateKey
     */
    public function __construct(string $url, string $endpoint, string $limit = null , string $offset = null, string $publicKey, string $privateKey)
    {
        $this->url = $url;
        $this->endpoint = $endpoint;
        $this->limit = $limit;
        $this->offset = $offset;
        $this->publicKey = $publicKey;
        $this->privateKey = $privateKey;
        $this->timestamp = time();
    }

    /**
     * Get character's data from the Marvel API
     *
     * @return array
     */
    public function getData() : array
    {
        $hash = md5($this->timestamp . $this->privateKey . $this->publicKey);

        $url = $this->url . $this->endpoint;
        $url .= isset($this->limit) ? '?limit=' . $this->limit :'';
        $url .= isset($this->offset) ? '&offset=' . $this->offset : '';
        $url .= '&apikey=' . $this->publicKey . '&ts=' . $this->timestamp . '&hash=' . $hash;

        $response = json_decode(file_get_contents($url));

        return $response->data->results;
    }

}