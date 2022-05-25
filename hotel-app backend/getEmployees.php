<?php

require 'vendor/autoload.php'; // ovo ucitava i sve ektenzije dodate u php

$client = new MongoDB\Client; // Povezujemo se sa celim klijenom koji je upaljen 
$hotelDb = $client->hotel24h; //$$$ Ovo ovde zavisi kako ti se zove baza u mongo  
$tEmp = $hotelDb->Employees;

if ($_SERVER['REQUEST_METHOD'] == "GET")
{
    $arr_data = [];
    $cursor = $tEmp->find();
    foreach($cursor as $doc)
    {
        $el = [];
        $el['name'] = $doc->name;
        $el['workspace'] = $doc->workspace;
        $el['hotelStreetAndNumber'] = $doc->hotelStreetAndNumber;
        array_push($arr_data,$el);
    }
    print_r(json_encode($arr_data));
}
