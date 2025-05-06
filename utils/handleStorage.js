import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import path from 'node:path'

const storage = multer.diskStorage( {
    destination: function (req, file , cb) {
        // creando el directorio donde se van a guardar las imagenes
        //                                     /public/uploads
        const rutaDeAlmacenamiento = path.join('public', 'uploads')
        //path es una funcion que tiene node que nos permite acceder a las rutas del fileSystem(sin importar el sistema operativo)
        cb(null, rutaDeAlmacenamiento)
    },
    filename : function(req, file,cb) {
        const extension = file.originalname.split('.').pop()
        // foto.jpg -> ['foto', 'jpg']
        //con el split separamos los strings del nombre y de la extension y con el pop(saco el ultimo elemento) o sea el .jpg, la extension
        //por lo que en la variable extension estaria guardando la extension
        const nombreArchivo = `${uuidv4()}.${extension}`
        //el uuid nos da un identificador unico que no se repite jamas
        cb(null, nombreArchivo)
    }
})

export default storage