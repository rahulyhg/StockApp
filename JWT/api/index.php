<?php
  require_once('functions.php');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: *');
  header('Content-Type: application/json');
  $api = new Api;
  $api->processApi();
?>
