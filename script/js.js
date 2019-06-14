function calcular() {
  var precio = parseInt(prompt("Ingrese el precio de la habitacion por dia"))
  var cant = document.getElementById("num").value;
  var nombre = document.getElementById("firstName").value;
  var apellidos = document.getElementById("lastName").value;
  var noches = parseInt(document.getElementById("noches").value);
  var costo = precio * cant * noches;
  console.log(costo);

  document.getElementById("res").innerHTML =
    "El precio total a pagar por " + cant + " personas es  " + costo;
  localStorage.setItem("costo", costo);
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellidos", apellidos);

  return costo;
}

function validateOption(event) {
  var tipo = document.getElementById("destino").value;
  var numero = document.getElementById("numero").value;
  console.log(numero);

  var costoviaje = numero * tipo;
  console.log(costoviaje);
  document.getElementById("res").innerHTML =
    "El precio total a pagar por " + numero + " personas es  " + costoviaje;
  localStorage.setItem("costoviaje", costoviaje);

  return costoviaje;
}

function autos() {
  var dias = document.getElementById("dias").value;
  var costo_dia = parseInt(prompt("Ingrese el precio del alquiler del auto por dia"))
  var descuento;
  if (dias == 3) {
    descuento = 15;
  } else if (dias > 3 && dias < 7) {
    descuento = 25;
  } else if (dias >= 7) {
    descuento = 60;
  }
  var pago_alquiler = dias * costo_dia;
  console.log(pago_alquiler);
  var pag = pago_alquiler - descuento;
  document.getElementById("res").innerHTML =
    "El precio total a pagar por el alquiler del auto  " + dias + " dias es  " +" Ud. obtuvo un descuento de " + descuento + " El total a pagar es " + pag;
  localStorage.setItem("pag", pag);
  return pag;
}





/************ CALCULA EL TOTAL ********/
function total() {
  var costo = parseInt(localStorage.getItem("costo"));
  var costoviaje = parseInt(localStorage.getItem("costoviaje"));
  var pag = parseInt(localStorage.getItem("pag"));
  var nombre = localStorage.getItem("nombre");
  var apellidos = localStorage.getItem("apellidos");
  console.log(nombre);
  console.log(apellidos);
  console.log(costo);
  console.log(costoviaje);
  var total = costo + costoviaje + pag;
  console.log(total);
document.getElementById("cliente").innerHTML= nombre + " " + apellidos;
document.getElementById("auto").innerHTML= costo;
document.getElementById("hos").innerHTML= pag;
document.getElementById("rest").innerHTML= 0;
document.getElementById("viaje").innerHTML= costoviaje;
document.getElementById("total").innerHTML= total;
				

}
