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
$tEmployee = $hotelDb->Employees;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $data = json_decode(file_get_contents('php://input'), true);

    $isUser =$tGuest->findOne(['username' =>$data['username']]);

    $arr = [];

    if($isUser != null)
    {
        if(new DateTime($isUser['startDate']) <= new DateTime('now') && 
        new DateTime($isUser['endDate']) >= new DateTime('now'))
        {
            $isEmployee = $tEmployee->find(['workspace'=>'Cistac','hotelStreetAndNumber'=>$isUser['hotelStreetAndNumber']]);
            foreach($isEmployee as $doc)
            {
                if(strtotime($doc['workingTimeStart']) <= strtotime($data['time']) && 
                strtotime($doc['workingTimeEnd']) >= strtotime($data['time']))
                {
                    array_push($arr,$doc);
                }
            }
            $task='Ocisti Sobu '.$isUser['roomNumber'] .' U sati: '.$data['time'];
            $random = rand(0, count($arr) - 1);

            $updateResultEmployee = $tEmployee->updateOne(
                [ 'username' => $arr[$random]->username ,'hotelStreetAndNumber' => $arr[$random]->hotelStreetAndNumber], //where
                [ '$push' =>[ "tasks"=>$task ]]);

                echo http_response_code(202);
        }
        else
        {
            echo http_response_code(201);
        }
    }
    else
    {
        echo "Username not found / Your not loged in";
    }
}
?>