const $ = document.querySelector.bind(document)

const calculateSalary = (event) => {
event.preventDefault()

  const horas = Number($('#horas-semenais').value);
  const salario = Number($('#salerio-mim').value);

  const valorPorHora = calculaValorPorHora(horas, salario);
  const valorPorHoraExtra = calculaValorPorHoraExtra(valorPorHora);

  $('#result').innerText = `Valor por hora: R$ ${valorPorHora}, valor por hora extra: R$ ${valorPorHoraExtra}`;
}

function calculaValorPorHora(horasTrabalhadas, valorSalarioMinimo) {
  const horasPorMes = horasTrabalhadas * 5;
  const valorPorHora = Number((valorSalarioMinimo / horasPorMes).toFixed(2));
  return valorPorHora;
}

function calculaValorPorHoraExtra(valorPorHora) {
  return Number((valorPorHora * 1.5).toFixed(2));
}