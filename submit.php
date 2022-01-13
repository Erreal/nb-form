<?php
    session_start();

    class AuthClass {
        private $_login = "test"; 
        private $_password = "123"; 
    
        public function auth ($login, $passwd) {
            if ($login == $this -> _login && $passwd == $this->_password) {
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
    
?>