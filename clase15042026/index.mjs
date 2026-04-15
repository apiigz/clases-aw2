//MODULO HTTP (al servidor lo programas desde 0 xd)

import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async(peticion, respuesta)=>{ //<== Solamente se va a ejecutar cuando haya una petición
    console.log("Petición recibida")

    //respuesta.end('Enviando archivo q') //<== No se puede ejecutar dos veces, siempre ponerlo en el último lugar
    //console.log(peticion.url)
if(peticion.method === 'GET'){
    if(peticion.url === '/'){
        respuesta.statusCode = 200
        return respuesta.end('Estas en la raiz')
    }

    if(peticion.url === '/suma'){
        respuesta.statusCode = 200
        const suma = (5 + 3).toString()
        return respuesta.end(suma)
    }
}

if(peticion.method === 'POST'){
    if(peticion.url === '/proceso-formulario'){
        //
        /*respuesta.on('data', (datos)=>{
            console.log(datos)
        })*/
       return respuesta.end('Se hizo una petición con el metodo POST')
    }

    if(peticion.url === '/guardar-datos'){
        const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
        const datosApi = await respuestaApi.text()
        try{
            await fsp.writeFile(path.join('./datosapi.txt'), datosApi)
            respuesta.statusCode = 201 // 201 = se ha creado el recurso
            return respuesta.end('Datos guardados')
        }catch(e){ 
            respuesta.statusCode = 500 //500 = error de parte del server, dw
            return respuesta.end('Error en el servidor')

        }
    }
}
    respuesta.statusCode = 404
    respuesta.end('Recurso no encontrado')
    //.log() => consola; .end() => lado cliente
})

//De puerto usamos el 3000 para arriba, los menores están, generalmente, ocupados por la computadora al prenderse
app.listen(3000, ()=>{ // <== Se ejecuta cuando se escucha
    console.log("Servidor corriendo en https://localhost:3000")
})

//--watch, en json, hace que ante cada cambio se levante de nuevo el sv