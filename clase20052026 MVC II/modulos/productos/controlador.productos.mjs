import * as modelo from "./modelo.productos.mjs"
import * as vista from "./vista.productos.mjs"

export function obtenerTodos(req, res){
    const productos = modelo.obtenerTodos()
    const respuestaVista = visualViewport.obtenerTodos(productos)

    res.json(respuestaVista)
}

export function obtenerProducto(req, res){
    const id = Number(req.params.id)

    const producto = modelo.obtenerProducto(id)

    if(producto.length > 0){
        res.status(200).json(producto)
    }else{
        res.status(404).json({ mensaje: `Producto con id ${id} no encontrado`})
    }
}