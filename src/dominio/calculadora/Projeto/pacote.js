const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_basico) {
    return "pacote_basico";
  } else if (totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_intermediario) {
    return "pacote_intermediario";
  } else {
    return "pacote_premium";
  }
};

exports.calcularPacote = calcularPacote;
