//guardo local
guardarProductosLocal(productos);//llama al array de productos inicial
// Cargo los productos
cargarProductos();
actualizarCarrito();
//cargarDatos(datos);




class DatosFormulario1 {
    constructor(formularioContacto) {
        this.nombre =formularioContacto[0];
        this.email = formularioContacto[1];
        this.telefono =formularioContacto[2];
        this.prodBuscado= formularioContacto[3];

    }}
    function enviarDatos1() {
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var telefono= document.getElementById("telefono").value;
        var prodBuscado = document.getElementById("prodBuscado").value;

        if ((nombre == "") || (nombre.length < 3)) {
            let msje = "Por favor Ingrese su Nombre";
            document.getElementById("notificacion").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
            return false;
        }
    
        if ((email == "") || (!email.includes("@"))) {
            let msje = "Por favor ingrese su Email";
            document.getElementById("notificacion").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
            return false;
        }
        if ((telefono == "") || (telefono.length < 8)) {
            let msje = "Por favor Ingrese su Nro de Telefono";
            document.getElementById("notificacion").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
            return false;
        }
        if ((prodBuscado == "") || (prodBuscado.length < 6)) {
            let msje = "Por favor Ingrese el producto que esta buscando o Deje aqui su comentario";
            document.getElementById("notificacion").innerHTML = "<p class='text-white bg-danger p-3'>" + msje + "</p>";
            return false;
        }
        localStorage.setItem("formularioContacto", JSON.stringify([nombre, email, telefono, prodBuscado, ]));
        document.getElementById("notificacion").innerHTML = "<p class='text-white bg-success p-3'>Los datos se han enviado correctamente, a la Brevedad será contactado por uno de nuestros vendedores, Muchas Gracias</p>";
    }
    function cargarDatos1() {
        var datos = JSON.parse(localStorage.getItem("formularioContacto"));
        var formularioContacto= new DatosFormulario1(datos);
        document.getElementById("nombre").value = formularioContacto.nombre;
        document.getElementById("email").value = formularioContacto.email;
        document.getElementById("telefono").value = formularioContacto.telefono;
        document.getElementById("prodBuscado").value = formularioContacto.prodBuscado;//
    

       // document.getElementById("notificacion").innerHTML = "<p class='text-white bg-success p-3'>Los datos se cargaron exitosamente!</p>";

}


$("#botonContacto").click(function () {
    enviarDatos1();
});