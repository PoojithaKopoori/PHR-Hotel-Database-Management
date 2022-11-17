
const express=require('express');
const app=express();
const path=require('path');
const mysql=require('mysql');
const dotenv=require('dotenv');

dotenv.config({path: './.env'});

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// const publicDirectory = path.join(__dirname, './')
// console.log(__dirname);
app.set('view engine', 'ejs');


db.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("MySql is connected....");
    }
});


app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/auth1', require('./routes/auth1'));
app.use('/authcancel', require('./routes/authcancel'));
app.use('/authtransport', require('./routes/authtransport'));
app.use('/authdisplay', require('./routes/authdisplay'));
app.use('/authregister', require('./routes/authregister'));
app.use('/authlogin', require('./routes/authlogin'));
app.use('/auth2', require('./routes/auth2'));
app.use('/auth3', require('./routes/auth3'));
app.use('/authcancel1', require('./routes/authcancel1'));
app.use('/authcancel2', require('./routes/authcancel2'));
app.use('/authcancel3', require('./routes/authcancel3'));
app.use('/authuser', require('./routes/authuser'));
app.use('/authtemp', require('./routes/authtemp'));
app.use('/authtbook', require('./routes/authtbook'));
app.use('/authspa', require('./routes/authspa'));
app.use('/authgym', require('./routes/authgym'));
app.use('/authfood', require('./routes/authfood'));
app.use('/authservices', require('./routes/authservices'));
app.use('/authinsertspa', require('./routes/authinsertspa'));
app.use('/authinsertgym', require('./routes/authinsertgym'));
app.use('/authinsertfood', require('./routes/authinsertfood'));


app.listen(6200,function(){
    console.log("server started on port 6200");
});
