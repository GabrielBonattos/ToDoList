<?php
    class Tarefa {
        private $id;
        private $idStatus;
        private $tarefa;
        private $dataCadastrada;

        public function __get($attr) {
            return $this->$attr;
        }

        public function __set($attr, $value) {
            $this->$attr = $value;
        }
    }