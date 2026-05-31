const { sumatoria_mayor_100 } = require('./sumatoria_mayor_100');

describe('sumatoria_mayor_100',()=>{
    test('Happy path: suma >= 100 => true', ()=>{
        expect(sumatoria_mayor_100([50, 50])).toBe(true)
        expect(sumatoria_mayor_100([100, 5])).toBe(true)
    })
    
    test('Happy path: suma < 100 => false', ()=>{
        expect(sumatoria_mayor_100([10, 20, 30])).toBe(false)
        expect(sumatoria_mayor_100([99])).toBe(false)
    })
    
    test('Sad path: numeros inválidos', ()=>{
        expect(() => sumatoria_mayor_100([])).toThrow('numeros invalidos')
        expect(() => sumatoria_mayor_100('no soy un array')).toThrow('numeros invalidos')
        expect(() => sumatoria_mayor_100(123)).toThrow('numeros invalidos')
    })
})