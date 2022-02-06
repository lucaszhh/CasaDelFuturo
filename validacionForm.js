const formulario = document.getElementById("my-form");
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	mensaje: /^[a-zA-ZÀ-ÿ\s]{20,200}$/ // 7 a 14 numeros.
}

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    console.log("Funcion para validar y enviar formulario en js")
    // 1) obtener el nombre y apellido y validarlos
    // 2) obtener el email y validarlo
    var nombre = document.querySelector("#entry-nombre");
    var email = document.querySelector("#entry-email");
    var mensaje = document.querySelector("#entry-mensaje");

    // mensaje de prueba
    // alert(`Mensaje de ${nombre.value} con email ${email.value}: ${mensaje.value}`);

    if(!expresiones.nombre.test(nombre.value)){
        alert(`No se pudo enviar el correo, nombre y/o apellido incorrectos`);
        return false;
    }
    if(!expresiones.correo.test(email.value)){
        alert(`No se pudo enviar el correo, email incorrecto`);
        return false;
    }

    // 3) obtener el texto o cuerpo del correo y validarlo
    // console.log(mensaje.value)
    // console.log(mensaje.value.length)
    
    if(!(mensaje.value.length >= 20 & mensaje.value.length <= 200)){
        alert(`No se pudo enviar el correo, mensaje incorrecto`);
        return false;
    }

    // 4) Enviar el correo
    // Acá va el codigo para enviar un correo

    // 5) Mostrar un mensaje de enviado y recargar o algo
    alert(`${nombre.value} tú mensaje se ha enviado correctamente!`);
    formulario.reset();
    return true;
});
