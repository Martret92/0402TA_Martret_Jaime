//1.INPUT: Pedir datos al usuario
let edad = parseInt(prompt("Introduce tu edad:"));
let nivel = prompt("Introduce tu nivel(junior, mid, senior:)").toLowerCase();
let numFavorito = parseInt(prompt("Introduce tu numero favorito:"));

//Variables para construir el codigo final
let letra = "";
let primerNumero = 0;
let segundoNumero = 0;

//2.Generar letra (if / else if)
if (edad < 18) {
    letra = "X";
} else if (edad >= 18 && edad <= 35) {
    letra = "A";
} else if (edad >= 36 && edad <= 60) {
    letra = "B";
} else {
    letra = "C";
}

//3.Generar primer numero (switch)
switch (nivel) {
    case "junior":
        primerNumero = 1;
        break;
    case "mid":
        primerNumero = 2;
        break;
    case "senior":
        primerNumero = 3;
        break;
    default:
        primerNumero = 0;
}

//4.Generar segundo numero (condicional)
if (numFavorito % 2 === 0) {
    //Si es par
    segundoNumero = numFavorito * 2;
} else {
    //Si es impar
    segundoNumero = numFavorito + 5;
}

//5.Mostrar Resultado
let codigoFinal = letra + primerNumero + segundoNumero;
console.log("Resultado del Candado");
console.log("Tu codigo secreto es", codigoFinal);
alert("Tu codigo para abrir el candado es: " + codigoFinal);