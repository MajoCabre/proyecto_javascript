/**
 * Creo mi producto con la clase
 */

class Producto {
    nombre;
    precio;
    stock;
    codigo;

    constructor(nombre, precio, stock, codigo) {
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.stock = stock;
        this.codigo = codigo;
        this.venta = false;
    }

    obtenerStock() {
        return this.stock;
    }

    agregarItem() {
        this.stock = this.stock + 1;
    }

    eliminarItem() {
        this.venta = true;
        this.stock = this.stock - 1;
    }
}

/**
 * Creo mis objetos de productos
 */

const chocotortaSizeS = new Producto('Chocotorta S (11 x 7cm)', 500, 5, 4856);
const chocotortaSizeM = new Producto('Chocotorta M (12 x 12cm)', 700, 9, 4873);
const chocotortaSizeL = new Producto('Chocotorta L (25 x 17cm)', 1200, 5, 4886);
const chocotortaSizeXL = new Producto('Chocotorta XL 35 x 25cm)', 2000, 5, 4836);

const redvelvetS = new Producto('Redvelvet mini (10-12 porciones)', 800, 10, 3695);
const redvelvetM = new Producto('Redvelvet medium (16-18 porciones)', 1200, 8, 3675);
const redvelvetL = new Producto('Redvelvet grande (18-22 porciones)', 2300, 4, 3616);

const bananaS = new Producto('Banana mini (10-12 porciones)', 600, 3, 5345);
const bananaM = new Producto('Banana medium (16-18 porciones)', 1000, 7, 5371);
const bananaL = new Producto('Banana grande (18-22 porciones)', 1500, 5, 5328);

const carrotCakeS = new Producto('Carrot Cake mini (10-12 porciones)', 700, 4, 6232);
const carrotCakeM = new Producto('Carrot Cake medium (16-18 porciones)', 1300, 7, 6251);
const carrotCakeL = new Producto('Carrot Cake grande (18-22 porciones)', 2200, 3, 6228);

const vanilaCakeS = new Producto('Vanila Cake mini (10-12 porciones)', 400, 15, 1523);
const vanilaCakeM = new Producto('Vanila Cake medium (16-18 porciones)', 600, 7, 1522);
const vanilaCakeL = new Producto('Vanila Cake grande (18-22 porciones)', 1100, 9, 1581);

/*
 * Creo mi array de productos
 */

let chocotortaSize = [
    chocotortaSizeS,
    chocotortaSizeM,
    chocotortaSizeL,
    chocotortaSizeXL
];

let redvelvetSize = [
    redvelvetS,
    redvelvetM,
    redvelvetL,
];

let bananaSize = [
    bananaS,
    bananaM,
    bananaL
];

let carrotCakeSize = [
    carrotCakeS,
    carrotCakeM,
    carrotCakeL
];

let vanilaCakeSize = [
    vanilaCakeS,
    vanilaCakeM,
    vanilaCakeL
];

chocotortaSize.forEach(chocotorta => {

    $("#chocotortaSelect").append(
        `<option>
            ${chocotorta.nombre}
        </option>`
    );
});

/*
 * Obtengo el producto seleccionado, creo una función que me retorne el nombre del producto  
 */

const getProductSelected = function (list, val) {
    const productSelected = list.find((torta) => torta.nombre === val);
    return productSelected;
}

/*
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
 */

$("#chocotortaPriceButton").click(() => {
    $("#container-button").toggle("fast");
});


$("#chocotortaPriceButton").on("click", () => {
    const value = $("#chocotortaSelect").val();
    const chocotortaSelected = getProductSelected(chocotortaSize, value)
    $("#chocotortaPriceProductSelected").fadeIn(2000).html("El precio es: $" + chocotortaSelected.precio);
});

const updateTotalCar = function (carrito) {
    let total = 0;

    carrito.forEach((element) => {
        total = total + element.cantidad;
    });

    $("#totalCar").html(`${total}`);
}

/*
* Creo una función que me valide si hay algún producto en el local storage y si no lo hay, lo agrega
*/

