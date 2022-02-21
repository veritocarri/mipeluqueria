//array de productos
 const productos = [{nombre:"Bain Volumifique",id:"1", imagen:"shampoo1ok.jpg", descripcion:["Shampoo  generador de volumen.Cabelllos Finos"], precio:5500},
 {nombre:"Bain Discipline", id:"2",imagen:"shampoo2ok.jpg", descripcion:["Shampoo disciplinante de la Hebra Capilar-Lacios/Ondulados"], precio:5450},
 {nombre:"Bain Nutritive",id:"3", imagen:"shampoo3ok.jpg", descripcion:["Shampoo de Nutrición, Cabellos ligeramente secos"], precio:5800},
 {nombre:"Bain     'Densité'",id:"4", imagen:"shampoo4ok.jpeg", descripcion:["Shampoo engrosador de Cabello.Aporta densidad"], precio:5600},
 {nombre:"Bain Dermo Calm", id:"5",imagen:"shampoo5.jpg", descripcion:["Shampoo calmante y suavizante de cuero cabelludo"], precio:5650},
 {nombre:"Bain Vital Dermo calm",id:"6", imagen:"shampoo6.png", descripcion:["Shampoo Calmante.Cuero Cabelludo Sensible"], precio:5700},
 {nombre:"Bain Oleo Relax",id:"7", imagen:"shampoo7.jpg", descripcion:["Shampoo relajante de volumen y frizz-Cabellos porosos"], precio:5750},
 {nombre:" Cream Lait Vital",id:"8", imagen:"acondicionador1.jfif", descripcion:["Acondicionador ligeramente Nutritivo.Cabello semi Seco"], precio:4800},
 {nombre:"Fondant Chromatique",id:"9", imagen:"acondicionador2.jfif", descripcion:["Crema Protectora de Color y Mechas-Cabellos Procesados"], precio:4750},
 {nombre:"Ciment Anti-Usure",id:"10", imagen:"acondicionador3.jfif", descripcion:["Acondicionador ligero de Reestructuración Capilar"], precio:5100},
 {nombre:"Masque Oleo Relax",id:"11", imagen:"mascara.jpg", descripcion:["Mascara Relajante de volumen, Cabellos encrespados"], precio:7500},
 {nombre:"Masque Extencioniste",id:"12", imagen:"mascara1.jfif", descripcion:["Mascara para Cabellos debilitados y Dañados"], precio:6900},
 {nombre:"Masque Magistral",id:"13", imagen:"mascara2.jpg", descripcion:["Mascara Nutritiva, Para Cabellos Secos y Deshifratados"], precio:8000},
 {nombre:"Masque Therapiste",id:"14", imagen:"mascara3.jpg", descripcion:["Mascara para Cabello dañado y procesado en exceso "], precio:7100},
 {nombre:"Masque Reconstituant",id:"15", imagen:"mascara4.png", descripcion:["Mascara para cabellos débiles y propensos a la caída por rotura"], precio:7200},
 {nombre:"Masque Chronologiste",id:"16", imagen:"mascara6ok.jpg", descripcion:["Mascara que  aporta Hidratación y Brillo Extremo"], precio:7350},
 {nombre:"Serum Therapiste",id:"17", imagen:"serum4.jpg", descripcion:["Serum ligero para cabellos dañados y procesados quimicamente"], precio:8650},
 {nombre:"Serum Oleo Relax",id:"18", imagen:"serum1.jpg", descripcion:["Serum para Cabellos Secos, Porosos y con mucho frizz"], precio:8500}];

//cargo los productos
function cargarProductos() {
    let productos = cargarProductosLocal();//esta es mi nueva funcion que se cargo en local
    let div_productos = document.getElementById("productos");
  
    //recorro el array de productos
    for (let producto of productos) {
        let columna = document.createElement("div");
        columna.className = "col-2 py-3";
        let encabezado = document.createElement("h2");
        encabezado.className = "text-center text-white-50 bg-dark p-1";
        encabezado.innerHTML = producto.nombre;
        let card = document.createElement("div");
        card.className = "card";
        let imagen = document.createElement("img");
        imagen.className = "card-img-top";
        imagen.src = "images/" + producto.imagen;
        imagen.onclick= () => {
            infoProd(producto.nombre , producto.precio);
        }
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let parrafo = document.createElement("p");
        parrafo.className = "card-text";
        let lista = document.createElement("ul");
        lista.className = "list-group list-group-flush";
        let precio = document.createElement("p");
        precio.className = "text-center text-white-50 bg-dark   p-1 ";
        precio.innerHTML =   " Precio: $ " + producto.precio  ;
       // let boton = document.createElement("button")
        //boton.className ="<div class='d-grid gap-2 mb-2'><a href='#'  text-white bg-danger class='btn btn-primary' id='btnComprar'>";
       // boton.innerHTML ="comprar"
        
      


        for (let descrip of producto.descripcion) {
            let item = document.createElement("li");
            item.className = "list-group-item";
            item.innerHTML = descrip;
            lista.appendChild(item);
        } 

        let boton = document.createElement("button");
        boton.className = "btn btn-primary";
        boton.innerHTML = "Agregar al Carrito (+)";
        boton.onclick = () => {
        agregarProducto(producto.id);
        }






        parrafo.appendChild(lista);
        card_body.appendChild(parrafo);
        card.appendChild(imagen);
        card.appendChild(card_body);
        card_body.appendChild(precio);
        columna.appendChild(encabezado);
        columna.appendChild(card);
        div_productos.appendChild(columna);
        card_body.appendChild(boton);
        
        
    }
}

//informacion del producto al hacer clik sobre la imagen
function infoProd(nombre, precio) {
    let texto = `<h4>Productoo Seleccionado:</h4>
    <p>Nombre: <strong>${nombre}</strong><br>
    Precio: <strong>${precio}</strong></p>`;
    document.getElementById("productos").innerHTML = `<div class='text-white bg-dark p-3'>${texto}</div>`;
} 

//guardo el array de productos en la local storage
function guardarProductosLocal(productos){ 
    console.log("se guardo en el local");
    localStorage.setItem("productos", JSON.stringify(productos));
}

//los cargo desde la local storage
function cargarProductosLocal() {
    console.log("local storage ok");
    return JSON.parse(localStorage.getItem("productos")); 
}
 
//actualizo el carrito 
function actualizarCompra() {
    if (localStorage.getItem("total_carrito")) {
        return localStorage.getItem("total_carrito");
    }

    return 0;
}


//actualizo los items del carrito
function actualizarCarrito() {
    let total = actualizarCompra();
    $("#datos_compra").html(total + " Producto(s)");
}

   
//si la propiedad id coincide me va a devolver ese valor
function elegirProd(id) {
    let productos = cargarProductosLocal();
    return productos.find(x => x.id == id);    
}
//cargo la compra
function cargarCompra() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

//me va manteniendo el historial de la local storage
function agregarProducto(id){
    let producto = elegirProd(id);
    let productos = cargarCompra();
    productos.push(producto); //pusheo el producto que busco
    localStorage.setItem("carrito", JSON.stringify(productos));
    localStorage.setItem("total_carrito", productos.length);
    actualizarCarrito();
}

//vacia el carrito
function borrarCarrito(){
    localStorage.removeItem("carrito");
    localStorage.removeItem("total_carrito");
    actualizarCarrito();
}

document.getElementById("borrar_carrito").addEventListener("click", borrarCarrito);