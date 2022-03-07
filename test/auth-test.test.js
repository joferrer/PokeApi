const chai = request('chai');
const chaiHttp = request('chai-htpp');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de prueba auth',()=>{
    it('shout return 403',(done)=>{
        
    });
});