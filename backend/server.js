const express = require('express');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuariosRoutes');
const contactosRoutes = require('./routes/contactosRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', usuariosRoutes);
app.use('/api', contactosRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
