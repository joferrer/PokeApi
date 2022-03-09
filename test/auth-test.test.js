const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de prueba auth',()=>{
    it('shout return 403',(done)=>{
        done();
    });
});