const addToCar = function (product) {
    const carrito = localStorage.getItem('carrito');

    let productToSave = {
        product: product,
        cantidad: 1
    };

    if (carrito) {
        const carritoValue = JSON.parse(carrito);

        const productExist = carritoValue.find((value) => { return value.product.nombre === product.nombre });

        if (productExist) {
            productToSave = {
                product: product,
                cantidad: productExist.cantidad + 1
            }

            const index = carritoValue.findIndex((obj => obj.product.nombre === product.nombre));
            carritoValue[index] = productToSave;

        } else {
            carritoValue.push(productToSave);
        }

        localStorage.setItem("carrito", JSON.stringify(carritoValue));
        updateTotalCar(carritoValue);
    } else {
        localStorage.setItem("carrito", JSON.stringify([productToSave]));
        updateTotalCar([productToSave]);
    }
}

/**
  * Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

$("#agregarAlCarritoChocotorta")
    .on("click", function () {
        const value = $("#chocotortaSelect").val();
        const productSelected = getProductSelected(chocotortaSize, value);
        addToCar(productSelected);
    })

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

$("#agregarAlCarritoRedVelvet")
    .on("click", function () {
        const value = $("#redvelvetProductSelect").val();
        const productSelected = getProductSelected(redvelvetSize, value);
        addToCar(productSelected);
    })

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

$("#agregarAlCarritoBanana")
    .on("click", function () {
        const value = $("#bananaProductSelect").val();
        const productSelected = getProductSelected(bananaSize, value);
        addToCar(productSelected);
    })

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

$("#agregarAlCarritoCarrotCake")
    .on("click", function () {
        const value = $("#carrotCakeProductSelect").val();
        const productSelected = getProductSelected(carrotCakeSize, value);
        addToCar(productSelected);
    })

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

$("#agregarAlCarritoVanila")
    .on("click", function () {
        const value = $("#vanilaCakeProductSelect").val();
        const productSelected = getProductSelected(vanilaCakeSize, value);
        addToCar(productSelected);
    })

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

redvelvetSize.forEach(redvelvet => {

    $("#redvelvetProductSelect").append(
        `<option>
                ${redvelvet.nombre}</b>
        </option>`
    );
});

/**
* Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
*/

$("#redvelvetPriceButton")
    .on("click", function () {
        const value = $("#redvelvetProductSelect").val();
        const redvelvetValueSelected = getProductSelected(redvelvetSize, value);
        $("#redvelvetPriceProductSelected").html("El precio es $" + redvelvetValueSelected.precio);
        $("#redvelvetPriceProductSelected").fadeIn(1000)

    })

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

bananaSize.forEach(banana => {

    $("#bananaProductSelect").append(
        `<option>
                ${banana.nombre}</b>
        </option>`
    );
});

/**
* Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
*/

$("#bananaPriceButton")
    .on("click", function () {
        const value = $("#bananaProductSelect").val();
        const bananaValueSelected = getProductSelected(bananaSize, value);
        $("#bananaPriceProductSelected").html("El precio es $" + bananaValueSelected.precio);
        $("#bananaPriceProductSelected").fadeIn(1000)
    })

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

carrotCakeSize.forEach(carrotCake => {

    $("#carrotCakeProductSelect").append(
        `<option>
            ${carrotCake.nombre}</b>
        </option>`
    );
});

/**
* Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
*/

$("#carrotCakePriceButton")
    .on("click", function () {
        const value = $("#carrotCakeProductSelect").val();
        const carrotCakeValueSelected = getProductSelected(carrotCakeSize, value);
        $("#carrotCakePriceProductSelected").html("El precio es $" + carrotCakeValueSelected.precio);
        $("#carrotCakePriceProductSelected").fadeIn(1000)
    })

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

vanilaCakeSize.forEach(vanilaCake => {

    $("#vanilaCakeProductSelect").append(
        `<option>
            ${vanilaCake.nombre}</b>
        </option>`
    );
});

/**
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
*/

$("#vanilaCakePriceButton")
    .on("click", function () {
        const value = $("#vanilaCakeProductSelect").val();
        const vanilaCakeValueSelected = getProductSelected(vanilaCakeSize, value);
        $("#vanilaCakePriceProductSelected").html("El precio es $" + vanilaCakeValueSelected.precio);
        $("#vanilaCakePriceProductSelected").fadeIn(1000)
});