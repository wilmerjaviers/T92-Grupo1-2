    const express = ('express');
    const app = express;
    const port = 3000;

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
    
    
    app.get('/api/precios', (req, res) => {
        res.json(precio);
    });
    

app.listen(port, () =>{
    console.log('Servidor corriendo en http://localhost:${port}');
})
