// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
let CANTIDAD_DE_LETRAS = 23;
let LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
do {
     const DNI = parseInt(prompt("Esciba su número de DNI")) 
     if((DNI > 0) && (DNI < 99999999)){
        const resto = DNI % CANTIDAD_DE_LETRAS;
        const letra = LETRAS[resto];
        document.write(`La letra que corresponde a tu DNI es: ${letra}`);
     } else {
        alert("Lo introducido no es un número");
     }
}while (confirm("Presione aceptar para ingresar otro número o cancelar si desea ver el resultado"));