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

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
//$$sanitize data i ostalo
$data = json_decode(file_get_contents('php://input'), true);
$guestFromDb = $tGuests->findOne([
    "username" => $_GET['username']
]);

if($guestFromDb == null)
{
    print_r('Username does not exist');
    return;
}
if(password_verify($_GET['password'],$guestFromDb->password))
echo json_encode(["username" => $_GET['username'] , "message" => "Succesful"]);
else  echo json_encode(["username" =>"Incorrect Login", "message" => "Something went wrong"]);

}