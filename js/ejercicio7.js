// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
let i, rep;

let numero = parseInt(prompt("escriba un numero del 1 al 50"))
//BUCLE FOR PARA RECORRER DE 1 A 30
for (i = numero; i >= 1; i--) {
    //BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 0; rep < i; rep++) {
        //IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}