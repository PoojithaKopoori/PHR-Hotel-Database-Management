const mysql = require('mysql');
const console = require('console');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.loginpage = (req, res) => {
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;

    db.query('select * from login where email=? ', [email],
      (error, results) => {
        if (error) {
          console.log(error);
        }
        else if(results.length>0){
          res.render('loginsuccess');
        }
        else{
          res.render('oops');
        }
    })


  }
