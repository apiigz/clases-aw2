import express from 'express'
import { obtenerProductos, obtenerProductosporID, eliminarProducto, altaProducto, modificarProducto } from './funciones.mjs';

const puerto = 3000;

const app = express()
app.use(express.json()) //=> avisar a express que voy a mandar archivos .JSON por el cuerpo

//GET
app.get('/api/v1/productos', obtenerProductos)

//GET
app.get('/api/v1/productos/:id', obtenerProductosporID)

//POST /api/v1/productos => damos de alta un registro 
app.post('/api/v1/productos', altaProducto)

//PUT /api/v1/productos/:id => modificar un registro
app.put('/api/v1/productos/:id', modificarProducto)
 
//DELETE /api/v1/productos/:id => eliminar un registro
app.delete('/api/v1/productos/:id', eliminarProducto)

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${puerto}`)
})