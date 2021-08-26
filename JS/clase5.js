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
const redvelvetL = new Producto('Redvelvet grande (18-22 porciones)', 2000, 4, 3616);

const bananaS = new Producto('Banana mini (10-12 porciones)', 500, 3, 5345);
const bananaM = new Producto('Banana medium (16-18 porciones)', 1000, 7, 5371);
const bananaL = new Producto('Banana grande (18-22 porciones)', 1500, 5, 5328);

const carrotCakeS = new Producto('Carrot Cake mini (10-12 porciones)', 700, 4, 6232);
const carrotCakeM = new Producto('Carrot Cake medium (16-18 porciones)', 1300, 7, 6251);
const carrotCakeL = new Producto('Carrot Cake grande (18-22 porciones)', 2200, 3, 6228);

const vanilaCakeS = new Producto('Vanila Cake mini (10-12 porciones)', 400, 15, 1523);
const vanilaCakeM = new Producto('Vanila Cake medium (16-18 porciones)', 600, 7, 1522);
const vanilaCakeL = new Producto('Vanila Cake grande (18-22 porciones)', 1200, 9, 1581);

/**
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

/**
 * Obtengo el html del selector de mi producto
 */

const chocotortaSelectHtml = document.getElementById("chocotortaSelect");

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

chocotortaSize.forEach(chocotorta => {
  const option = document.createElement("option");
  option.value = chocotorta.nombre;
  option.text = chocotorta.nombre;
  chocotortaSelectHtml.appendChild(option);
});

/**
 * Obtengo el producto seleccionado, creo una función que me retorne el nombre del producto  
 */

const getProductSelected = function (list, value) {
  const productSelected = list.find((torta) => torta.nombre === value);
  return productSelected;
}

/**
 * obtengo el html de mi boton "AgregarCarrito"
 */

const agregarCarritoChocoHtml = document.getElementById("agregarAlCarritoChocotorta");
const agregarCarritoRedHtml = document.getElementById("agregarAlCarritoRedVelvet");
const agregarCarritoBananaHtml = document.getElementById("agregarAlCarritoBanana");
const agregarCarritoCarrotHtml = document.getElementById("agregarAlCarritoCarrotCake");
const agregarCarritoVanilaHtml = document.getElementById("agregarAlCarritoVanila");

/**
 * Creo una función que me valide si hay algún producto en el local storage y si no lo hay, lo agrega
 */

const addToCar = function (product) {
  const carrito = localStorage.getItem('carrito');

  if (carrito) {
    const carritoValue = JSON.parse(carrito);
    carritoValue.push(product);
    localStorage.setItem("carrito", JSON.stringify(carritoValue));
  } else {
    localStorage.setItem("carrito", JSON.stringify([product]));
  }
}

/**
 * Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
 */

agregarCarritoChocoHtml
  .addEventListener("click", function () {
    const value = document.getElementById("chocotortaSelect").value;
    const productSelected = getProductSelected(chocotortaSize, value);
    addToCar(productSelected);
  });

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

agregarCarritoRedHtml
  .addEventListener("click", function () {
    const value = document.getElementById("redvelvetProductSelect").value;
    const productSelected = getProductSelected(redvelvetSize, value);
    addToCar(productSelected);
  });

/**
 * Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
 */

agregarCarritoBananaHtml
  .addEventListener("click", function () {
    const value = document.getElementById("bananaProductSelect").value;
    const productSelected = getProductSelected(bananaSize, value);
    addToCar(productSelected);
  });

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

agregarCarritoCarrotHtml
  .addEventListener("click", function () {
    const value = document.getElementById("carrotCakeProductSelect").value;
    const productSelected = getProductSelected(carrotCakeSize, value);
    addToCar(productSelected);
  });

/**
* Escucha el evento de mi html y creo una función que agrega a mi carrito el producto seleccionado
*/

agregarCarritoVanilaHtml
  .addEventListener("click", function () {
    const value = document.getElementById("vanilaCakeProductSelect").value;
    const productSelected = getProductSelected(vanilaCakeSize, value);
    addToCar(productSelected);
  });

/**
 * Obtengo el html del selector de mi producto
 */

const redvelvetSelectHtml = document.getElementById("redvelvetProductSelect");

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

