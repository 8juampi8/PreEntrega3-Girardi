function calculoIva(precioProducto){
    let interesIva=0.21;
    function iva(){
        return precioProducto*interesIva;
    }
    let sumarIva=precioProducto+iva();
    return sumarIva;
}
console.log(calculoIva(2000));


const PROD_1=1000;
const PROD_2=2000;
const PROD_3=1500;
const PROD_4=1250;
const PROD_5=4000;
const PROD_6=2000;
const PROD_7=7000;
const PROD_8=2500;
const PROD_9=5200;
const PROD_10=500;
const PROD_11=1100;
const PROD_12=3500;

let confirmacion=parseInt(prompt("Desea comprar algun producto:(1=Si o 2=No)"));
let producto=0;
while(confirmacion===1){
    producto=producto+parseInt(prompt("Elige el producto que deseas comprar por su precio:(1000, 2000, 1500, 1250, 4000, 2000, 7000, 2500, 5200, 500, 1100, 3500)"));
    confirmacion=parseInt(prompt("Desea comprar algun otro producto:(1=Si o 2=No)"));
}
console.log("Total a pagar: "+producto);