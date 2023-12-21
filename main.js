/* arreglo con lass tasas de interes por numero de cuotas */
const tasas = [{cuoMenIguQue:  6, interes: 2.1 },
               {cuoMenIguQue: 12, interes: 1.8 },
               {cuoMenIguQue: 24, interes: 1.5 },
               {cuoMenIguQue: 36, interes: 1.2 },
               {cuoMenIguQue: 60, interes: 0.9 }
];

const cuotasPermitidas = tasas.map(function(tasas) {
     return tasas.cuoMenIguQue;
});

/* arreglo limetes de monto a otorgar segun nivel de riesgo del cliente  */
const mtoLimite = [{glsRiesgo: "Cliente sin Riesgo",        nivelRiesgo: "0", mtoMaxi: 9999999999 },
                   {glsRiesgo: "Cliente poco Riesgoso",     nivelRiesgo: "1", mtoMaxi: 20000000},
                   {glsRiesgo: "Cliente Riesgo intermedio", nivelRiesgo: "2", mtoMaxi: 5000000},
                   {glsRiesgo: "Cliente Riesgoso",          nivelRiesgo: "3", mtoMaxi: 1000000},
                   {glsRiesgo: "Cliente muy Riesgoso",      nivelRiesgo: "4", mtoMaxi: 0}
];

// Funcion para validar el nivl de riego del cliente
// y recuperar el monto maximo de prestamo segun nivel de riesgo del cliente
function riesgo(nivelRiesgo){
     
     const mtoPrestamo = mtoLimite.find((item) => item.nivelRiesgo === nivelRiesgo);
 
     if (mtoPrestamo) {
          alert(`
          Dato para validar el monto maximo  del prestamo
          ============================================
               Nivel de Riesgo Ingresado : ${mtoPrestamo.nivelRiesgo}
               Monto Maximo de Prestamo  : ${mtoPrestamo.mtoMaxi}
               Glosa Riesgo Cliente      : ${mtoPrestamo.glsRiesgo}
          `);
          return mtoPrestamo.mtoMaxi
     } else {
          alert("Nivel de Riesgo Invalido");
          return 0;
     }
}

// Funcion para validar el numero de cuotas ingresado y
// y recuoperar el interes a a aplicar de acuerdo a la cantidad de meses solicitados
function obtieneInteres(){

     while(true){
          let numCuotas = Number(prompt("Ingrese Numero de Cuotas: "));

          if (numCuotas == null) {
               return [0, 0];;
          }
 
          const ptjInteres = tasas.find((item) => item.cuoMenIguQue == numCuotas);
    
          if (ptjInteres) {
                    return [numCuotas, ptjInteres.interes];
          } else {   
                    alert(`
                         Numero de cuotas no permitido
                         =============================
                         Cantidad de Cuotas Solicitada         : ${numCuotas}
                         solo se aceptan las siguentes Cuotas  : ${cuotasPermitidas}
                    `);
                 }
     }
}

// Funcion para calcular el valor de la cuota
// momentaneamente se inhibe el calculo ya que me dio error se corregira luego
function calcValorCuota(monto, cuotas, intereses) {

     CapMasInteres = monto + (monto * (intereses / 100)) * cuotas
     valorCuota = CapMasInteres / cuotas
//    for(i=1;i<=cuotas;i++)
//     {
//          valorCuotaK = mtoPrestamoSol / numCuotas;
//          ValorIntcuota = ((mtoPrestamoSol * interesXNumCuota) / 100) / numCuotas;
//          valorCuotaF = valorCuotaK + ValorIntcuota;         
//      }
     return valorCuota
}

let nivelRiesgo      = 0;
let numCuotas        = 0;
let mtoPrestamoSol   = 0;
let mtoMaxPrestamo   = [];
let interesXNumCuota = [];

while(true){
     let nivelRiesgo = prompt("ingrese nivel de riesgo del cliente: ");

     if(nivelRiesgo == null)
     break

     const mtoMaxPrestamo = riesgo(nivelRiesgo)

     if (mtoMaxPrestamo > 0) {
          let mtoPrestamoSol = Number(prompt("Ingrese monto del prestamo solicitado: "));

             if (mtoPrestamoSol == null || mtoPrestamoSol == 0) {
               alert(`
                    No se ingreso algun monto
                    Debe ingresar nivel de riesgo nuevamente
               `);
          } else {

               if (mtoPrestamoSol > mtoMaxPrestamo) {
                    alert(`
                     Monto solicitado excede mto maximo segun nivel de Riesgo
                     ====================================================
                         Esta solicitando                    : ${mtoPrestamoSol}
                         y el Monto Maximo de Prestamo es de : ${mtoMaxPrestamo}
                         Nivel de Riesgo del cliente es      : ${nivelRiesgo}
                    `);
               } else {
                         const [numCuotas, interesXNumCuota] = obtieneInteres()
                         alert(`
                              Dato para el calcuno del valor cuota
                              ====================================
                                 numero de cuotas  : ${numCuotas}
                                 interes obtenido  : ${interesXNumCuota}
                         `);

                         if (numCuotas !== 0) {
                             const valorCuotaF = calcValorCuota(mtoPrestamoSol, numCuotas, interesXNumCuota)
                                               
                             alert(`
                                   =============================================
                                      El valor de la cuota es : ${valorCuotaF}
                                   =============================================
                             `);
                         }

                      }
          }    
     }
}    