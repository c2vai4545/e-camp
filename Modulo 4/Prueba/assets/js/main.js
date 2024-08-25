import Categorias from './categorias.js';
import Render from './render.js';

const container = document.getElementById('heroes-container');
const categorias = new Categorias(container);

categorias.obtenerPersonajesYcategorias();
const render = new Render(container);
render.renderizarCategorias(categorias.obtenerCategorias());