redvelvetSize.forEach(redvelvet => {
  const option = document.createElement("option");
  option.value = redvelvet.nombre;
  option.text = redvelvet.nombre;
  redvelvetSelectHtml.appendChild(option);
});

/**
 * Obtengo el boton de precio de mi HTML
 */

const chocotortaPriceButtonHtml = document.getElementById("chocotortaPriceButton");

/**
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
 */

chocotortaPriceButtonHtml
  .addEventListener("click", function () {
    const value = document.getElementById("chocotortaSelect").value;
    const productSelected = getProductSelected(chocotortaSize, value);
    const chocotortaPriceProductSelected = document.getElementById("chocotortaPriceProductSelected");
    chocotortaPriceProductSelected.innerHTML = "El precio es $" + productSelected.precio;
  })

/**
* Obtengo el boton de precio de mi HTML
*/

const redvelvetPriceButtonHtml = document.getElementById("redvelvetPriceButton");

/**
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
 */

redvelvetPriceButtonHtml
  .addEventListener("click", function () {
    const value = document.getElementById("redvelvetProductSelect").value;
    const redvelvetValueSelected = getProductSelected(redvelvetSize, value);
    const redvelvetPriceProductSelected = document.getElementById("redvelvetPriceProductSelected");
    redvelvetPriceProductSelected.innerHTML = "El precio es $" + redvelvetValueSelected.precio;
  })

/**
* Obtengo el html del selector de mi producto
*/

const bananaSelectHtml = document.getElementById("bananaProductSelect");

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

bananaSize.forEach(banana => {
  const option = document.createElement("option");
  option.value = banana.nombre;
  option.text = banana.nombre;
  bananaSelectHtml.appendChild(option);
});

/**
 * Obtengo el boton de precio de mi HTML
 */

const bananaPriceButtonHtml = document.getElementById("bananaPriceButton");

/**
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
 */

bananaPriceButtonHtml
  .addEventListener("click", function () {
    const value = document.getElementById("bananaProductSelect").value;
    const bananaValueSelected = getProductSelected(bananaSize, value);
    const bananaPriceProductSelected = document.getElementById("bananaPriceProductSelected");
    bananaPriceProductSelected.innerHTML = "El precio es $" + bananaValueSelected.precio;
  })

/**
* Obtengo el html del selector de mi producto
*/

const carrotCakeSelectHtml = document.getElementById("carrotCakeProductSelect");

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

carrotCakeSize.forEach(carrotCake => {
  const option = document.createElement("option");
  option.value = carrotCake.nombre;
  option.text = carrotCake.nombre;
  carrotCakeSelectHtml.appendChild(option);
});

/**
 * Obtengo el boton de precio de mi HTML
 */

const carrotCakePriceButtonHtml = document.getElementById("carrotCakePriceButton");

/**
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
 */

carrotCakePriceButtonHtml
  .addEventListener("click", function () {
    const value = document.getElementById("carrotCakeProductSelect").value;
    const product = getProductSelected(carrotCakeSize, value);
    const carrotCakePriceProductSelected = document.getElementById("carrotCakePriceProductSelected");
    carrotCakePriceProductSelected.innerHTML = "El precio es $" + product.precio;
  })

/**
* Obtengo el html del selector de mi producto
*/

const vanilaCakeSelectHtml = document.getElementById("vanilaCakeProductSelect");

/**
 * Hago un forEach que recorra mi array y cree una opción para seleccionar en el HTML
 */

vanilaCakeSize.forEach(vanilaCake => {
  const option = document.createElement("option");
  option.value = vanilaCake.nombre;
  option.text = vanilaCake.nombre;
  vanilaCakeSelectHtml.appendChild(option);
});

/**
 * Obtengo el boton de precio de mi HTML
 */

const vanilaCakePriceButtonHtml = document.getElementById("vanilaCakePriceButton");

/**
 * Escucho el click en el boton de precio y retorno un mensaje con el precio del preoducto seleccionado
 */

vanilaCakePriceButtonHtml
  .addEventListener("click", function () {
    const value = document.getElementById("vanilaCakeProductSelect").value;
    const vanilaCakeValueSelected = getProductSelected(vanilaCakeSize, value);
    vanilaCakePriceProductSelected.innerHTML = "El precio es $" + vanilaCakeValueSelected.precio;
  })