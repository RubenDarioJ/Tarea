// ------------------ EJERCICIO CONDICIONAL #1


// let numero1 = -1;
// let numero2 = 0;


// if (numero1 != numero2) {
//     console.log("numero1 es negativo o distinto de cero");
//   }


// ------------------ EJERCICIO CONDICIONAL #2


//  let numero1 = 1
//  let numero2 = 3


//   if (numero1 + numero1 <= numero2) {
//     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
//   }



// ------------------ Ejercicio 01
// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)."


 let sentence = "hola, este es un mensaje guardado en una variable";

 console.log(sentence.toUpperCase())


// ------------------ Ejercicio 02
// Vamos a trabajar un poco con la consola para ir amigandonos con ella ya que será nuestra mejor amiga de ahora en más.
// Declara una variable "user" de tipo objeto y asignale las propiedades name y last_name.
// Luego imprime un saludo para el user.


 let user = {

        name: 'Ruben',
        lastName: 'Justo'
 }

 console.log(`Hola, ${user.name} ${user.lastName}`);


// ------------------ Ejercicio 03
// Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// Imprime: "Marzo y Julio".


 let mesesDelAño = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];  

 console.log(`${mesesDelAño[2]} y ${mesesDelAño[6]}`);


 // ------------------ Ejercicio 04
// Crea un arreglo que contenga 5 objetos del tipo persona e imprime la posición 4.


 let fivePeople = [
        {
            name: 'Ruben',
            
        },

        {
            name: 'Miguel'

        },

        {
            name: 'Belkis'
        },

        {
            name: 'Luis'
        },

        {
        
            name: 'Paul'
        },

]

console.log(fivePeople[4].name);
