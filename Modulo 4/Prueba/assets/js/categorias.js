class Categorias {
    constructor(container) {
        this.afiliacionesHeroes = [
            'Rebel Alliance',
            'Resistance',
            'Jedi Order',
            ];
            
        this.afiliacionesVillanos = [
            'Galactic Empire',
            'First Order',
            'Sith',
            ];
        this.categorias = {};
        this.container = container;
    }
  
    agregarCategoria(category) {
        if (!this.categorias[category]) {
            this.categorias[category] = {
            points: [],
            characters: [],
            };
        }
    }
  
    agregarPersonaje(category, character) {
        if (this.categorias[category]) {
            this.categorias[category].characters.push(character);
        }
    }
  
    obtenerCategorias() {
        return Object.keys(this.categorias);
    }
  
    obtenerPersonajes(category) {
        return this.categorias[category].characters;
    }
  
    generarColorAleatorio() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
  
    generarPunto(category) {
        const color = this.generarColorAleatorio();
        const punto = document.createElement("div");
        punto.classList.add("col-md-2", "rounded-circle", "text-white", "d-flex", "justify-content-center", "align-items-center");
        punto.style.width = "30px";
        punto.style.height = "30px";
        punto.style.marginTop = "20%";
        punto.style.backgroundColor = color;
        return punto;
    }
  
    generarTarjetaCategoria(category) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("m-3"); 
        const card = document.createElement("div");
        card.classList.add("card", "m-3");
        const img = document.createElement("img");
        img.src = "https://via.placeholder.com/150";
        img.classList.add("card-img-top");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = category;
        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = `Categoria: ${category}`;
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
        return card;
    }
  
    generarTarjetaPersonaje(character) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("m-3"); 
        const card = document.createElement("div");
        card.classList.add('card', 'm-3');
        const img = document.createElement("img");
        img.src = "https://via.placeholder.com/150";
        img.classList.add("card-img-top");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = character.name;
        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = `Height: ${character.height} cm, Weight: ${character.weight} kg`;
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
        return card;
    }
  
    async obtenerPersonajesYcategorias() {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        const personajes = data.results;
      
        personajes.forEach((personaje) => {
            const categoria = personaje.species && personaje.species.name ? personaje.species.name : 'Desconocida';
            this.agregarCategoria(categoria);
            this.agregarPersonaje(categoria, personaje);
        
            // Verificar afiliaciones
            const afiliaciones = personaje.affiliations;
            if (afiliaciones) {
                const esHeroe = afiliaciones.some((afiliacion) => afiliacionesHeroes.includes(afiliacion));
                const esVillano = afiliaciones.some((afiliacion) => afiliacionesVillanos.includes(afiliacion));        
                if (esHeroe) {
                    personaje.tipo = 'heroe';
                } else if (esVillano) {
                    personaje.tipo = 'villano';
                } else {
                    personaje.tipo = 'desconocido';
                }
            }
        });
        
        this.renderizarCategorias();
    }
  
    renderizarCategorias() {
        const categorias = this.obtenerCategorias();
        categorias.forEach((categoria) => {
            const categoryContainer = document.createElement("div");
            categoryContainer.classList.add("row");
    
            const punto = this.generarPunto(categoria);
            categoryContainer.appendChild(punto);
    
            const categoryCardContainer = document.createElement("div");
            categoryCardContainer.classList.add("col-md-5");
            const categoryCard = this.generarTarjetaCategoria(categoria);
            categoryCardContainer.appendChild(categoryCard);
            categoryContainer.appendChild(categoryCardContainer);
    
            const charactersContainer = document.createElement("div");
            charactersContainer.classList.add("col-md-5");
            const personajes = this.obtenerPersonajes(categoria);
            personajes.forEach((personaje, index) => {
                if (index < 5) {
                    const card = this.generarTarjetaPersonaje(personaje);
                    charactersContainer.appendChild(card);
                }
            });
            categoryContainer.appendChild(charactersContainer);
    
            this.container.appendChild(categoryContainer);
        });
    }
}
  
export default Categorias;