<?php

require 'vendor/autoload.php'; // ovo ucitava i sve ektenzije dodate u php
header('Access-Control-Allow-Origin: http://localhost:3000');
header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Max-Age: 86400');
header('Content-type:text/javascript');
header( "Content-type: application/json" );

$client = new MongoDB\Client; // Povezujemo se sa celim klijenom koji je upaljen 
$hotelDb = $client->hotel_app; //$$$ Ovo ovde zavisi kako ti se zove baza u mongo  
$tEmp = $hotelDb->Employees;
$tHotels = $hotelDb->Hotels;

    $data = json_decode(file_get_contents('php://input'),true);

    $updateResultEmployee = $tEmp->updateOne(
        [ 'username' => $data['oldusername'] ], //where
        [ '$set' =>['name' => $data['name'],'lastName'=>$data['lastName'],'workspace' => $data['workspace'],
        'workingTimeStart'=>$data['workingTimeStart'] ,'username'=>$data['username'],'password'=>$data['password']
        ,'hotelStreetAndNumber' => $data['hotelStreetAndNumber']
        ]]);
    