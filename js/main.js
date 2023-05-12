import data from "./data.js";

const divContenido = document.querySelector("#contenido");
const tbodyCarrito = document.querySelector("#tbody-carrito");

let carrito = [];
function agregarCarrito(platillo) {
  carrito.push(platillo);
  let htmlBodyCarrito = "";
  carrito.forEach(function (event) {
    htmlBodyCarrito =
      htmlBodyCarrito +
      `
      <tr>
        <td>${event.nombre}</td>
        <td>${event.stock}</td>
        <td>${event.precio}</td>
        <td>SubTotal</td>
      </tr>
    `;
  });
  tbodyCarrito.innerHTML = htmlBodyCarrito;
}

function obtenerID(id) {
  const idEcontrado = data.find((event) => {
    return event.id == id;
  });
  return idEcontrado;
}

function agregarBtn() {
  const btnAgregar = document.querySelectorAll(".btn-agregar");
  btnAgregar.forEach(function (btn) {
    btn.addEventListener("click", (event) => {
      const dataID = event.target.getAttribute("data-id");
      const obtenerData = obtenerID(dataID);
      agregarCarrito(obtenerData);
    });
  });
}

function dibujarData(arrData) {
  let cardsHtml = "";

  arrData.forEach((item) => {
    cardsHtml =
      cardsHtml +
      `
        <div class="tarjeta">
            <div class="imagen">
                <img src=${item.imagen}>
            </div>
            <div class="texto">
                <h4>${item.nombre}</h4>
                <p>${item.descripcion}</p>
                <div class="precio">
                    <span>S/ ${item.precio}</span>
                    <button class="btn-agregar" data-id="${item.id}">
                      Agregar
                    </button>
                </div>
            </div>
        </div>
        `;
  });

  divContenido.innerHTML = cardsHtml;
  agregarBtn();
}

dibujarData(data);
