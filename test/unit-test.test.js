const assert = require('chai').assert;
//Función de prueba
function sumar(a,b){
    return a+b;
}
describe('Suite prueba', ()=>{
    it('should return 2', ()=>{
        let sum = sumar(2,2);
        assert.equal(sum,4);
    });
});