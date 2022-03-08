const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
//Ya estamos en /team por lo que estamos en la raiz.
router.route('/').get((req,res,next)=>{
   
    console.log('Conectado 1. '+ req.query.userId); //FUNCIONA
 
    res.status(200).json(
        {
            trainer: req.query.user,
            team: teamController.getTeamsOfUser(req.query.userId)
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