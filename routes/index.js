const router = require('express').Router();
const User = require('../models/User');

app.get('/', (req,res)=>{
    //res.send("Este es un index");
    //esto me renderiza la pagina princiapal
    res.render('index');
});

router.get('/about', (req,res)=>{
    //res.send("Este es un index");
    //esto me renderiza la pagina princiapal
    res.render('about');
});

router.get('/login', (req,res)=>{
    //res.send("Este es un index");
    //esto me renderiza la pagina princiapal
    res.render('login/login');
});

router.post('/register', (req,res)=>{
    //res.send("Este es un index");
    //res resuesta req de solicitud
    //esto me renderiza la pagina princiapal
    //res.render('login/login');
    console.log("Estoy en el metodo post");
    const body = req.body;
    const {name, email, password, password2, dir} = req.body;
    const newUser = new User({name, email, password, password2, dir});
    await newUser.save();
    console.log(body);
});

module.exports = router;

    //res resuesta req de solicitud