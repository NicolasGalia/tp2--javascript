// Realiza un script que cuente el número de vocales que tiene un texto.
let cadenaDeTexto = prompt("escriba una cadena de texto");
let cuenta = 0;
for (i = 0; i < cadenaDeTexto.length; i++) {
    if (cadenaDeTexto[i] == "a" || cadenaDeTexto[i] == "e" ||  cadenaDeTexto[i] == "i" ||  cadenaDeTexto[i] == "o" || cadenaDeTexto[i] == "u") {
         cuenta = cuenta + 1;
         
    }
}
document.write(cuenta)
