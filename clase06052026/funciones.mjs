import productos from "./productos.mjs"

export function obtenerProductos(req, res){
    res.json(productos)
}

export function obtenerProductosporID(req, res){
    //Logica extra
    const idProducto = Number(req.params.id) // verificar si es un numero => cast => NaN
    //const idProducto = parseInt(req.params.id) => 125abc => 125
    //Filtramos
    const productosFiltrados = productos.filter((producto)=>{
        return idProducto === Number(producto.id) // => verdadero o falso
    })
    if(productosFiltrados.length > 0){
        res.json(productosFiltrados)
    }
    else{
        const respuesta = {
            mensaje: 'No hay productos con ese ID'
        }
        res.status(404).json(respuesta)
    }
}

export function eliminarProducto(req, res){
    const idProducto = Number(req.params.id) 

    const productosFiltrados = productos.filter((producto)=>{
        return idProducto !== Number(producto.id) 
    })

    productos.length = 0

    productos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Productos eliminados'
    }
    res.json(respuesta)
}

export function altaProducto(req, res){
    const nuevoProducto = req.body 
    productos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)
}