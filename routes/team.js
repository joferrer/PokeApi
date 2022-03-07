const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
//Ya estamos en /team por lo que estamos en la raiz.
router.route('/').get((req,res,next)=>{
   /* console.log('Conectado.'+req.url);
    console.log('Conectado. 2'+req.params.width);
    console.log('Conectado. 2'+ new URLSearchParams(req.url).keys().next().value);
    console.log('Conectado. 2'+ new URLSearchParams(req.url).values().next().value);
    console.log('Conectado. 2'+ new URLSearchParams(req.url).get(0));*/
    console.log('Conectado. '+ req.query.user); //FUNCIONA

    //console.log('Conectado. 2'+req.user);
    res.status(200).json(
        {
            trainer: req.query.user,
            team: teamController.getTeamsOfUser(req.query.user)
        });
}
    
)
.put(); 
/*
app.post('/team/pokemons',()=>{

});

app.get('/team',()=>{

});

app.delete('/team/pokemons/:pokeid',()=>{

});

app.put('/team',()=>{

});
*/

//Exportar router para usarlo en otros lados.
exports.router = router; 