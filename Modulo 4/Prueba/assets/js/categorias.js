import Render from './render.js';
import Personajes from './personajes.js';

class Categorias {
  constructor(container) {
    this.categorias = {};
    this.container = container;
    this.render = new Render(container);
    this.personajes = new Personajes();
  }

  async obtenerPersonajesYcategorias() {
    const personajes = await this.personajes.obtenerPersonajes();

    personajes.forEach((personaje) => {
      this.agregarCategoria(personaje.bando);
      this.agregarPersonaje(personaje.bando, personaje);
    });

    const categorias = Object.keys(this.categorias).map((categoria) => ({
      nombre: categoria,
      personajes: this.categorias[categoria],
      imagen: this.getImagenCategoria(categoria)
    }));

    await this.render.renderizarCategorias(categorias);
  }

  getImagenCategoria(categoria) {
    switch (categoria) {
      case 'Héroes':
        return './assets/imgs/Héroes.jpg';
      case 'Villanos':
        return './assets/imgs/Villanos.jpg';
      case 'Desconocido':
        return './assets/imgs/Neutral.jpg';
      default:
        return ''; // o alguna imagen por defecto
    }
  }

  agregarCategoria(categoria) {
    if (!this.categorias[categoria]) {
      this.categorias[categoria] = [];
    }
  }

  agregarPersonaje(categoria, personaje) {
    this.categorias[categoria].push(personaje);
  }

  obtenerCategorias() {
    return Object.keys(this.categorias);
  }

  obtenerPersonajes(categoria) {
    return this.categorias[categoria].personajes;
  }
}

export default Categorias;