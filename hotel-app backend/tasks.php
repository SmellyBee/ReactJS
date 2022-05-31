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
$tGuests = $hotelDb->Guests;

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $data = json_decode(file_get_contents('php://input'),true);

    $isEmp = $tEmp->findOne(['username'=>$_GET['username']]);
    if($isEmp != null)
    {
    $arr=[];

    foreach($isEmp['tasks'] as $task)
    {
        $el = [];
        $el['task'] = $task;
        array_push($arr,$el);
    }

    echo json_encode($arr);
    }
    else
    echo("Erroor");
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
    $isEmp = $tEmp->findOne(['username'=>$_GET['username']]);

    foreach($isEmp['tasks'] as $task)
    {
        if($task == $_GET['task'])
        {
          $updateResultEmployee = $tEmp->updateOne(
          [ 'username' => $isEmp->username ], //where
          [ '$pull' =>[ "tasks"=>$task ]]);

          echo http_response_code(201);
        }
    }

}  


?>        