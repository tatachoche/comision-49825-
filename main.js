
//CREAR ALGORITMO CON CONDICIONAL

/* Pedir un nombre de equipo mostrar su puntaje
                                                */


let equipo =  prompt("Ingrese el Nombre del Equipo de Futbol: ");

let ptjColoColo   = 43;
let ptjPiverPlate = 45;
let ptjUdeChile   = 46;
let ptjBocaJunior = 43;

let eqpColoColo   = "Colo Colo";
let eqpRiverPlate = "River Plate";
let eqpUdeChile   = "U de Chile";
let eqpBocaJunior = "Boca Junior";

document.write(eqpColoColo)
document.write("<br>")
document.write(eqpRiverPlate)
document.write("<br>")
document.write(eqpUdeChile)
document.write("<br>")
document.write(eqpBocaJunior)
document.write("<br>")
document.write(equipo)
document.write("<br>")

let puntaje = 0

if (equipo === eqpColoColo) {
     puntaje = ptjColoColo;
}

if (equipo === eqpRiverPlate) {
     puntaje = ptjRiverPlate;
} 

     
if (puntaje != 0) {
     alert("el puntaje de " + equipo + " es " + puntaje + " puntos");
     document.write("<br>")
     document.write(puntaje)
     document.write("<br>")
     document.write(equipo)
     document.write("<br>")

 } else {
     alert("Equipo incorrecto");
 }


document.write("********************************************")
document.write(" ")
document.write("<br>")
document.write(" ")
document.write("<br>")


//CREAR ALGORITMO CON CICLO

/* Pedir un numero y calcular la suma desde 1
   hasta el numero ingresado                    */

 
   let numero = Number(prompt("Ingrese  numero para calcular la suma y multiplicacion desde 1 hasta el numero"));
   let num1 = 0;
   
   var i 
   for (i=1;i<=numero;i++) { 
        num1 +=  i;
   }
   
   alert("La sumaroria de 1 hasta " + numero  + " es: " + num1);
   
   let j = 0;
   let num2 = 1;
   while ( j < numero) {
        j++;
        num2 = num2 * j;
   }
   
   alert("La multiplicacion de 1 hasta " + numero  + " es: " + num2);

   

// SIMULADOR DE PRESTAMO                    


let capital = Number(prompt("Para calculo del valor cuota de un prestamo Ingrese  Capital: "));
let numCuotas = Number(prompt("Ingrese Numero de Cuotas: "));
let interes = Number(prompt("Ingrese Interes, con punto como decimal (.): "));


document.write("********************************************")
document.write(" ")
document.write("<br>")
document.write(" ")
document.write("<br>")


if (capital == 0 && numCuotas == 0 && interes == 0) {
   alert("No hay simulacion nos vamos");
}  else  {
     if (capital == 0 || numCuotas == 0 || interes == 0) {
          alert("Capital, Numero de Cuota e Interes debe ser distintos de cero");
     }  else  
        
          CapMasInteres = capital + (capital * (interes / 100)) * numCuotas
          valorCuota = CapMasInteres / numCuotas
          document.write(CapMasInteres)
          document.write("<br>")
          document.write(valorCuota)
          document.write("<br>")
          document.write("-==================-")
          document.write("<br>")

        
          document.write("Cuota_ Valor cuota_______ Interes__________  Valor cuota final")
          document.write("<br>")
          document.write("=====  =============== ============== =============")
          document.write("<br>")



          for(i=1;i<=numCuotas;i++)
          {
               valorCuotaK = capital / numCuotas;
               ValorIntcuota = ((capital * interes) / 100) / numCuotas;
               valorCuotaF = valorCuotaK + ValorIntcuota;

               if  (i < 10) {
                    document.write("____ ")
                } else {
                    document.write("___ ")
               
               }

               document.write("   ",i)
               document.write(" ")
               document.write(valorCuotaK)
               document.write(" ")
               document.write(ValorIntcuota)
               document.write(" ")
               document.write(valorCuotaF)
               document.write(" ")
               document.write("<br>")
              
           }

            
          alert("El valor de la cuota es: " + valorCuotaF );

          }

