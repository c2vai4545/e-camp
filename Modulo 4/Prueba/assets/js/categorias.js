// import Render from './render.js';

// class Categorias {
//     constructor(container) {
//         this.Heroes = [
//             'Luke Skywalker',
//             'C-3PO',
//             'R2-D2',
//             'Leia Organa',
//             'Biggs Darklighter',
//             'Obi-Wan Kenobi'
//         ];
        
//         this.Villanos = [
//             'Darth Vader',
//             'First Order',
//             'Sith',
//         ];
//         this.categorias = {};
//         this.container = container;
//         this.render = new Render(container);
//     }

//     async obtenerPersonajesYcategorias() {
//         const response = await fetch('https://swapi.dev/api/people/');
//         const data = await response.json();
//         const personajes = data.results;
//         console.log('Response:', data);
        
      
//         personajes.forEach((personaje) => {
//             let categoria;
//             const nombre = personaje.name;
//             if (this.Heroes.some((heroe) => nombre.includes(heroe))) {
//                 categoria = 'Héroes';
//             } else if (this.Villanos.some((villano) => nombre.includes(villano))) {
//                 categoria = 'Villanos';
//             } else {
//                 categoria = 'Desconocido';
//             }
//             personaje.bando = categoria;
//             personaje.imagen = `./assets/imgs/${personaje.name}.jpg`;
//             this.agregarCategoria(categoria);
//             this.agregarPersonaje(categoria, personaje);
//             console.log(personaje)
//         });
      
//         const categorias = Object.keys(this.categorias).map((categoria) => ({
//             nombre: categoria,
//             personajes: this.categorias[categoria],
//             imagen: this.getImagenCategoria(categoria)
//         }));

//         await this.render.renderizarCategorias(categorias);
//     }


//    
//     getImagenCategoria(categoria) {
//         switch (categoria) {
//             case 'Héroes':
//                 return './assets/imgs/Héroes.jpg';
//             case 'Villanos':
//                 return './assets/imgs/Villanos.jpg';
//             case 'Desconocido':
//                 return './assets/imgs/Neutral.jpg';
//             default:
//                 return ''; // o alguna imagen por defecto
//         }
//     }

//     agregarCategoria(categoria) {
//         if (!this.categorias[categoria]) {
//             this.categorias[categoria] = [];
//         }
//     }

//     agregarPersonaje(categoria, personaje) {
//         this.categorias[categoria].push(personaje);
//     }

//     obtenerCategorias() {
//         return Object.keys(this.categorias);
//     }

//     obtenerPersonajes(categoria) {
//         return this.categorias[categoria].personajes;
//     }
// }

// export default Categorias;

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