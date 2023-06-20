describe('Calculo do valor da hora trabalhada', function() {
  it('Deve retornar o valor correto da hora trabalhada com base no salário mínimo e na carga horária', function() {
    const salarioMinimo = 1100;
    const cargaHorariaMensal = 220;

    const valorHora = salarioMinimo / cargaHorariaMensal;

    expect(valorHora).toEqual(5);
  });
});
