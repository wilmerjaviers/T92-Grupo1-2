const express= require ('express');
const app = express();
const port =3000;

app.listen(port);

const categorias=[
    {
        "id": 1,
        "nombre": "Historia"
    },
    {
        "id": 2,
        "nombre": "Ciencia"
    },
    {
        "id": 3,
        "nombre": "Tecnología"
    },
    {
        "id": 4,
        "nombre": "Cultura"
    },
    {
        "id": 5,
        "nombre": "Medio Ambiente"
    }
];


const pedidos = [
    { id: 1, usuario: "Juan", total: 500 },
    { id: 2, usuario: "María", total: 750 },
    { id: 3, usuario: "Carlos", total: 320 },
    { id: 4, usuario: "Ana", total: 600 }
];

const productos = [
    {
        id: 1,
        nombre: "laptop",
        precio: "1200"
    },
    {
        id: 2,
        nombre: "cargador",
        precio: "330"
    },
    {
        id: 3,
        nombre: "memoria",
        precio: "430"
    },
    {
        id: 4,
        nombre: "mouse",
        precio: "120"
    }
];


app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.get("/api/pedidos", (req, res) => {
    res.json(pedidos);
});



app.get('/api/categorias', (req, res)=>{
    res.json(categorias);
});

console.log(`server on port ${3000}`)