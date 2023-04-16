const btnComenzar = document.querySelector("#botonComenzar");

btnComenzar.addEventListener("click", function () {

    const nombreUsuario = document.querySelector("#nombreUsuario");
    const zonaUsuario = document.querySelector("#opcionZona");

    if (nombreUsuario.value != "" && zonaUsuario.value != "") {
        calcularPrestamo(nombreUsuario.value, zonaUsuario.value)


    } else {
        Swal.fire({
            icon: 'error',
            title: 'DATOS INCORRECTOS',
            text: 'Hay campos vacios',
        });

        Toastify({
            text: "Por favor, complete todos los campos",
            backgroundColor: "red",
            position: "center",
            duration: 2000,
            gravity: "top",
            position: "right",
        }).showToast();
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

    const resultadosContainer = document.getElementById("resultadosSimulacion");
    resultadosContainer.innerHTML = `<h2>Las opciones de inversión que le brinda ${zonaBancoElegido.nombre} son:</h2>
    <ol type="disc">
        <li> - 1. Primera opción: 1 mes, ${plazo1} de interés</li>
        <li> - 2. Segunda opción: 6 meses, ${plazo6} de interés</li>
        <li> - 3. Tercera opción: 12 meses,  ${plazo12} de interés</li>
    </ol>`;

    function calcularPlazo(monto, interes, meses) {
        const plazo = ((monto * (1 + (interes / 100)) ** meses) * 100) / 100;
        return plazo
    }


    Swal.fire
        ({
            icon: 'success',
            title: 'DATOS CORRECTOS',
            html: 'Finalizando su simulación',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = 100
            }
        });
}