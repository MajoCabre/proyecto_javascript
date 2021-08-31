const carrito = localStorage.getItem("carrito");

if (carrito) {
    const listadoDeTortas = JSON.parse(carrito);

    listadoDeTortas.forEach(element => {

        $("#listCarrito").append(
            `<li>
            "Usted compró: " ${element.nombre}";
        </li>`)
    })
} else {
    $("#carritoVacio").html("El carrito está vacio :(")
};;