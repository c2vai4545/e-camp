const Libros = [
    {
        titulo: "Libro 1",
        sinopsis: "Sisnopsis del libro 1",
        fecha: "12 de abril del 1999",
        editorial: "Conejo",
        paginas: 255,
        autor: "Pedro Veldebenito",
        digital: false,
    },
    {
        titulo: "Libro 2",
        sinopsis: "Sisnopsis del libro 2",
        fecha: "12 de abril del 2003",
        editorial: "Conejo rabioso",
        paginas: 100,
        autor: "Pedro Veldebenito",
        digital: false,
    },
    {
        titulo: "Libro 3",
        sinopsis: "Sisnopsis del libro 3",
        fecha: "12 de abril del 2007",
        editorial: "Canguro agresivo",
        paginas: 322,
        autor: "Marcelo Emmott",
        digital: true,
    },
];
const contenedor = document.querySelector(".libros-container");
let html = '';

for (const libro of Libros) {
    	html += `
        <article class='
    `
}