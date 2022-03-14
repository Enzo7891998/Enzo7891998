import { Calculadora } from "../calculadora";

test('2 mas 3 tiene que dar 5', () => {
    const calc = new Calculadora();
    expect(calc.add(2,3)).toBe(5);
});

test('10 menos 3 tiene que dar 7', () => {
    const calc = new Calculadora();
    expect(calc.resta(10,3)).toBe(7);
});

test('4 por 5 tiene que dar 20', () => {
    const calc = new Calculadora();
    expect(calc.multiplicar(4,5)).toBe(20);
});

test('20 dividido 2 tiene que dar 10', () => {
    const calc = new Calculadora();
    expect(calc.divid(20,2)).toBe(10);
});