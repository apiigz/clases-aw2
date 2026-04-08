
//Vamos a leer un archivo .txt.

import fsp from 'node:fs/promises'

try
{
    //const contenido = fsp.readFile("E:\Escritorio\Clases\Clase 20260408\Modulos\texto.txt"); => no sirve... creo.
    //const contenido = (await (fsp.readFile("./texto.txt"))).toString() => una forma de leerlo en cadena.
    const contenido = await fsp.readFile('./texto.txt', 'utf-8') //la forma "más mejor" aaaaa. Es una ruta LOCAL, o de archivos.
    console.log(contenido)
}
catch(e)
{
    console.log(e)
}