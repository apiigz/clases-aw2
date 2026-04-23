//Instala express con "npm i-E express" para que podas confirmar la actualización y no se haga sola
//con "npm i express" para que se actualice automaticamente

import express from 'express'

const puerto = 3000

const servidor = express()

//Preguntarle a Express si hay datos del cliente (verificar) en formato .json
servidor.use(express.json())

const productos = [
        {
        id: 1,
        nombre: "camiseta",
        precio: 20000
        },
        {
        id: 2,
        nombre: "pantalon",
        precio: 30000
        }
    ]

const peticionGetenRaiz = (req, res)=>{
    res.set('content-type', 'text/html') 
    res.status(201)
    res.end('<h1>Israel</h1>')
}

servidor.get('/',peticionGetenRaiz)

servidor.get('/productos', (req, res)=>{
    
    res.json(productos)
    //res.set('content-type', 'application/json')
    //res.end([{nombre: "camiseta", precio: 20000}]) => este
    //res.end(JSON.stringify(productos)) => o este
})

servidor.get('/productos/:id', (req,res)=>{
    const id = parseInt(req.params.id) //el .id tiene que ser IGUAL al parametro que pasas después de "/productos/:...""
    console.log(id)

    const productosFiltrados = productos.filter((producto)=>{
        return (producto.id === id)
    })

    res.json(productosFiltrados)
})

servidor.post('/productos', (req, res)=>{
    // Agrega al req o petición una propiedad llamada body
    //console.log(req.body)
    const producto = req.body
    productos.push(producto)
    res.status(201).json({mensaje:'Producto creado q'})
})

servidor.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})