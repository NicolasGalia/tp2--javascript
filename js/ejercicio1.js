let Edad = prompt("Ingrese su edad");

if (Edad >= 18){
    document.write("ya puede conducir")
} else if (Edad < 18){
    document.write("usted debe tener 18 años para sacar su carnet")
}

if(isNaN(Edad)){
    document.write("El valor ingresado debe ser numero");
    }
