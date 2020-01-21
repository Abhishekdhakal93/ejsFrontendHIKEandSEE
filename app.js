
var express =require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
var User = require('./model/user');

var mongoose = require('mongoose');

//db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/something',{
   useNewUrlParser: true,
  useUnifiedTopology: true})
.then(()=> console.log('connection successful'))
// .catch((err)=> console.log(err))

app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.json()); // get information from html forms

app.use(bodyParser.urlencoded({ extended: true }));
//==================================================


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
// register post api
app.post('/register', (req, res) => {
    console.log(req.body);
    data={
        'imageupload': req.body.imageupload,
        'userfname': req.body.userfname,
        'userlname': req.body.username,
        'email': req.body.email,
        'username': req.body.username,
        'password': req.body.password,
        'passwordconf': req.body.passwordconf,
        'usertype':"user"
    }
    var mydata = new User(data);
    mydata.save().then(function (data) {
        alert(Success)
        res.send(data);
        res.redirect('/login')}
        
 ).catch(function (e) {
      res.send(e);
    res.redirect('/register')
      

    });
});
//=====================================
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
//======================================

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, (req, res) => {
    console.log('server is running in port', +8000);
});
