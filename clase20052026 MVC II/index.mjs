import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000

const app = express()

app.use('/', rutasProductos) //=> Se usa por defecto en todas las rutas que arranquen con 'miapp'

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}/api/v1/productos`)
})