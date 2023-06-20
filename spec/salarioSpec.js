describe('Calculo do salário bruto', function() {
    it('Deve retornar o salário bruto correto com base no número de horas trabalhadas e no valor da hora trabalhada', function() {
      const numeroHorasTrabalhadas = 180;
      const valorHora = 5;
  
      const salarioBruto = numeroHorasTrabalhadas * valorHora;
  
      expect(salarioBruto).toEqual(900);
    });
  });
  