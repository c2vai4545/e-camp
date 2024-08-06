// Lista de productos predefinidos
const productos = [
    { nombre: "Tomates", unidad: "1kg", valor: 2500 },
    { nombre: "Pan", unidad: "500gr", valor: 1000 },
    { nombre: "Papas", unidad: "1kg", valor: 1100 },
    { nombre: "Leche", unidad: "1Lt", valor: 900 }
];

// Clase Producto
class Producto {
    constructor(nombre, unidad, valor) {
        this.nombre = nombre;
        this.unidad = unidad;
        this.valor = valor;
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.actualizarTotal();
    }

    actualizarTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.valor;
        });
        document.getElementById("total").innerHTML = `Total: $${total.toFixed(2)}`;
    }

    mostrarDetalles() {
        let detalles = "";
        this.productos.forEach(producto => {
            detalles += `${producto.nombre} (${producto.unidad}): $${producto.valor}<br>`;
        });
        document.getElementById("carrito-productos").innerHTML = detalles;
    }

    finalizarCompra() {
        document.getElementById("finalizar-compra").style.display = "none";
        document.getElementById("confirmar-compra").style.display = "block";
        this.mostrarDetalles();
    }
}

// Instanciar carrito
const carrito = new Carrito();

// Generar lista de productos dinámicamente
productos.forEach(producto => {
    let li = document.createElement("li");
    li.innerHTML = `${producto.nombre} (${producto.unidad}): $${producto.valor} <button class="btn btn-primary agregar-al-carrito">Agregar al carrito</button>`;
    li.setAttribute("data-nombre", producto.nombre); // Agrega atributo data-nombre
    li.style.textAlign = "right"; // Agrega estilo para alinear botones a la derecha
    document.getElementById("lista-productos").appendChild(li);
});

// Agregar evento de click a los botones "Agregar al carrito"
document.querySelectorAll(".agregar-al-carrito").forEach(button => {
    button.addEventListener("click", () => {
        let li = button.parentNode; // Accede al elemento <li> que contiene el botón
        let nombre = li.getAttribute("data-nombre"); // Obtiene el nombre del producto desde el atributo data-nombre
        let producto = productos.find(p => p.nombre === nombre);
        carrito.agregarProducto(new Producto(producto.nombre, producto.unidad, producto.valor));
    });
});

// Agregar evento de click al botón "Finalizar compra"
document.getElementById("finalizar-compra").addEventListener("click", () => {
    carrito.finalizarCompra();
});

// Agregar evento de click al botón "Confirmar compra"
document.getElementById("confirmar-compra").addEventListener("click", () => {
    alert("Gracias por su compra!");
    // Aquí puedes agregar la lógica para procesar la compra
});