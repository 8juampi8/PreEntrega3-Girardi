function calculo(precioProducto){
    let interesIva=0.21;
    function iva(){
        return precioProducto*interesIva;
    }
    let sumarIva=precioProducto+iva()
    return sumarIva;
}
console.log(calculo(2000))
