const express = require('express');
const router = express.Router();

//Ya estamos en /team por lo que estamos en la raiz.
router.route('/').get((req,res,next)=>{
    console.log('Conectado.');
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