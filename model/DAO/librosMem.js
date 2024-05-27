class ModelMem {
    #libros;
    constructor() {
        this.#libros = [
            {id: '1', titulo: 'El señor de los anillos', autor: 'J.R.R Tolkien' , anio: 1954 },
            {id: '2', titulo: 'El cuento de la criada', autor: 'Margaret Atwood',  anio: 1985 },
            {id: '3', titulo: 'Trílogia de la Fundación', autor: 'Isaac Asimov', anio: 1951},
        ]        
    }
    obtenerLibros = async () => {
        return this.#libros;
    }
    obtenerLibro = async (id) => {
        const libroEncontrado = this.#libros.find(libro => libro.id === id);
        return libroEncontrado || {}; 
    }
    guardarLibro = async (libro) => {
        const id = String(parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1);
        const libroConID = {id: id, ...libro} 
        this.#libros.push(libroConID);
        return libroConID;
    }
    actualizarLibro = async (id, libro) => {
        const index = this.#libros.findIndex(libro => libro.id === id);
        if(index != -1) {
            const libroAnterior = this.#libros[index];
            const libroActualizado = {...libroAnterior, ...libro};
            this.#libros.splice(index, 1, libroActualizado);
            return libroActualizado;
        } else {
            return {}
        }
    }
    borrarLibro = async (id) => {
        let libro = {};
    
        const index = this.#libros.findIndex(libro => libro.id === id);
        if(index != -1) {
            libro = this.#libros.splice(index, 1)[0];
        }
        return libro;
    }
}

export default ModelMem;

