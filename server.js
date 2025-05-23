
import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'
import connection from './utils/connection.js' //siempre recordar poner el .js
import routerProductos from './routers/productos.router.js'
import routerUsuarios from './routers/usuarios.router.js'
import routerUploads from './routers/uploads.router.js'
import routerCarrito from './routers/carrito.router.js'


// ! Constantes
const app = express()
const PORT = process.env.PORT // No se carga en el remoto la variable port(para que render lo elija)
const URI_DB = process.env.URI_REMOTA
const URL_FRONT= process.env.URL_FRONTEND_CORS  



// ! Configuraciones
const corsConfig = {
  origin: URL_FRONT // prod: http://etapa-3.netlify.com/  |   dev: http://localhost:5173

}


// ! Middlewares
app.use(express.json()) // Traduce a Express el objeto que llega por el body
app.use(express.static(path.join('public'))) // el join lo que va a hacer es poner '/' o '\' dependiendeo del SO
// hicimos accesible la carpeta publica desde el exterior
app.use(cors(corsConfig)) //cors() -> todos los origenes pueden acceder
//con corsconfig hacemos que no puedan acceder a nuestra backend

// ! Rutas
app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/usuarios', routerUsuarios)
app.use('/api/v1/uploads', routerUploads)
app.use('/api/v1/carrito', routerCarrito)


app.get('/', (req, res) => {
  res.send('Hello World!')
})




// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
})