// Obtener los elementos del DOM
const sidebar = document.querySelector('.sidebar');
const selectedCharactersContainer = document.querySelector('#selected-characters');
const characterCards = document.querySelectorAll('.card');

// Definir los personajes
const characters = [
  { name: "Luke Skywalker", height: 172, weight: 70, section: "Heroes" },
  { name: "Han Solo", height: 180, weight: 80, section: "Heroes" },
  { name: "Darth Vader", height: 202, weight: 120, section: "Villains" },
  { name: "Emperor Palpatine", height: 170, weight: 60, section: "Villains" },
  // Agrega más personajes aquí...
];

// Función para crear los puntos en la barra lateral
function createSidebarPoints() {
  const points = [];
  for (let i = 0; i < characters.length; i += 5) {
    const point = document.createElement('div');
    point.classList.add('sidebar-point');
    point.dataset.point = `${i + 1}-${i + 5}`;
    points.push(point);
  }
  sidebar.innerHTML = '';
  points.forEach((point) => sidebar.appendChild(point));
}

// Función para seleccionar personajes
function selectCharacters() {
  characterCards.forEach((card) => {
    card.addEventListener('click', () => {
      const characterName = card.querySelector('.card-title').textContent;
      const character = characters.find((char) => char.name === characterName);
      if (character) {
        const selectedCharacter = document.createElement('div');
        selectedCharacter.classList.add('selected-character');
        selectedCharacter.innerHTML = `
          <h5>${character.name}</h5>
          <p>Height: ${character.height} cm, Weight: ${character.weight} kg</p>
        `;
        selectedCharactersContainer.appendChild(selectedCharacter);
      }
    });
  });
}

// Función para limitar la cantidad de personajes seleccionados
function limitSelectedCharacters() {
  const selectedCharacters = selectedCharactersContainer.children;
  if (selectedCharacters.length > 5) {
    const oldestCharacter = selectedCharacters[0];
    oldestCharacter.remove();
  }
}

// Inicializar la aplicación
createSidebarPoints();
selectCharacters();

// Agregar evento para limitar la cantidad de personajes seleccionados
selectedCharactersContainer.addEventListener('DOMSubtreeModified', limitSelectedCharacters);
