// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    console.log(valueInDollar);
    return valueInDollar;
}

const fromDollarToYen  = function(valueInDollar) {
    let valueInYen = valueInDollar * 157.6;
    console.log(valueInYen);
    return valueInYen;
}

const fromYenToPound  = function(valueInYen) {
    let valueInPound = valueInYen * 0.0056;
    console.log(valueInPound);
    return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
