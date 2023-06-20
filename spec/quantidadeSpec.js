describe('Calculo da quantia a receber pelas horas extras', function() {
    it('Deve retornar a quantia a receber correta com base no número de horas extras trabalhadas e no valor da hora extra', function() {
      const numeroHorasExtras = 10;
      const valorHoraExtra = 7.5;
  
      const quantiaHorasExtras = numeroHorasExtras * valorHoraExtra;
  
      expect(quantiaHorasExtras).toEqual(75);
    });
  });
  