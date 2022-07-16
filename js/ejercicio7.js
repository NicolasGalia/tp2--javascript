// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
let i, rep;
//BUCLE FOR PARA RECORRER DE 50 A 1
for (i = 4; i >= 1; i--) {
    console.log(i)
    // BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 3; rep >= i; rep--) {
        //IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    // IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}