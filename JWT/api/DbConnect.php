<?php
  /**
   * Database Connection
   */
  class DbConnect {

    private $server = 'localhost';
    private $dbname = 'stockdb';
    private $user   = 'root';
    private $pass   = '';


    public function connect() {

      try {
                    //PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
        $conn = new PDO("mysql:host=$this->server;dbname=$this->dbname", $this->user, $this->pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conn;

      } catch (Exeption $e) {
        echo "Database Error: ". $e->getMessage();
      }

    }
  }
?>
