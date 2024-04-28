const pool = require('../config/dbConfig');

async function insertContacto(req, res) {
    try {
        const { nombre, email, tipo_familiar, mensaje } = req.body;
        const result = await pool.query("INSERT INTO Contactos(nombre, email, tipo_familiar, mensaje) VALUES (?, ?, ?, ?)", [nombre, email, tipo_familiar, mensaje]);
        res.json({ success: true, msg: 'Contacto añadido', result: result });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Error al añadir contacto', error: error });
    }
}

module.exports = {
    insertContacto
};
