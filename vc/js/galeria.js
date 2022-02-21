const servicios = [
    {nombre:"Balayage", imagen:"color11.jpg", precio:"9000"},
    {nombre:"Corte", imagen:"pelos8.jpg", precio:"2000"}, 
    {nombre:"Alisado", imagen:"pelos3.jpg", precio:"11000"},
    {nombre:"Blindaje", imagen:"pelos4.jpg", precio:"9000"}, 
    {nombre:"Tintura", imagen:"color9.jpg", precio:"4500"},
    {nombre:"Mechas", imagen:"color2.jpg", precio:"7500"}]; 


class Pelo {
constructor (servicio) {
this.nombre = servicio.nombre;
this.imagen = servicio.imagen;
this.importe = servicio.precio;
}

aplicarDescuento() {
this.precio = this.precio * 0.90;
}
}

function guardarServicios(servicios) {
localStorage.setItem("servicios", JSON.stringify(servicios));
console.log("Los servicios se guardaron correctamente!");
}

function cargarServicios() {
console.log("Los modelos se cargaron correctamente!");
return JSON.parse(localStorage.getItem("servicios"));
}

function borrarServicios() {
localStorage.removeItem("servicios");
}



// actualizar contenidos
let contenido = "";

for (let servicio_cargado of servicios) {
//for (let servicio_cargado of servicios_cargados) {
let pelo = new Pelo(servicio_cargado);
//pelo.aplicarDescuento();
contenido += "<div class='col-md-4 py-3'>";
contenido += "<div class='card'>";
contenido += "<h5 class='card-title p-3 text-black text-uppercase fw-bold'>" + pelo.nombre + "</h5>";
contenido += "<img src='images/" + pelo.imagen + "' class='card-img-top' alt='" + pelo.nombre + "'>";
contenido += "<div class='card-body'>";
contenido += "<div class='row mb-2'>";
contenido += "<div class='col-md-6 text-black text-uppercase fw-bold'><span>PRECIO CONTADO</span></div>";
contenido += "<div class='col-md-6 text-black text-uppercase fw-bold text-end'><span>$" + pelo.importe + "</span></div>";
contenido += "</div>";
contenido += "<div class='p-3 mb-2 bg-light text-dark text-center'>Reserva tu cita completando tus datos en la seccion de Turnos</div>"
contenido += "<div class='d-grid gap-2 mb-2'><a href='./formulario.html' class='btn btn-primary'>Reservar Turno</a></div>";
contenido += "</div>";
contenido += "</div>";
contenido += "</div>";
}

let pagina_servicios = document.getElementById("servicios");
pagina_servicios.innerHTML = contenido;



