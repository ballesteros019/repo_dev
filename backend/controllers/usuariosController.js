const pool = require('../config/dbConfig');

async function insertUsuario(req, res) {
    try {
        const { nombre, correo, tipo_familiar } = req.body;
        const result = await pool.query("INSERT INTO usuarios(nombre, correo, tipo_familiar) VALUES (?, ?, ?)", [nombre, correo, tipo_familiar]);
        res.json({ success: true, msg: 'Usuario añadido', result: result });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Error al añadir usuario', error: error });
    }
}
module.exports = {
    insertUsuario
};
