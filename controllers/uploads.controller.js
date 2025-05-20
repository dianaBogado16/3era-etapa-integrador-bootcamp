
const uploadImagen = (req, res) => {
    const imagen = req.file
    console.log(imagen);

    if( !imagen ) {
        return res.status(400).json({
            mensaje: 'No se cargo la imagen necesaria'
        })
    }

    console.log(req.protocol); // averiguar si es http o https
    console.log(req.get('host')); //localhost:8080
    console.log(imagen.filename);

    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${imagen.filename}`

    res.status(201).json( {
        foto: urlCompletaBack
    })

}

export default {
    uploadImagen
}