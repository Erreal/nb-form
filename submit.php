<?php
    session_start();

    class AuthClass {
        private $data = array("123", "123"); 
    
        public function auth ($login, $passwd) {
            if ($login == $this -> data[0] && $passwd == $this->data[1]) {
                $_SESSION["auth"] = true;
                $_SESSION["user"] = $login;
                return true;
            } else {
                $_SESSION["auth"] = false;
                return false;
            }
        }
        
        public function isAuth() {
            if (isset($_SESSION["auth"])) { 
                return $_SESSION["auth"]; 
            }
            else return false; 
        }
        
        public function getUser() {
            if ($this->isAuth()) { 
                return $_SESSION["user"]; 
            }
        }

        public function logOut() {
            $_SESSION = array(); 
            session_destroy(); 
        }
    }
    
    $auth = new AuthClass();

    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && isset($_POST["name"]) && isset($_POST["pwd"])) {
        if (!$auth->auth($_POST["name"], $_POST["pwd"])) { 
            echo "Логин и пароль введен не правильно!";
        }   else {
            echo "Добро пожаловать!";
        }
    }
 ?>