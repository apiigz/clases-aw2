import productos from "./productos.mjs"

export function obtenerProductos(req, res){
    res.json(productos.datos)
}

export function obtenerProductosporID(req, res){
    //Logica extra
    const idProducto = Number(req.params.id) // verificar si es un numero => cast => NaN
    //const idProducto = parseInt(req.params.id) => 125abc => 125
    //Filtramos
    const productosFiltrados = productos.datos.filter((producto)=>{
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

export function modificarProducto(req, res){
    const id_producto = Number(req.params.id)
    const productoModificado = req.body

    productos.datos.forEach((producto)=>{
        //Obteniendo el indice con indexOf()
        const indice = productos.datos.indexOf(producto)

        if(id_producto === Number(producto.id)){
            productoModificado.id = id_producto
            producto.datos[indice] = productoModificado
        }
    })

    const respuesta = {
            mensaje: 'Producto modificado'
            }
            res.json(respuesta)
}

export function eliminarProducto(req, res){
    const idProducto = Number(req.params.id) 

    const productosFiltrados = productos.datos.filter((producto)=>{
        return idProducto !== Number(producto.id) 
    })

    productos.datos.length = 0

    productos.datos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Productos eliminados'
    }
    res.json(respuesta)
}

export function altaProducto(req, res){
    const nuevoProducto = req.body
    const proximoId = Number(productos.ultimo_id) + 1 

    //Agregamos nueva propiedad
    nuevoProducto.id = proximoId
    //Actualizamos la referencia
    productos.ultimo_id = proximoId
    productos.datos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)
}