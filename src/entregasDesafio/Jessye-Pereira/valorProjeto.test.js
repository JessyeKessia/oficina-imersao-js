const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto.js")

const moduloPacote = require("../../dominio/calculadora/Projeto/pacote.js")
jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto.js")
//simulação da função
describe("valorProjeto", () => {
    beforeAll(() => {
        moduloPacote.calcularPacote.mockReturnValue('pacote_intermediario')

        test("Deve calcular o valor total do projeto", () => {
            const listaDeFuncionalidades = [
                "setup"
            ];
            const valorHora = 100
            const resultado = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)

            expect(resultado).toEqual(7200);
        })
    })
})