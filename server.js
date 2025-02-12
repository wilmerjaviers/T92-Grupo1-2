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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
