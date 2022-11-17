const mysql = require('mysql');
const console = require('console');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.spainsert = (req, res) => {
    console.log(req.body);

    // const customer_id = req.body.customer_id;
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const email_id = req.body.email_id;
    const emp_id = req.body.emp_id;

    db.query('INSERT INTO staff SET ?', {
        name: name,
        age: age,
        gender: gender,
        email_id: email_id,
        emp_id: emp_id
      }, (error, results) => {
        if (error) {
          console.log(error);
        }else{
          console.log(results);
        }
      })
      db.query('INSERT INTO Spa SET ?', {
          // customer_id: customer_id,
          name: name,
          age: age,
          gender: gender,
          emp_id: emp_id
        }, (error, results) => {
          if (error) {
            console.log(error);
          }else{
            console.log(results);
            res.render('insertion');
          }
        })

    }
