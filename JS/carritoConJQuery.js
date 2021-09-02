const carrito = localStorage.getItem("carrito");

if (carrito) {
    const listadoDeTortas = JSON.parse(carrito);

    listadoDeTortas.forEach(element => {

        $("#listCarrito").append(
            `<li>
            Usted compró: ${element.nombre} con un costo de: $ ${element.precio}
        </li>`)
    })
} else {
    $("#carritoVacio").html("El carrito está vacio :(")
};;