import Servicio from '../servicio/libros.js';

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }
    obtenerLibros = async (req, res) => {
        const libros = await this.servicio.obtenerLibros();
        res.json(libros)
    }
    obtenerLibro = async (req, res) => {
        const {id} = req.params;
        const libro = await this.servicio.obtenerLibro(id);
        res.json(libro);
    }
    guardarLibro = async (req, res) => {
        const libro = req.body;
        const libroGuardado = await this.servicio.guardarLibro(libro);
        res.json(libroGuardado);
    }
    actualizarLibro = async (req, res) => {
        const {id} = req.params;
        const libro = req.body;
        const libroActualizado = await this.servicio.actualizarLibro(id, libro);
        res.json(libroActualizado);
    }
    
    borrarLibro = async (req, res) => {
        const {id} = req.params;
        const libroEliminado = await this.servicio.borrarLibro(id);
        res.json(libroEliminado);
    }
}

export default Controlador;
