const carrito = localStorage.getItem("carrito");

if (carrito) {
    const listadoDeTortas = JSON.parse(carrito);
    const listadoDeTortasHtml = document.getElementById("listCarrito")

    listadoDeTortas.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = "Usted compró: " + element.nombre;
        listadoDeTortasHtml.appendChild(li);
    });
} else {
    const carritoVacioHtml = document.getElementById("carritoVacio")
    const p = document.createElement("p");
    p.innerHTML = "El carrito está vacio :(";
    carritoVacioHtml.appendChild(p);
}