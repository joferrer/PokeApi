const mongoose = require('mongoose');
const password = '123Roco-db123';
const dbName = 'db';

mongoose.connect(`mongodb+srv://admin:${password}@cluster0.khpvw.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {useNewUrlParser: true,useUnifiedTopology: true});

    /*
const Cat = mongoose.model('Cat',{name: String});
const kitty = new Cat({name: 'Michi' });
kitty.save().then(()=>console.log('mew'));
*/