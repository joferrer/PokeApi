const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suit de prueba',()=>{
    it('Deberia ser HELLO WORD!',(done)=>{
        chai.request(app).get('/').end((err,res)=>{
            console.log('A');
            chai.assert.equal(res.text,'HELLO WORD!');
            done();
        });
        console.log('B');

    });
    

})