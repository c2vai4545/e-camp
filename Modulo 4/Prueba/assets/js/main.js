import Categorias from './categorias.js';

const container = document.getElementById('heroes-container');
const categorias = new Categorias(container);
categorias.obtenerPersonajesYcategorias();