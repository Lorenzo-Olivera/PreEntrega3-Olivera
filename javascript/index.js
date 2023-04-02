const formulario = document.getElementById('formularioContacto')
const inputNombre = document.getElementById('nombreUsuario')
const inputApellido = document.getElementById('apellidoUsuario')
const titulo = document.getElementById('titulo')

//click sobre el boton ingresar
formulario.onsubmit = (e) => {
    e.preventDefault()
    const infoUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    }
    localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario))
    formulario.remove()
    titulo.innerText = `Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}, puede continuar en la sección "simulador"`
    console.log("datosUsuario", infoUsuario);
}



// mirar si en storage existe infoUsuario
const infoUsuario = JSON.parse(localStorage.getItem('infoUsuario'))
if (infoUsuario) {
    formulario.remove()
    titulo.innerText = `Bienvenido nuevamente ${infoUsuario.nombre} ${infoUsuario.apellido}, puede continuar en la sección "simulador"`
    console.log("datosUsuario", infoUsuario);
}
