import model from '../models/carrito.model'

const guardarCarrito = async(req,res) => {
    const carrito= req.body

    try {
        const carritoGuardado= await model.crearCarrito(carrito)
        res.status(201).json(carritoGuardado)
    } catch (error) {
        console.log('[guardarCarrito]', error);
        let mensaje = 'No se pudo guardar el carrito '
        res.status(500).json(mensaje)

    }
}

export default {
    guardarCarrito
} 