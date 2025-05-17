


const handleMongoId = (elemento) => { // elemeno -> un doc / un array de docs
    // elemento -> va a ser un elemento mongoose --> metodos, funciones
    const clave = '_id'
    // Convierto un objeto complejo de mongoose (metodos) -> objeto de js vanilla
    elemento = JSON.parse(JSON.stringify(elemento)) // convierto un obj mogoose en un objeto de js
    //comrpuebo si llego un array 
    if(Array.isArray(elemento)) {
        console.log('Llego un array de productos');

        for (let i = 0; i < elemento.length; i++) {
            elemento[i].id= elemento[i][clave]
            delete elemento[i][clave]
        }
    }else {
        console.log('llego un documento'); 
        elemento.id= elemento[clave]
        delete elemento[clave]
    }

    return elemento
}

export default handleMongoId