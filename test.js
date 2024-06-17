// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;
    expect(dollars).toBe(expected);
})

test("One dollar should be 547,75 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(1);
    const expected = 1 * 157.6;
    expect(yens).toBe(expected); 
})

test("One yen should be 0.005 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1);
    const expected = 1 * 0.0056;
    expect(pounds).toBe(expected); 
})