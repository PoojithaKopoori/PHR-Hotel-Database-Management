const mysql = require('mysql');
const console = require('console');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.registrationpage = (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query('select * from registerids where email=?', [email],
      (error, results) => {
        if (error) {
          console.log(error);
        }
        else if(results.length>0){
          console.log(results);
          res.render('loginsuccess');
          db.query('INSERT INTO login SET ?',{
            email:email,
            password:password
          },(error, result)=>{
            if (error) {
              console.log(error);
            }
          })

        }
        else{
          res.render('oops');
        }


  })


  }
