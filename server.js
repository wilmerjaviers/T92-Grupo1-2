
const express = require("express");
const app = express();
const PORT = 3000;

const pedidos = [
    { id: 1, usuario: "Juan", total: 500 },
    { id: 2, usuario: "María", total: 750 },
    { id: 3, usuario: "Carlos", total: 320 },
    { id: 4, usuario: "Ana", total: 600 }
];

app.get("/api/pedidos", (req, res) => {
    res.json(pedidos);
});


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
