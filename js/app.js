// segunda entrega de codigo JS

// Objetos
//creamos el objeto producto
class producto {
    constructor(nombre, ingredientes, precio) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = Number(parseFloat(precio));
    }
}

// Array 
// ingreso de las variedades de producto al array empanadas
const empanadas = [
    {nombre: 'de Carne', Ingredientes: 'carne molida, cebolla, huevo, especias', precio: 100.00},
    {nombre: 'de Jamón y Queso', Ingredientes: 'jamón, queso muzzarela', precio: 120.00},
    {nombre: 'de Humita', Ingredientes: 'choclo, cebolla', precio: 100.00},
    {nombre: 'Arabes', Ingredientes: 'carne molida, cebolla, limón', precio: 120.00},
    {nombre: 'de Carne dulce', Ingredientes: 'carne molida, cebolla, huevo, especias, pasas de uva, azucar', precio: 100.00},
    {nombre: 'Caprese', Ingredientes: 'queso, tomate, albahaca', precio: 120.00}
];
console.log(empanadas)

// Funcion que retorna una variable  
// Actualizar los precios un porcentaje ingresado por teclado 
let porcentaje = parseFloat (prompt ("Ingrese el % de aumento para todos los productos "));
porcentaje = 1 + porcentaje/100;
function incremento() {
    return porcentaje;
}

// funciones de uso superior
// crear array con precios nuevos
const actualizado = empanadas.map((elem) => {
    return {
        nombre: elem.nombre,
        precio: elem.precio * incremento()
    }
})
console.log(actualizado)

// busqueda de objetos en el array (metodo .filter)
const resultado = empanadas.filter (( elem) => elem.precio < 120)

// mostrar en consola los elementos que cumplen como condicion que el precio sea "menor que 120"
console.log (resultado)
































// ingreso de las variedades de producto al array empanadas
//const empanadas = [];
//let precioP = 0
//let = ingredientesP = ""
// do{
//     var nuevoProducto = prompt ("Ingrese un tipo de empanada o fin para terminar de ingresar");
//     if (nuevoProducto == 'fin' || nuevoProducto == 'FIN' || nuevoProducto == 'Fin'){
//         break;
//     } else{
//         nombreP = nuevoProducto;
//         ingredientesP = prompt("Ingrese los ingredientes de empanada de " +nombreP);
//         precioP = parseFloat(prompt("Ingrese el precio"));
//         document.write("Precio producto: " +nombreP + ": " + precioP);
//         empanadas.push (new producto(nombreP, ingredientesP, precioP));  
//     } 
// }
// while (nuevoProducto != 'fin' || nuevoProducto != 'FIN' || nuevoProducto != 'Fin');
// console.log(empanadas); //muesto en consola el array empanadas[]
// console.log(producto); // muesto en consola el objeto producto {}

// actualización de precios   
    // let porcentaje = prompt("Ingrese el % de aumento ");
    // // aplico el aumento del precio segun % ingresado y lo guardo en la variable precioP
    // precioP = precioP + (precioP * porcentaje/100);
    // document.write("Precio: " + precioP); 
    // const actualizacionP = [];
    // //recorro el array empanadas[] y paso los precios modificados al array actualizacionP[]
    // empanadas.forEach((elem) => {
    // actualizacionP.push(elem.precio = precioP)
    // })
    // console.log(actualizacionP) //muestro en consola el array de los precios actualizados








