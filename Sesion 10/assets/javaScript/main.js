const inputPeso = $("#peso");
const selectPlaneta = $("#planeta");
const botonCalcular = $("#calcular");
const contenedor = $("#contenedor");
const GRAVEDAD_TIERRA = 9.8;

contenedor.hide();

function calcularPeso() {
    const peso = inputPeso.val();
    const gravedadPlaneta = selectPlaneta.val();
    const planetaSeleccionado = $("#planeta option:selected").text();
    const nuevoPeso = (peso * gravedadPlaneta) / GRAVEDAD_TIERRA;

    mostrarResultado(nuevoPeso, planetaSeleccionado);
}

function mostrarResultado(peso, planeta) {
    $("#TuPesoEn").text("Tu peso en " + planeta + " es:");
    $("#pesoResultado").text(peso);
    contenedor.show();
}

botonCalcular.click(calcularPeso);
