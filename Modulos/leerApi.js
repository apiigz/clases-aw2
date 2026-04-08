//Leer una API
try{
    //Hacer una petición con FETCH => con promesas
    const respuesta = await fetch('https://69c566e38a5b6e2dec2c626b.mockapi.io/api/v1/productos') //=> es una ruta URL.
    //Extraemos del cuerpo de la peticion de los datos
    const productos = await respuesta.json();
    console.log(productos) //<= Transforma el cuerpo "cadenas de texto" a un objeto/arreglo de JavaScript
}catch(e){
    console.log(e)
}