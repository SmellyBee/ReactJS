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
$tRooms = $hotelDb->Rooms;



//insert data to collection
if($_SERVER['REQUEST_METHOD'] == 'POST')
{     
    $data = json_decode(file_get_contents('php://input'), true);
    //$$sanitize data i ostalo za sve
    //$$proveri da li vec ta soba postoji 
    $result = $tRooms->insertOne(['roomCapacity' => $data['roomCapacity'],'roomNumber' => $data['roomNumber'],'costPerDay' => $data['costPerDay'],
        'picture1' => $data['picture1'],'picture2' => $data['picture2'],'picture3' => $data['picture3'],'picture4' => $data['picture4'],
        'streetAndNumber' => $data['hotelStreetAndNumber'],'status' => $data['status']]);
        print_r('upisano u bazu');
}
else if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if(isset($_GET['hotelStreetAndNumber']))// ovo znaci ako je poslato u get hotelStreetAndNumber
    {
        $roomList = $tRooms->find(
            ['streetAndNumber' => $_GET['hotelStreetAndNumber']]
        );
        $arr_data = [];
        foreach($roomList as $room)
        {
            $el = [];
            $el['roomCapacity'] = $room->roomCapacity;
            $el['roomNumber'] = $room->roomNumber;
            $el['costPerDay'] = $room->costPerDay;
            $el['picture1'] = $room->picture1;
            $el['picture2'] = $room->picture2;
            $el['picture3'] = $room->picture3;
            $el['picture4'] = $room->picture4;
            $el['streetAndNumber'] = $room->streetAndNumber;
            $el['status'] = $room->status;

            array_push($arr_data,$el);
        }
        echo(json_encode($arr_data)); // vraca sav data kodiran u json fromat
    }
}

else if($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $result=$tRooms->updateMany(
        ['streetAndNumber'=>$_GET['currHotelsan'],'roomNumber'=>$_GET['currRoomNumber']],
        ['$set'=>['costPerDay'=>$_GET['costPerDay'] , 'status'=>$_GET['status'],
         'roomCapacity'=>$_GET['roomCapacity'],'roomNumber'=>$_GET['roomNumber'],
         'picture1'=>$_GET['picture1'],'picture2'=>$_GET['picture2'],'picture3'=>$_GET['picture3'],
         'picture4'=>$_GET['picture4'],'streetAndNumber'=>$_GET['streetAndNumber']
        ]]
    );
             
    
}

?>