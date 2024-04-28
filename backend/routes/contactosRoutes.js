const express = require('express');
const router = express.Router();
const { insertContacto } = require('../controllers/contactosController');

// Endpoint para insertar un contacto
router.post('/contactos', insertContacto);

module.exports = router;
