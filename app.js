const express = require('express');
const app = express(); //Constructor de express
//require('./auth')(passport); //LLamda a auth.js

const teamsRoutes = require('./routes/team').router;

app.use('/team',teamsRoutes); //Link con la ruta /team
const port = 3000;


//Empezar a escuchar conexiones
app.listen(port,()=>{
    console.log('Server started at port 3000');
});

app.post('/login',(req,res)=>{

});

app.get('/',(req,res)=>{
    //req(request) es la petición
    res.send('HELLO WORD!'); 
});



exports.app = app;