var express =require('express');
var app = express();
var path = require('path')

app.set('view engine','ejs');
app.set('views','views');

app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/login',(req,res)=>
{
    res.render('login')
});

app.get('/register',(req,res)=>
{
    res.render('register')
});
app.get('/profile',(req,res)=>
{
    res.render('profile')
});

app.get('/home',(req,res)=>
{
    res.render('home')
});

app.get('/aboutus',(req,res)=>
{
    res.render('aboutus')
});

app.get('/footer',(req,res)=>
{
    res.render('footer')
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, (req, res) => {
    console.log('server is running in port', +8000);
});