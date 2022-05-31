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
$tGuests = $hotelDb->Guests;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    $data = json_decode(file_get_contents('php://input'), true);

    $check=$tEmp->findOne(array('username'=>$data['username']));
    if($check==null)
    {

        $timestamp = strtotime($data['workingTimeStart']) + 480*60;

        $time = date('H:i', $timestamp);


        $result = $tEmp->insertOne(['name' => $data['name'],'lastName'=>$data['lastName'],'workspace' => $data['workspace'],
        'workingTimeStart'=>$data['workingTimeStart'],'workingTimeEnd'=>$time,'username'=>$data['username'],
        'password'=>$data['password'],'hotelStreetAndNumber' => $data['hotelStreetAndNumber'],'tasks'=>[]]);

        $p = password_hash($data['password'],PASSWORD_DEFAULT);

        $result2 = $tGuests->insertOne(['username'=>$data['username'],'password'=>$p,'status'=>'employee',
        'hotelStreetAndNumber' => $data['hotelStreetAndNumber']]);
    }
    else
    {
        echo http_response_code(201);
    }

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
        $el['workingTimeStart'] = $doc->workingTimeStart;
        $el['username']= $doc->username;
        $el['password']= $doc->password;
        $el['hotelStreetAndNumber'] = $doc->hotelStreetAndNumber;

        array_push($arr_data,$el);
    }
    echo(json_encode($arr_data));
}

else if ($_SERVER['REQUEST_METHOD'] == "DELETE") //  Ovde je sve novo 
{
    $data = json_decode(file_get_contents('php://input'), true);


        $result = $tEmp->deleteOne([
            "username" => $_GET['username'],
            "hotelStreetAndNumber" => $_GET['hotelStreetAndNumber']
        ]);
        $tGuests->deleteOne([
            "username" => $_GET['username'],
            "status" => "employee"
        ]);
        
}


?>