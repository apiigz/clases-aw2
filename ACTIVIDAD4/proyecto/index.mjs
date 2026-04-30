import express from 'express'
import fsp from 'node:fs/promises'
import path from 'node:path'

const PUERTO = 3000

const app = express()

var datos = null;

async function actualizarDatos() {
    try {
        console.log('Ejecutado')
        const respuesta = await fetch('http://localhost:4321/usuario')
        datos = await respuesta.json()
        const ruta =  path.join('./api.json')
        await fsp.writeFile(ruta, JSON.stringify(datos, null, 4))
    } catch (e) {
        console.log('error')
    }
}


function Middleware(req, res, next){
    actualizarDatos()
    if (datos.codigo === 5183) {
        console.log('Es correcto')
        const mensaje = {
        mensaje: 'El código es correcto'
        } 
        res.status(200).json(mensaje)
        return next()
    } else {
        console.log('Es incorrecto')
        const mensaje = {
            mensaje: 'El código es incorrecto'
        }
        res.status(400).json(mensaje)
        return next()
    }
}

app.get('/', Middleware, (req, res)=>{

})

app.get('/codigo', Middleware, (req, res) => {
    
})


app.listen(PUERTO);