<?php

require 'vendor/autoload.php'; // ovo ucitava i sve ektenzije dodate u php
header('Access-Control-Allow-Origin: http://localhost:3000');
header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Max-Age: 86400');
header( "Content-type: application/json" );

$client = new MongoDB\Client; 
$hotelDb = $client->hotel_app;
$tHotels = $hotelDb->Hotels;


//insert data to collection
if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    //echo 'post je pozvan!';
    //sanitize data i ostalo
    $data = json_decode(file_get_contents('php://input'), true);

    
    $result = $tHotels->insertOne(['hotelName' => $data['hotelName'],'cityName' => $data['cityName'],'noStars' => $data['noStars'],
    'streetAndNumber' => $data['streetAndNumber']]);
    
}
else if ($_SERVER['REQUEST_METHOD'] == "GET")
{
   /* $arr_data = [];
    $cursor = $tHotels->find();
    foreach($cursor as $doc)
    {
        $el = [];
        array_push($el,$doc['hotelName'],$doc['cityName'],$doc['noStars'],$doc['streetAndNumber']);
        array_push($arr_data,$doc);
    }*/
    $arr_data = [];
    $cursor = $tHotels->find();
    foreach($cursor as $doc)
    {
        $h=$doc['hotelName'];
        $c=$doc['cityName'];
        $s=$doc['noStars'];
        $n=$doc['streetAndNumber'];
        
        $list[] = array('hotelName' => $h, 'cityName' => $c,'noStars'=>$s,'streetAndNumber'=>$n);
        array_push($arr_data,$list[0]);
    }
    return json_encode(;
}

 ?>