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

      $sql = "SELECT * FROM users WHERE Email = :username AND Password = :password";

      $username = $this->validateParameter('username', $this->param['email'], STRING);
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
        $data = ['token' => $token, 'fullname' => $userData['FullName']];
        $this->returnResponse(SUCCESS_RESPONSE, $data);

        //echo $data;
      } catch (Exception $e) {
        $this->throwError(JWT_PROCESSING_ERROR, $e->getMessage());
      }
    }

    public function addCustomer() {
			$name = $this->validateParameter('name', $this->param['name'], STRING, false);
			$email = $this->validateParameter('email', $this->param['email'], STRING, false);
			$addr = $this->validateParameter('addr', $this->param['addr'], STRING, false);
			$mobile = $this->validateParameter('mobile', $this->param['mobile'], INTEGER, false);

			$cust = new Customer;
			$cust->setName($name);
			$cust->setEmail($email);
			$cust->setAddress($addr);
			$cust->setMobile($mobile);
			$cust->setCreatedBy($this->userId);
			$cust->setCreatedOn(date('Y-m-d'));

			if(!$cust->insert()) {
				$message = 'Failed to insert.';
			} else {
				$message = "Inserted successfully.";
			}

			$this->returnResponse(SUCCESS_RESPONSE, $message);
		}

		public function getCustomerDetails() {
			$customerId = $this->validateParameter('customerId', $this->param['customerId'], INTEGER);

			$cust = new Customer;
			$cust->setId($customerId);
			$customer = $cust->getCustomerDetailsById();
			if(!is_array($customer)) {
				$this->returnResponse(SUCCESS_RESPONSE, ['message' => 'Customer details not found.']);
			}

			$response['customerId'] 	= $customer['id'];
			$response['cutomerName'] 	= $customer['name'];
			$response['email'] 			= $customer['email'];
			$response['mobile'] 		= $customer['mobile'];
			$response['address'] 		= $customer['address'];
			$response['createdBy'] 		= $customer['created_user'];
			$response['lastUpdatedBy'] 	= $customer['updated_user'];
			$this->returnResponse(SUCCESS_RESPONSE, $response);
		}

		public function updateCustomer() {
			$customerId = $this->validateParameter('customerId', $this->param['customerId'], INTEGER);
			$name = $this->validateParameter('name', $this->param['name'], STRING, false);
			$addr = $this->validateParameter('addr', $this->param['addr'], STRING, false);
			$mobile = $this->validateParameter('mobile', $this->param['mobile'], INTEGER, false);

			$cust = new Customer;
			$cust->setId($customerId);
			$cust->setName($name);
			$cust->setAddress($addr);
			$cust->setMobile($mobile);
			$cust->setUpdatedBy($this->userId);
			$cust->setUpdatedOn(date('Y-m-d'));

			if(!$cust->update()) {
				$message = 'Failed to update.';
			} else {
				$message = "Updated successfully.";
			}

			$this->returnResponse(SUCCESS_RESPONSE, $message);
		}

		public function deleteCustomer() {
			$customerId = $this->validateParameter('customerId', $this->param['customerId'], INTEGER);

			$cust = new Customer;
			$cust->setId($customerId);

			if(!$cust->delete()) {
				$message = 'Failed to delete.';
			} else {
				$message = "deleted successfully.";
			}

			$this->returnResponse(SUCCESS_RESPONSE, $message);
		}
  }
?>
