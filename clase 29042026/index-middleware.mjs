import express from 'express'

const puerto = 3000

const app = express();

//Middlewares

function middleware1(req, res, next){
    const usuarioExiste = false
    if (usuarioExiste){
        console.log('Usuario existe => SI pasa')
        return next(); //<== Seguir la pila de ejecución
    }
    console.log('Usuario no existe => NO pasa')
    res.status(404).send('usuario no existe')
}

function middleware2(req, res, next){
    console.log('Middleware 2')
    next(); //<== Seguir la pila de ejecución
}

app.get('/', middleware1, middleware2, (req, res)=>{
    console.log('Ejecución del callback final')
    res.send('Tito Calderón')
})



app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${puerto}`)
})

