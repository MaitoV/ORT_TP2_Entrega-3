import ModelFactory from '../model/DAO/librosFactory.js';
import config from '../config.js';

class Servicio {
    constructor() {
        this.modelo = ModelFactory.get(config.PERSISTENCIA);
    }

    obtenerLibros = async () => {
        const libros = await this.modelo.obtenerLibros();
        return libros;
    }
    obtenerLibro = async (id) => {
        let libroEncontrado = {};
        if(id) {
            const libroEncontrado = await this.modelo.obtenerLibro(id);
            return libroEncontrado;
        }
        return libroEncontrado;
    }
    
    guardarLibro = async (libro) => {
        const libroGuardado = await this.modelo.guardarLibro(libro);
        return libroGuardado;
    }
    
    actualizarLibro = async (id, libro) => {
        const libroActualizado = await this.modelo.actualizarLibro(id, libro);
        return libroActualizado;
    }
    
    borrarLibro = async (id) => {
        const libroBorrado = await this.modelo.borrarLibro(id);
        return libroBorrado;
    }
    
}

export default Servicio;


