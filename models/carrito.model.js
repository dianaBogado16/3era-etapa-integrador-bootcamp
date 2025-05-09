//! CREAMOS EL ESQUEMA

import mongoose from "mongoose"

const carritoSchema = mongoose.Schema({
    carrito: Array
})

//! Apartir del esquema creo el modelo

const carritoModel = mongoose.model('carritos',carritoSchema)


//-------------------------------------------------------------
// Metodos que nos va a servir de interfaz  para ineractuar con la DB
//-------------------------------------------------------------

const crearCarrito = async(carrito) => {

    try {
        const carritoCreado = new carritoModel({carrito})   // Tiene que recibir un objeto, si recibe un array, va a dar error
        const carritoGuardado= await carritoCreado.save()

        return carritoGuardado
    } catch (error) {
        console.log('No se pudo crear el carrito');
    }

}

export default {
    crearCarrito
}
