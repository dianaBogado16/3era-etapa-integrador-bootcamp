import mongoose from "mongoose"
//import { timeStamp } from "node:console"



//! CREAMOS EL ESQUEMA
const carritoSchema = mongoose.Schema(
    {
        carrito: Array
    },
    {
        timestamps: true, // createAt | updatedAt
        versionKey: false
    }
)

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
        throw error
    }

}

export default {
    crearCarrito
}
