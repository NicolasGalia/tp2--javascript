// Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

let i, rep;
//BUCLE FOR PARA RECORRER DE 1 A 30
for (i = 1; i <= 30; i++) {
    //BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 0; rep < i; rep++) {
        //IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}