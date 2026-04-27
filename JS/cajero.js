/* Función para retirar dinero */
function retirar() {
    let monto = parseInt(document.getElementById("monto").value);
    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un Monto Válido");
        return;
    }

    // Guardar el monto original para mostrarlo después
    let original = monto;
    // Cálculo de billetes
    // Cantidad de billetes de 100
    let b100 = Math.floor(monto / 100); 
    monto = monto % 100;
    // Cantidad de billetes de 50
    let b50 = Math.floor(monto / 50);
    monto = monto % 50;
    // Cantidad de billetes de 20
    let b20 = Math.floor(monto / 20);
    monto = monto % 20;
    // Cantidad de billetes de 10
    let b10 = Math.floor(monto / 10);
    // Cantidad total de billetes entregados
    let totalBilletes = b100 + b50 + b20 + b10;

    // Monto Retirado
    document.getElementById("montoFinal").innerText = original;
    // Total billetes
    document.getElementById("totalBilletes").innerText = totalBilletes;
    // Desglose de Billetes
    document.getElementById("b100").innerText = b100;
    document.getElementById("b50").innerText = b50;
    document.getElementById("b20").innerText = b20;
    document.getElementById("b10").innerText = b10;
    // Mostrar resultado al hacer click en Retirar
    document.getElementById("detalleBilletes").style.display = "block";
    document.querySelector(".total").classList.add("mostrar");
}

// Función para limpiar los resultados y resetear el formulario
function limpiar() {
    // Limpiar input
    document.getElementById("monto").value = "";
    // Reiniciar Monto Retirado
    document.getElementById("montoFinal").innerText = "0";
    // Reset total billetes
    document.getElementById("totalBilletes").innerText = "0";
    // Reset billetes
    document.getElementById("b100").innerText = "0";
    document.getElementById("b50").innerText = "0";
    document.getElementById("b20").innerText = "0";
    document.getElementById("b10").innerText = "0";
    // Ocultar desglose
    document.getElementById("detalleBilletes").style.display = "none";
    // Ocultar total animado
    document.querySelector(".total").classList.remove("mostrar");
}