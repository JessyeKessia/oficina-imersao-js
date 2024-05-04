const modulo = require("../../dominio/calculadora/Hora/valorHora.js") 

describe('calcularValorPorHora', () => {
    test('Deve retornar dado o salario 1412 retorna 6.42 por hora', () => {
        const rendaMensal = 1412

        const resultado = modulo.calcularValorPorHora(rendaMensal)

        expect(resultado).toEqual(9)
    })

})

