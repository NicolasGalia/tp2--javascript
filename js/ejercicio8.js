// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……
let i, rep;

let numero = parseInt(prompt("escriba un numero del 1 al 50"))
//BUCLE FOR PARA RECORRER DE 1 A 30
for (i = 1; i <= numero; i++) {
    //BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 1; rep <= i; rep++) {
        console.log(rep)
        //IMPRIMIMOS EL NÚMERO i, i VECES
        
        document.write(rep);
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}