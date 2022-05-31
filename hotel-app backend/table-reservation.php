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
$hotelDb = $client->hotel_app;
$tGuest = $hotelDb->Guests;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $data = json_decode(file_get_contents('php://input'), true);

    $isReserved =$tGuest->findOne(['username' =>$_GET['username']]);

    if($isReserved != null)
    {
        if(new DateTime($isReserved['startDate']) <= new DateTime('now') && 
        new DateTime($isReserved['endDate']) >= new DateTime('now'))
        {
            echo json_encode('Ocisti Sobu'.$isReserved['roomNumber'] .'U sati:'.$_GET['time']);
        }
        else
        {
            echo json_encode('Nije u opsegu');
        }
    }
    else
    {
        echo "Username not found / Your not loged in";
    }
}
?>