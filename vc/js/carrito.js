function cargarProductosCarrito() {
    let productos_carrito = JSON.parse(localStorage.getItem("carrito"));
    let total = 0;
    let descuento = 0;
    let recargoTarjeta1 = 0;
    let recargoTarjeta2 = 0;
    let recargoTarjeta3 = 0;
    let cuota3 = 0;
    let cuota6 = 0;
    let cuota12 = 0;
    let contenido = "<table class='table'>";
    contenido += `<thead>
    <tr>
    <th scope="col">Producto</th>
    <th scope="col">Descripcion</th>
    <th scope="col">Precio</th>
    <th scope="col">Detalle Cuotas</th>
    </tr>
    </thead>
    <tbody>`;

    for (let producto of productos_carrito) {
        contenido += `<tr>
        <td><img src='images/${producto.imagen}' alt='${producto.imagen}' width='80'></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        </tr>`;
        total += producto.precio;

        descuento += producto.precio * 0.9;
        recargoTarjeta1 += producto.precio * 1.2;
        cuota3 += (producto.precio * 1.2) / 3;
        recargoTarjeta2 += producto.precio * 1.3;
        cuota6 += (producto.precio * 1.3) / 6;
        recargoTarjeta3 += producto.precio * 1.5;
        cuota12 += (producto.precio * 1.5) / 12;
    }

    contenido += `<tr>
    <td>&nbsp;</td>
    <td>Total</td>
    <td>$${total}</td>
    </tr>`;
    // document.getElementById("carrito").innerHTML = contenido;

    contenido += `<tr>
    <td>&nbsp;</td>
    <td>Total Pago en Efectivo</td>
    <td>$${descuento}</td>
    </tr>`;
    // document.getElementById("carrito").innerHTML = contenido;


    contenido += `<tr>
    <td>&nbsp;</td>
    <td>Pago  en 3 Cuotas</td>
    <td>$${recargoTarjeta1}
    </td><td>3 cuotas de $${cuota3} c/u </td>
    
</tr>`
        ;



    contenido += `<tr>
    <td>&nbsp;</td>
    <td>Pago en 6 Cuotas</td>
    <td>$${recargoTarjeta2}</td>
    </td><td>6 cuotas de $ ${cuota6} c/u </td>
    
    </tr>`;



    contenido += `<tr>
    <td>&nbsp;</td>
    <td>Pago en 12 Cuotas</td>
    <td>$${recargoTarjeta3}</td>
    </td><td>12 cuotas de $ ${cuota12}</td>

    </tr>
    </tbody>
    </table>`;



    document.getElementById("carrito").innerHTML = contenido;





}

// Actualizo el Contador de Productos del Carrito

//borrarCarrito();
actualizarCarrito();






class DatosFormulario2 {
    constructor(formularioCompra) {
        this.nombre = formularioCompra[0];
        this.email = formularioCompra[1];
        this.formaPago = formularioCompra[2];
        this.nroTarjeta = formularioCompra[3];
        this.codSeg = formularioCompra[4];
        this.importe = formularioCompra[5];
        this.dirEntrega = formularioCompra[6];
        this.localidad = formularioCompra[7];
        this.comentarios = formularioCompra[8];
    }
}

// Envio los datos de mi_formulario y los guardo en un LocalStorage
function enviarDatos2() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var formaPago = document.getElementById("formaPago").value;
    var nroTarjeta = document.getElementById("nroTarjeta").value;
    var codSeg = document.getElementById("codSeguridad").value;
    var importe = document.getElementById("importe").value;
    var dirEntrega = document.getElementById("dirEntrega").value;
    var localidad = document.getElementById("localidad").value;
    var comentarios = document.getElementById("comentarios").value;


    if ((nombre == "") || (nombre.length < 3)) {
        let msje = "Por favor Ingrese su Nombre";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }

    if ((email == "") || (!email.includes("@"))) {
        let msje = "Por favor ingrese su Email";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }
    if ((formaPago != "Efectivo") && (nroTarjeta.length < 16)) {
        let msje = "Por favor Ingese su Numero de Tarjeta ";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }else if ((formaPago != "Efectivo") && (codSeg.length < 3)) {
        let msje = "Por favor, Ingrese el Codigo de Seguridad de la Tarjeta";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }
    

    if ((importe == "") || (importe.length < 4)) {
        let msje = "Por favor Ingrese el importe de su Compra";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }

    if ((dirEntrega == "") || (dirEntrega.length < 4)) {
        let msje = "Por favor Ingrese la direccion de Entrega";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }

    if ((localidad == "") || (localidad.length < 3)) {
        let msje = "Por favor Ingrese su Barrio/ Localidad";
        document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
        return false;
    }



    localStorage.setItem("formularioCompra", JSON.stringify([nombre, email, formaPago, nroTarjeta, codSeg, importe, dirEntrega, localidad, comentarios]));
    document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-success p-3'>La Compra se ha realizado exitosamente! en unos segundos recibirá la confirmación de la misma a su casilla de Email</p>";
}

function cargarDatos2() {
    var datos = JSON.parse(localStorage.getItem("formularioCompra"));
    var formularioCompra = new DatosFormulario2(datos);
    document.getElementById("nombre").value = formularioCompra.nombre;
    document.getElementById("email").value = formularioCompra.email;
    document.getElementById("formaPago").value = formularioCompra.formaPago;
    document.getElementById("nroTarjeta").value = formularioCompra.nroTarjeta;
    document.getElementById("codSeguridad").value = formularioCompra.codSeg;
    document.getElementById("importe").value = formularioCompra.importe;
    document.getElementById("dirEntrega").value = formularioCompra.dirEntrega;
    document.getElementById("localidad").value = formularioCompra.localidad;
    document.getElementById("comentarios").value = formularioCompra.comentarios;


    document.getElementById("mensajeFinal").innerHTML = "<p class='text-white bg-success p-3'>Los datos se cargaron exitosamente!</p>";

}


$("#botonCompra").click(function () {
    enviarDatos2();
});