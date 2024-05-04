const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto.js")
const moduloHoras = require("../../dominio/calculadora/Projeto/horasPorProjeto.js")
const moduloPacote = require("../../dominio/calculadora/Projeto/pacote.js")
jesk.mock("../../dominio/calculadora/Projeto/horasPorProjeto.js")
jest.mock("../../dominio/calculadora/Projeto/valorProjeto.js") // simulação da função
describe("valorProjeto", () => {
    beforeAll(() => {
        moduloPacote.calcularPacote.mockReturnValue('pacote_basico')
        moduloHoras.calcularHorasDeProjeto.mockReturnValue(30);

        test("cenario", () => {
            const listaDeFuncionalidades = [
                "setup", 
                "responsividade", 
                "construcao_1_pagina", 
                "construcao_1_pagina",
                "construcao_1_pagina", 
                "formulario", 'ssr',
            ];
            const valorHora = 30
            const resultado = calcularValorProjeto(listaDeFuncionalidades, valorHora)

            expect(resultado).toEqual(2750);
        })
    })
})