const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote.js")

describe('pacote', () => {
    test("Deve retornar pacote pacote_basico o totalHorasProjeto for menor e igual que 50", () => {
        const totalHorasPorProjeto = 50
        const result = calcularPacote(totalHorasPorProjeto)
        
        expect(result).toEqual("pacote_basico")
    })
    test("Deve retornar pacote pacote_intermediario quando o totalHorasPorProjeto for igual a 100 e menor que 200", () => {
        const totalHorasPorProjeto = 100
        const result = calcularPacote(totalHorasPorProjeto)
        
        expect(result).toEqual("pacote_intermediario")
    })
    test("Deve retornar pacote pacote_intermediário quando o totalHorasPorProjeto for igual ou maior que 200", () => {
        const totalHorasPorProjeto = 200;
        const result = calcularPacote(totalHorasPorProjeto);
        
        expect(result).toEqual("pacote_premium");
    })
})