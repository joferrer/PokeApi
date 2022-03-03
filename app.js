const express = require('express');
const app = express(); //Constructor de express
const port = 3000;

//Empezar a escuchar conexiones
app.listen(port,()=>{
    console.log('Server started at port 3000');
});

app.get('/',(req,res)=>{
    //req(request) es la petición
    res.send('HELLO WORD!'); 
});

app.post('/team/pokemons',()=>{

});

app.get('/team',()=>{

});

app.delete('/team/pokemons/:pokeid',()=>{

});

app.put('/team',()=>{

});
