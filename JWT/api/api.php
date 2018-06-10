<?php

  use JWT\JWT;

  class Api extends Rest {

    public $dbConn;
    //public $jwtEncode;

    public function __construct() {
      parent::__construct();
      $db = new DbConnect;
      //$jwt = new JWT;
      $this->dbConn = $db->connect();
      //$this->jwtEncode = $jwtEncode;
    }

    public function generateToken() {

      $sql = "SELECT * FROM users WHERE UserID = :username AND Password = :password";

      $username = $this->validateParameter('username', $this->param['username'], STRING);
      $password = $this->validateParameter('password', $this->param['password'], STRING);

      //echo $email;
      try {
        $stmt = $this->dbConn->prepare($sql);
        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":password", $password);
        $stmt->execute();

        $userData = $stmt->fetch(PDO::FETCH_ASSOC);

        //print_r($data);

        if(!is_array($userData)){
          $this->returnResponse(INVALID_USER_PASS, "Username or Password is incorrect.");
        }

        // if($user['active'] == 0) {
        //   $this->returnResponse(USER_NOT_ACTIVE, "Use is not activated. Please contact to admin");
        // }

        $paylod = [
          'iat' => time(),
          'iss' => 'localhost',
          'exp' => time() + (60),
          'userID' => $userData['UserID']
        ];

        $token = JWT::encode($paylod, SECRETE_KEY);
        $data = ['token' => $token];
        $this->returnResponse(SUCCESS_RESPONSE, $data);

        //echo $data;
      } catch (Exception $e) {
        $this->throwError(JWT_PROCESSING_ERROR, $e->getMessage());
      }
    }
  }
?>
