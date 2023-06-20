describe('Calculo do valor da hora extra', function() {
    it('Deve retornar o valor correto da hora extra com base no valor da hora trabalhada', function() {
      const valorHora = 5;
  
      const valorHoraExtra = valorHora * 1.5;
  
      expect(valorHoraExtra).toEqual(7.5);
    });
  });
  