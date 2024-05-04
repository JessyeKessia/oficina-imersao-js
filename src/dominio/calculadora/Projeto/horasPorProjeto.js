const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func]) // pegando o calor do objeto a a hora
    .reduce((sum, currentValue) => sum + currentValue, 0) // soma
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
