<?php

use function MongoDB\BSON\toJSON;

require 'vendor/autoload.php'; // ovo ucitava i sve ektenzije dodate u php
header('Access-Control-Allow-Origin: http://localhost:3000');
header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Max-Age: 86400');
header('Content-type:text/javascript');
header( "Content-type: application/json" );

$client = new MongoDB\Client; // Povezujemo se sa celim klijenom koji je upaljen 
$hotelDb = $client->hotel_app;
$tHotels = $hotelDb->Hotels;

function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}
if ($_SERVER['REQUEST_METHOD'] == "GET")
{
    $arr_data = [];
    $cursor = $tHotels->find();
    foreach($cursor as $doc)
    {
        if($doc->admin==$_GET['admin'])
        {
        $h=utf8_encode($doc['hotelName']);
        $c=utf8_encode($doc['cityName']);
        $s=utf8_encode($doc['noStars']);
        $n=utf8_encode($doc['streetAndNumber']);
        $d=utf8_encode($doc['hotelDescription']);
        
        $list[] = array(utf8_encode('hotelName') => $h, utf8_encode('cityName') => $c,utf8_encode('noStars')=>$s,
        utf8_encode('streetAndNumber')=>$n,utf8_encode('hotelDescription')=>$d);
        array_push($arr_data,$list[0]);
        unset($list);
        }
    }
    
    echo json_encode($arr_data);
}

if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    //echo 'post je pozvan!';
    //sanitize data i ostalo
    $data = json_decode(file_get_contents('php://input'), true);

    $check=$tHotels->findOne(array('streetAndNumber'=>$data['streetAndNumber'],'cityName' => $data['cityName']));
    if($check==null)
    {
     $result = $tHotels->insertOne(['hotelName' => $data['hotelName'],'cityName' => $data['cityName'],'noStars' => $data['noStars'],
        'streetAndNumber' => $data['streetAndNumber'],'hotelDescription'=>$data['hotelDescription'],'admin'=>$data['admin']]);
    }
    else
    {
        $arrRes=[];
        array_push($arrRes,['message'=>"Hotel on that StreetAndNumber alrady exists"]);
        echo json_encode($arrRes);
    }
    
    
}

else if($_SERVER['REQUEST_METHOD'] == "PUT")
{

    $updateResultHotel = $tHotels->updateOne(
        [ 'streetAndNumber' => $_GET['oldStreet'] ], //where
        [ '$set' =>['hotelName'=>$_GET['hotelName'],'cityName'=>$_GET['cityName'],
        'noStars'=>$_GET['noStars'],'streetAndNumber'=>$_GET['streetAndNumber']
        ]] //this data 
    );
    if($updateResultHotel->getModifiedCount()!=0 && $_GET['oldStreet'] != $_GET['streetAndNumber']) // ako je uspeo da update hotel onda ce i sobe da proba
    {
        $tRooms = $hotelDb->Rooms;
        $updateResultRooms = $tRooms->updateMany(
            ['streetAndNumber' => $_GET['oldStreet']],
            ['$set' => ['streetAndNumber' => $_GET['streetAndNumber']]]
        );

        $tEmployees = $hotelDb->Employees;
        $updateResultEmployee = $tEmployees->updateMany(
            ['hotelStreetAndNumber' => $_GET['oldStreet']],
            ['$set' => ['hotelStreetAndNumber' => $_GET['streetAndNumber']]]
        );
    }
    

}

else if($_SERVER['REQUEST_METHOD'] == "DELETE") //novo 
{
    $data = json_decode(file_get_contents('php://input'), true);

    $tEmp = $hotelDb->Employees;
    $tGuests = $hotelDb->Guests;
    $tRooms = $hotelDb->Rooms;

    $tHotels->deleteOne([
        "admin" => $_GET['admin'],
        "streetAndNumber" => $_GET['hotelStreetAndNumber']
    ]);
    //nadji empove i u guest preko username-a

    $tEmp->deleteMany([
        'hotelStreetAndNumber' => $_GET['hotelStreetAndNumber']
    ]);

    $tGuests->deleteMany([
        'hotelStreetAndNumber' => $_GET['hotelStreetAndNumber']
    ]);

    $tRooms->deleteMany([
        'streetAndNumber' => $_GET['hotelStreetAndNumber']
    ]);
}

 ?>