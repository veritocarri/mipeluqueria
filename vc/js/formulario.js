
// eventos
/* let boton = document.getElementById("btnPrincipal");
let email = document.getElementById("email");
boton.onclick = () => {
    console.log("clickeaste sobre el boton Enviar");
}; 

 email.onclick = () => {
    var areaLibre= "<p class='text-white bg-success p-3'>Clickeaste sobre el campo Email!</p>";
    document.getElementById("areaLibre").innerHTML = areaLibre;
};
nombre.onclick = () => {
    areaLibre = "<p class='text-white bg-success p-3'>Clickeaste sobre el campo Nombre!</p>";
    document.getElementById("areaLibre").innerHTML = areaLibre;
}
  
servicio.addEventListener("change", obtenerServicios);
  */
//opciones dentro de servicios
function obtenerServicios() {
    var sercicio_seleccionado = document.getElementById("servicio").value;

    if (sercicio_seleccionado == "Tintura") {
        var servicios = ["Wella", "loreal", "Alphaparf"];
    } else if (sercicio_seleccionado == "Mechas") {
        var servicios = ["iluminacion", "baby light", "brillitos", "cintas"];
    } else if (sercicio_seleccionado == "Balayage") {
        var servicios = ["Desgaste", "Baño de luz", "Degrade de tonos"];
    } else if (sercicio_seleccionado == "Alisado") {
        var servicios = ["Anti frizz", "Reductor de volumen", "Extra Lacio"];

    } else if (sercicio_seleccionado == "Tratamientos") {
        var servicios = ["Genoma", "Botulinica", "Cocada"];
    }

    var contenido = "<h3>servicio:</h3>";
    contenido += "<ul>";

    for (let servicio of servicios) {
        contenido += "<li>" + servicio + "</li>";
    }

    contenido += "</ul>";
    document.getElementById("areaLibre").innerHTML = contenido;
}



//Dom



let opcion = document.createElement("option");
opcion.innerHTML = "Mechas Californianas";
var servicioNew = document.getElementById("servicio");
servicioNew.appendChild(opcion);
let opcion2 = document.createElement("option");
opcion2.innerHTML = "Nutricion Intensa";
var servicioNew = document.getElementById("servicio");
servicioNew.appendChild(opcion2);


let opcion3 = document.createElement("option");
opcion3.innerHTML = "19pm a 20pm";
var servicioNew = document.getElementById("horario");
servicioNew.appendChild(opcion3);



class DatosFormulario {
    constructor(mi_formulario) {
        this.nombre = mi_formulario[0];
        this.email = mi_formulario[1];
        this.turno = mi_formulario[2];
        this.horario = mi_formulario[3];
        this.servicio = mi_formulario[4];
        this.consulta = mi_formulario[5];
    }
}

// Envio los datos de mi_formulario y los guardo en un LocalStorage
function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var turno = document.getElementById("turno").value;
    var horario = document.getElementById("horario").value;
    var servicio = document.getElementById("servicio").value;
    var consulta = document.getElementById("consulta").value;

    if ((nombre == "") || (nombre.length < 3)) {
        let msje = "Por favor Ingrese su Nombre";
        document.getElementById("areaLibre").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }

    if ((email == "") || (!email.includes("@"))) {
        let msje = "Por favor ingrese su Email";
        document.getElementById("areaLibre").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }

    localStorage.setItem("mi_formulario", JSON.stringify([nombre, email, turno, horario, servicio, consulta]));
    document.getElementById("areaLibre").innerHTML = "<p class='text-white bg-success p-3'>Su Turno se ha reservado exitosamente! Revise su casilla de Email, en el cual se le recordará todos los detalles del turno asignado, Muchas Gracias! </p>";
}

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("mi_formulario"));
    var mi_formulario = new DatosFormulario(datos);
    document.getElementById("nombre").value = mi_formulario.nombre;
    document.getElementById("email").value = mi_formulario.email;
    document.getElementById("turno").value = mi_formulario.turno;
    document.getElementById("horario").value = mi_formulario.horario;
    document.getElementById("servicio").value = mi_formulario.servicio;
    document.getElementById("consulta").value = mi_formulario.consulta
    document.getElementById("areaLibre").innerHTML = "<p class='text-white bg-black p-3'>Los datos se cargaron exitosamente!</p>";

}

function borrarDatos() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("turno").value = "";
    document.getElementById("horario").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("consulta").value = "";
    localStorage.clear();
    document.getElementById("areaLibre").innerHTML = "<p class='text-white bg-black p-3'>Los datos se eliminaron correctamente!</p>";
}

$("#enviar_datos").click(function () {
    enviarDatos();
});
$("#borrar_datos").click(function () {
    borrarDatos();
});