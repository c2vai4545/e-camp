class Render {
    constructor(container) {
        this.container = container;
    }

    generarPunto(category) {
        let color;
        if (category === 'Héroes') {
            color = 'blue';
        } else if (category === 'Villanos') {
            color = 'red';
        } else {
            color = 'yellow';
        }
        const punto = document.createElement("div");
        punto.classList.add("col-md-2", "rounded-circle", "text-white", "d-flex", "justify-content-center", "align-items-center");
        punto.style.width = "30px";
        punto.style.height = "30px";
        punto.style.marginTop = "20%";
        punto.style.backgroundColor = color;
        return punto;
    }

    generarTarjetaCategoria(categoria) {
        console.log('categoria.imagen:', categoria.imagen);
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("m-3"); 
        const card = document.createElement("div");
        card.classList.add("card", "m-3");
        const img = document.createElement("img");
        img.src = categoria.imagen;
        img.classList.add("card-img-top", "img-card");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = categoria.nombre; // access the nombre property of the categoria object
        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = `Categoria: ${categoria.nombre}`;
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
        img.src = character.imagen;
        img.classList.add("card-img-top", "img-card");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = character.name;
        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = `Height: ${character.height} cm, Mass: ${character.mass} kg`;
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
        return card;
    }
  
    renderizarCategorias(categorias) {
        this.container.innerHTML = '';
        categorias.forEach((categoria) => {
            const categoryContainer = document.createElement("div");
            categoryContainer.classList.add("row");
        
            const puntoContainer = document.createElement("div");
            puntoContainer.classList.add("col-md-2");
            const punto = this.generarPunto(categoria.nombre);
            puntoContainer.appendChild(punto);
            categoryContainer.appendChild(puntoContainer);
        
            const categoriaContainer = document.createElement("div");
            categoriaContainer.classList.add("col-md-5");
            const tarjetaCategoria = this.generarTarjetaCategoria(categoria);
            categoriaContainer.appendChild(tarjetaCategoria);
            categoryContainer.appendChild(categoriaContainer);
        
            const personajesContainer = document.createElement("div");
            personajesContainer.classList.add("col-md-5");
            const personajes = categoria.personajes.slice(0, 5); // solo tomar los 5 primeros personajes
            personajes.forEach((personaje) => {
                const tarjetaPersonaje = this.generarTarjetaPersonaje(personaje);
                personajesContainer.appendChild(tarjetaPersonaje);
            });
            categoryContainer.appendChild(personajesContainer);
        
            this.container.appendChild(categoryContainer);
        });
    }
}  

export default Render;
