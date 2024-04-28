const express = require('express');
const router = express.Router();
const { insertUsuario } = require('../controllers/usuariosController');

// Endpoint para insertar un usuario
router.post('/usuarios', insertUsuario);

module.exports = router;
