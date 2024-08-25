class Personajes {
    constructor() {
      this.Heroes = [
        'Luke Skywalker',
        'C-3PO',
        'R2-D2',
        'Leia Organa',
        'Biggs Darklighter',
        'Obi-Wan Kenobi'
      ];
  
      this.Villanos = [
        'Darth Vader',
        'First Order',
        'Sith',
      ];
    }
  
    async obtenerPersonajes() {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      const personajes = data.results;
  
      return personajes.map((personaje) => {
        let categoria;
        const nombre = personaje.name;
        if (this.Heroes.some((heroe) => nombre.includes(heroe))) {
          categoria = 'Héroes';
        } else if (this.Villanos.some((villano) => nombre.includes(villano))) {
          categoria = 'Villanos';
        } else {
          categoria = 'Desconocido';
        }
        personaje.bando = categoria;
        personaje.imagen = `./assets/imgs/${personaje.name}.jpg`;
        return personaje;
      });
    }
  }
  
  export default Personajes;