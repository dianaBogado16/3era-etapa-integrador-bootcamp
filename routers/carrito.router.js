import express from 'express'
const routerCarrito= express.Router()
import controller from '../controllers/carrito.controller.js'


//! HCAER un post (create) para que se efectue la compra
routerCarrito.post('/', controller.guardarCarrito)

export default  routerCarrito