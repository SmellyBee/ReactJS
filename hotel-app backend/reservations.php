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
$tGuest = $hotelDb->Guests;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $data = json_decode(file_get_contents('php://input'), true);

    if(new DateTime($data['firstDP'])<new DateTime($data['secondDP']))
    {

        $isReserved =$tGuest->find(['roomNumber' =>$data['roomNumber'],'hotelStreetAndNumber'=>$data['hotelStreetAndNumber']]);
    
        $check=0;

        if($isReserved != null)
        {
            foreach($isReserved as $doc)
            {
                $check=0;

                if(new DateTime($doc['startDate'])<= new DateTime($data['firstDP']) && 
                   new DateTime($doc['endDate']) >= new DateTime($data['firstDP']))
                {
                    $check++;
                    echo http_response_code(203);
                    break;    
                }
                if(new DateTime($doc['startDate'])> new DateTime($data['firstDP']) && 
                   new DateTime($doc['startDate']) <= new DateTime($data['secondDP']))
                {
                    $check++;
                    echo http_response_code(203);
                    break;    
                }
            }
        }
        if($check==0)
        {
                $updateResultGuest = $tGuest->updateOne(
                [ 'username' => $data['username'] ], //where
                [ '$set' =>['startDate'=>$data['firstDP'],'endDate'=>$data['secondDP'],
                'roomNumber' =>$data['roomNumber'],'hotelStreetAndNumber'=>$data['hotelStreetAndNumber']
                ]] //this data 
            );
            echo http_response_code(202);
        } 
    }
    else
    {
        echo http_response_code(201);
    }
}
?>
