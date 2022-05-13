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
$tGuests = $hotelDb->Guests;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    //$$sanitize data i ostalo
    $data = json_decode(file_get_contents('php://input'), true);



    
    $guestFromDb = $tGuests->findOne([
        "username" => $data['username']
    ]);
    if($guestFromDb != null)
    {
        echo json_encode('Korisnik vec postoji');
        return;
    }
    else
    {

    $p = $data['password'];
    $data['password'] = password_hash($data['password'],PASSWORD_DEFAULT);


    $result = $tGuests->insertOne(['username' => $data['username'],'password' => $data['password'],'firstName' => $data['firstName'],
    'lastName' => $data['lastName'],'email' => $data['email'],'zipCode' => $data['zipCode'],
    'isReserved' => 0,'isHere' => 0,'startDate' => null,'endDate' => null,
    'hotelStreetAndNumber' => null]);
    echo('Upisano u bazu');
    }
    
}
