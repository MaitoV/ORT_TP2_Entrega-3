import config from './config.js';
import express from 'express';
import RouterLibros from './router/libros.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/libros', new RouterLibros().start());

const server = app.listen(config.PORT, () => console.log('Servidor ApiRest escuchando en el puerto ' + config.PORT));

server.on('error', (error) => console.log('Error en servidor: ' + error.message));

