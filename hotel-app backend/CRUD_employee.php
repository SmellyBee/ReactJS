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

if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    $data = json_decode(file_get_contents('php://input'), true);
  
        $result = $tEmp->insertOne(['name' => $data['name'],'lastName'=>$data['lastName'],'workspace' => $data['workspace'],'hotelStreetAndNumber' => $data['hotelStreetAndNumber']]);

}

if ($_SERVER['REQUEST_METHOD'] == "GET")
{
    $arr_data = [];

    $EmployeeList = $tEmp->find(
        ['hotelStreetAndNumber' => $_GET['hotelStreetAndNumber']]
    );
    foreach($EmployeeList as $doc)
    {
        $el = [];
        $el['name'] = $doc->name;
        $el['workspace'] = $doc->workspace;
        $el['lastName'] = $doc->lastName;
        $el['hotelStreetAndNumber'] = $doc->hotelStreetAndNumber;
        array_push($arr_data,$el);
    }
    echo(json_encode($arr_data));
}

?>