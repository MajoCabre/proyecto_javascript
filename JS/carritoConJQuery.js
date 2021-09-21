const carrito = localStorage.getItem("carrito");

if (carrito) {
    const listadoDeTortas = JSON.parse(carrito);
    let totalCarrito = 0;

    listadoDeTortas
        .forEach(miItem => {
            const totalItem = miItem.product.precio * miItem.cantidad;
            const htmlToRender = `<div class="divCarrito">
<p class="parrafoCarrito"> ${miItem.cantidad}x - ${miItem.product.nombre} con un costo de: $ ${totalItem} </p>
</div>`;

            $("#listCarrito").append(htmlToRender);

            totalCarrito = totalCarrito + totalItem;
        })

    $("#totalCarrito").html(`El total de su compra es: ${totalCarrito}$`);
} else {
    $("#carritoVacio").html("El carrito está vacio :(")
};


$("#eliminarCarrito")
    .on("click", function () {

        localStorage.clear();
        $("#listCarrito").remove();
        $("#totalCarrito").remove();
        $("#carritoVacio").html("El carrito está vacio :(")
    });