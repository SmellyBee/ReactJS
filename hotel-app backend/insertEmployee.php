<?php

require 'vendor/autoload.php'; // ovo ucitava i sve ektenzije dodate u php

$client = new MongoDB\Client; // Povezujemo se sa celim klijenom koji je upaljen 
$hotelDb = $client->hotel24h; //$$$ Ovo ovde zavisi kako ti se zove baza u mongo  
$tEmp = $hotelDb->Employees;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    //$$sanitize data i ostalo
    $data = json_decode(file_get_contents('php://input'), true);
    //print_r($data);
    $found = $tEmp->findOne(['hotelStreetAndNumber' => $data['hotelStreetAndNumber'],
    'username' => $data['username']]);
    //print_r($found);
    if(!isset($found)) // ako vec ne postoji taj emp u bazi
        $result = $tEmp->insertOne(['name' => $data['name'],'workspace' => $data['workspace'],'hotelStreetAndNumber' => $data['hotelStreetAndNumber'],
        'username' => $data['username']]);
    if(isset($result))
        print_r('sucess');
    else
        print_r('Fail');
}