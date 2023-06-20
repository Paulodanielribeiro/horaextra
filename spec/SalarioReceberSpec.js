describe('Calculo do salário a receber', function() {
    it('Deve retornar o salário a receber correto com base no salário bruto e na quantia a receber pelas horas extras', function() {
      const salarioBruto = 1500;
      const quantiaHorasExtras = 100;
  
      const salarioReceber = salarioBruto + quantiaHorasExtras;
  
      expect(salarioReceber).toEqual(1600);
    });
  });
  