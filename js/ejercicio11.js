// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


let edad1 = parseInt(prompt("escribe tu edad"))
let nombre1 = prompt("escribe tu nombre")

let edad2 = parseInt(prompt("escribe tu edad"))
let nombre2 = prompt("escribe tu nombre")

let edad3 = parseInt(prompt("escribe tu edad"))
let nombre3 = prompt("escribe tu nombre")

if (Math.max(edad1, edad2, edad3) == edad1){
 document.write(nombre1)
}
if (Math.max(edad1, edad2, edad3) == edad2){
 document.write(nombre2)
}
if (Math.max(edad1, edad2, edad3) == edad3){
 document.write(nombre3)
}

