import express from 'express'

const puerto = 3000

const app = express();

//Middlewares y use

function middleware1(req, res, next){
    console.log('Middleware 1')
    next()
}

app.use(middleware1) //=> se ejecuta en todas las rutas 

app.get('/', (req, res)=>{
    console.log('Ejecución del callback final')
    res.send('Hola ruta /')
})

app.get('/saludo', (req,res)=>{
    console.log('Ejecución del callback final')
    res.send('Hola ruta /saludo')
})

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${puerto}`)
})