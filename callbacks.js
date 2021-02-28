/*let sumar = (numero1 , numero2) => numero1 + numero2;
let restar = (numero1 , numero2) => numero1 - numero2;
let multiplicar = (numero1 , numero2) => numero1 * numero2;
let dividir = (numero1 , numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion (numero1, numero2);

console.log(calculadora (8,102,dividir));


//Pasar un callback

let doble = numero1 => numero1 * 2

let triple = numero1 => numero1 * 3

let aplicarCallback = (numero1, callback) => callback(numero1)

console.log(aplicarCallback (8,doble));

*/


function agregarHttp(url) {
     for (let i = 0; i < url.length ; i++) {
     
            console.log ('http://' + url[i] )
         
    }


}

//let procesar = (unArray,callback) => callback (unArray);

function procesar (unArray, callback) {
    return callback (unArray)
}

let urlCompletas = procesar (['www.google.com',"www.yahoo.com"], agregarHttp) 





//function procesar(__,__){
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...*/
    /*array.forEach(element => {
    });
   */
 
    