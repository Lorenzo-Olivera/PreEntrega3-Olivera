const formulario = document.getElementById('formularioContacto')
const inputNombre = document.getElementById('nombreUsuario')
const inputApellido = document.getElementById('apellidoUsuario')
const titulo = document.getElementById('titulo')

// se creo una funcion para utilizar promesa

function guardarInfoUsuario() {
    return new Promise((resolve, reject) => {
        const infoUsuario = {
            nombre: inputNombre.value,
            apellido: inputApellido.value,
        }
        localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario))
        resolve(infoUsuario)
    });
}


//click sobre el boton ingresar
formulario.onsubmit = (e) => {
    e.preventDefault()
    guardarInfoUsuario()
        .then(infoUsuario => {
            formulario.remove()
            titulo.innerText = `Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}, puede continuar en la sección "simulador"`
            console.log("datosUsuario", infoUsuario);
        })
        .catch(error => {
            console.error(error);
        });

    Swal.fire({
        icon: 'success',
        title: 'USUARIO CORRECTO',
        text: 'Se ha cargado correctamente su usuario',
    });

}



// mirar si en storage existe infoUsuario
const infoUsuario = JSON.parse(localStorage.getItem('infoUsuario'))
if (infoUsuario) {
    formulario.remove()
    titulo.innerText = `Bienvenido nuevamente ${infoUsuario.nombre} ${infoUsuario.apellido}, puede continuar en la sección "simulador"`
    console.log("datosUsuario", infoUsuario);
}



// se simula la carga de datos de usuarios con fetch y api

// Se hace una solicitud GET para obtener todos los usuarios
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        // Hacer algo con los datos obtenidos
        console.log(data);
    })
    .catch(error => {
        // Manejar el error
        console.error(error);
    });