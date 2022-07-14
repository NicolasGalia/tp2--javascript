let numero = parseInt(prompt("escriba un numero"));

if(numero <= 2) {
    alert("muy deficiente")
} else
if(numero <= 4) {
    alert("insuficiente")
} else
if(numero <= 6) {
    alert("suficiente")
} else
if(numero === 7) {
alert("bien")
} else
if((numero === 8) || (numero === 9)) {
    alert("notable")
} else
if(numero === 10) {
    alert("sobresaliente")
} else
if (numero > 10) {
    alert("introduce un numero valido")
}