const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://ortegadaniel588:<password>@cluster0.9dsi8jp.mongodb.net/appUsers', {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false
    
})
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));