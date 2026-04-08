//Escribir en un archivo
import fsp from 'node:fs/promises'
import path from 'node:path' //=> ???? who is this => Para los archivos usa las nomenclaturas del S.O (util para que funcione en Linux, Mac, o el mismo Windows)

try{
    //Hacer una petición con FETCH => con promesas
    const respuesta = await fetch('https://69c566e38a5b6e2dec2c626b.mockapi.io/api/v1/productos') //=> es una ruta URL.
    //Extraemos del cuerpo de la peticion de los datos
    const productos = await respuesta.json();

    //Creamos la ruta
    //const ruta =  path.join('.', 'api.txt')
    //const ruta =  path.join('./api.txt')
    const ruta =  path.join('./api.json')
    //Guardar los datos en un archivo (Si no existe, lo crea. Si existe, lo "pisa")
    await fsp.writeFile(ruta, JSON.stringify(productos, null, 4)) //=> 'JSON.metodo(argumento)' es god, aprende a usarlo. Convierte el JSON en un formato legible.
    //await fsp.writeFile(ruta, JSON.stringify(productos)) => para un archivo .txt común.
    //usa el "flag", en el writeFile, para agregar cosas a un archivo ya existente.

}catch(e){
    console.log(e)
}