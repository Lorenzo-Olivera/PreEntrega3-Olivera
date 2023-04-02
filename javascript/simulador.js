const btnComenzar = document.querySelector("#botonComenzar");

btnComenzar.addEventListener("click", function () {

    const nombreUsuario = document.querySelector("#nombreUsuario");
    const zonaUsuario = document.querySelector("#opcionZona");

    if (nombreUsuario.value != "" && zonaUsuario.value != "") {
        calcularPrestamo(nombreUsuario.value, zonaUsuario.value)
    } else {
        alert("usted tiene campos vacios");
    }

});

function calcularPrestamo(nombreUsr, znaUsr) {
    const monto = document.querySelector("#monto");
    console.log("montoInv", monto.value);
    const datosBancos =
        [
            {
                nombre: "Banco Ciudad",
                anio: 1878,
                zona: "caba",
                tasaUno: 6,
                tasaDos: 65,
                tasaTres: 110,
                prestamos: "Jubilados",
            },
            {
                nombre: "Banco Nacion",
                anio: 1891,
                zona: "pba",
                tasaUno: 6,
                tasaDos: 60,
                tasaTres: 112,
                prestamos: "Efectivo",
            },
            {
                nombre: "Banco icbc",
                anio: 1984,
                zona: "otro",
                tasaUno: 5,
                tasaDos: 58,
                tasaTres: 107,
                prestamos: "Hipotecarios uva",
            },
        ]

    let zonaBancoElegido = datosBancos.find(datosBancos => datosBancos.zona === znaUsr);
    const plazo1 = calcularPlazo(monto.value, zonaBancoElegido.tasaUno, 1);
    const plazo6 = calcularPlazo(monto.value, zonaBancoElegido.tasaDos, 6);
    const plazo12 = calcularPlazo(monto.value, zonaBancoElegido.tasaTres, 12);

    console.log(znaUsr);

    alert(`Las opciones de inversión que le brinda ${zonaBancoElegido.nombre} son: 
    - 1. ${plazo1} de interes a 1 mes 
    - 2. ${plazo6} de intereses a 6 meses 
    - 3. ${plazo12} de intereses a 12 meses`)

    alert("Gracias por elegirnos una vez más.")
}

function calcularPlazo(monto, interes, meses) {
    const plazo = ((monto * (1 + (interes / 100)) ** meses) * 100) / 100;
    return plazo

}
