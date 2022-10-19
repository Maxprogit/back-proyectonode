//declaracion de constantes 
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app =  express()

//capturar el body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//conexion a la base de datos
console.log(process.env)
const uri = `mongodb+srv://${process.env.USUARIO}mariionette:${process.env.PASSWORD}<password>@cluster0.sigiqsa.mongodb.net/${process.env.DBNAME}`
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a BD')
}).catch(e => {
    console.log('error: ', e)
})
//importar rutas
const authRoutes = require('./routes/auth')

//ruta del middleware
app.use('/api/user', authRoutes)

app.get('/', (req,res) => {
    res.json({
        estado: true,
        mensaje: 'WORKS FINE'
    })

})

//inicializar servidor

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo: ${PORT}`)
})