const express = require('express');
const app = express();
const port = 3000;

const usuarios = [
    {
        id: 1,
        nombre: "Juan",
        email: "juan@email.com"
    },
    {
        id: 2,
        nombre: "María",
        email: "maria@email.com"
    },
    {
        id: 3,
        nombre: "Carlos",
        email: "carlos@email.com"
    },
    {
        id: 4,
        nombre: "Ana",
        email: "ana@email.com"
    }
];


app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});