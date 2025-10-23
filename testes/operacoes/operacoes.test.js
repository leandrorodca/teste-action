const sum = require('../../src/operacoes/sum');
const sub = require('../../src/operacoes/sub');

test('Soma dois números corretamente', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Lança erro ao passar parâmetros não numéricos', () => {
    expect(() => sum(1, 'a')).toThrow('Os parâmetros devem ser números');
});

test('Subtrai dois números corretamente', () => {
    expect(sub(3, 2)).toBe(1);
});

test('Lança erro ao passar parâmetros não numéricos', () => {
    expect(() => sub(1, 'a')).toThrow('Os parâmetros devem ser números');
});