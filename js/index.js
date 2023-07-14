let menu1 = 1500;
let menu2 = 1350;
let menu3 = 800;
let menu4 = 1000;

let localidad = prompt("Ingrese localidad de entrega:");
if (localidad == "Rosario") {
    opcionMenu = parseInt(
    prompt(
        "Puede seguir con su pedido \n" +
        "Ingrese el menu vegano a comprar: \n" +
        "1 - Fideos con boloñesa: $1500 \n" +
        "2 - Milanesas de berenjena con guarnicion: $1350 \n" +
        "3 - Torta de chocolate/porcion: $800 \n" +
        "4 - Tiramisu/porcion: $1000 \n" +
        "5 - Salir"
        )
    );
} else {
    alert("No esta en la localidad de entrega");
}

function calculoMenu(cantidadMenu, precioMenu) {
  return cantidadMenu * precioMenu;
}
let cantidadMenu = 0;

switch (opcionMenu) {
    case 1:
        cantidadMenu = parseInt(prompt("Ingrese la cantidad deseada:"));
        totalMenu = calculoMenu(cantidadMenu, 1500);
        alert("El total es:" + " " + totalMenu);
        break;
    case 2:
        cantidadMenu = parseInt(prompt("Ingrese la cantidad deseada:"));
        totalMenu = calculoMenu(cantidadMenu, 1350);
        alert("El total es:" + " $" + totalMenu);
        break;
    case 3:
        cantidadMenu = parseInt(prompt("Ingrese la cantidad deseada:"));
        totalMenu = calculoMenu(cantidadMenu, 800);
        alert("El total es:" + " $" + totalMenu);
        break;
    case 4:
        cantidadMenu = parseInt(prompt("Ingrese la cantidad deseada:"));
        totalMenu = calculoMenu(cantidadMenu, 1000);
        alert("El total es:" + " $" + totalMenu);
        break;
}

let cantidadCuota = 0;

let opcionPago = parseInt(
    prompt("Elija opcion de pago: \n" + "1 - Efectivo \n" + "2 - Cuotas")
);
if (opcionPago == 2) {
    opcionCuota = parseInt(
    prompt(
        "Elija cantidad de cuotas: \n" +
        "1 - Cuota  \n" +
        "2 - Cuotas \n" +
        "3 - Cuotas \n" +
        "4 - Cuotas \n" +
        "5 - Cuotas"
        )
    );
} else {
    alert("El total a pagar es " + totalMenu);
}

function calculoCuota(cantidadCuotas, opcionCuota) {
    return totalMenu / opcionCuota;
}

switch (opcionCuota) {
    case 1:
        cantidadCuota = calculoCuota(totalMenu, opcionCuota) * 1.04;
        alert("1 cuota de " + cantidadCuota + "\n" + "Total a pagar: " + cantidadCuota * opcionCuota);
        break;
    case 2:
        cantidadCuota = calculoCuota(totalMenu, opcionCuota) * 1.05;
        alert("2 cuotas de " +cantidadCuota +"\n" + "Total a pagar: " + cantidadCuota * opcionCuota);
        break;
    case 3:
        cantidadCuota = calculoCuota(totalMenu, opcionCuota) * 1.06;
        alert("3 cuotas de " + cantidadCuota +"\n" +  "Total a pagar: " +  cantidadCuota * opcionCuota  );
        break;
    case 4:
        cantidadCuota = calculoCuota(totalMenu, opcionCuota) * 1.07;
        alert("4 cuotas de " +cantidadCuota +"\n" +"Total a pagar: " +cantidadCuota * opcionCuota);
        break;
    case 5:
        cantidadCuota = calculoCuota(totalMenu, opcionCuota) * 1.08;
        alert("4 cuotas de " + cantidadCuota + "\n" +  "Total a pagar: " +  cantidadCuota * opcionCuota );
        break;
    default:
        alert("Opcion invalida");
}
