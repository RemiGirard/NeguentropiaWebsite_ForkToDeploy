<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signmanifest";

try {
    $bdd = new PDO("mysql:host=$servername;dbname=signmanifest", $username, $password);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
} catch(PDOException $e) {
    echo "Erreur : ".$e->getMessage();
}