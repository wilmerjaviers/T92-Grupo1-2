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
]

app.get('/api/categorias', (req, res)=>{
    res.json(categorias);
})

console.log(`server on port ${3000}`)