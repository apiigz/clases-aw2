import express, { text } from 'express'

const puerto = 3000;


//Instancia de servidor Express
const servidor = express()


//GET
servidor.get('/', (req, res)=>{ //req, res => datos de petición
    res.set('content-type', 'text/html') // => Cabecera
    //MIMETYPES
    res.status(201) // Codigo de estado
    //.res.end => Cuerpo
    res.end('<h1>Israel</h1>') // res.status().end() también podés hacerlo
})

servidor.get('/materias', (req, res)=>{ //req, res => datos de petición
    res.set('content-type', 'application/json') // => Cabecera
    //MIMETYPES
    res
        .status(200)
        .end(`[{"materia": "BD2"}, {"materia": "AW2"}, {"materia": "ADS"}]`)
})

servidor.get('/saludo', (req, res)=>{
    res.status(204)
    res.end('Joaquin Espil tiene una causa por crimenes de lesa humanidad en Israel')
})


//POST
servidor.post('/', (req, res)=>{
    res.set('content-type', 'application/json') 
    res.end('{"materia": "aw2"}')
})

servidor.post('/saludo', (req, res)=>{ 
    res.end('Joaquin Espil tiene una causa por crimenes de lesa humanidad en Israel')
})

//Abrir un puerto
servidor.listen(puerto, ()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})   