// Pedir texto al usuario hasta que presione cancelar 
let fraseCompleta = ""

while(confirm("desea ingresar palabras?")){
let textoIngresado = prompt("ingrese una palabra");
fraseCompleta = fraseCompleta + - + textoIngresado
console.log(textoIngresado);
console.log(fraseCompleta);
}
// una vez que cancelo muestro todo el texto separado con -