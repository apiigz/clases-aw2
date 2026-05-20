//import express from 'express'
import {Router} from 'express'
import * as controlador from './controlador.productos.mjs   '
const rutasProductos = new Router()
const rutaBase = '/api/v1' // => si se repite mucho una url, podes hacer esto para luego concatenar en los get, y no repetir mucho.

//Instanciamos router => es como express 
rutasProductos.get('/api/v1/productos', controlador.obtenerTodos)

rutasProductos.get('/api/v1/productos/:id', controlador.obtenerProducto)

export default rutasProductos