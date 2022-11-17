const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.transport = (req, res) => {
    console.log(req.body);

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const vehicle_type = req.body.vehicle_type;
    const contact_no = req.body.contact_no;
    const room_number = req.body.room_number;
    const no_of_passengers = req.body.no_of_passengers;
    const pick_up_point = req.body.pick_up_point;
    const destination_point = req.body.destination_point;
    const vehicle_number = Math.floor(Math.random()*10000);
    const contact_number = Math.floor(Math.random()*10000000000);

          db.query('INSERT INTO transport SET ?', {
              first_name: first_name,
              last_name: last_name,
              email: email,
              vehicle_type: vehicle_type,
              contact_no: contact_no,
              room_number: room_number,
              no_of_passengers: no_of_passengers,
              pick_up_point: pick_up_point,
              destination_point: destination_point,
              vehicle_number: vehicle_number,
              contact_number: contact_number
            }, (error, results) => {
              if (error) {
                console.log(error);
              } else {
                db.query('select * from transport where room_number=?',
              [room_number],
              function(error, resu){

                var arr=[];
                var name;
                for(var i=0; i<resu.length; i++){
                  arr[i]=resu[i];

                }

                context={
                  'data':arr,
                  'name':'A'
                };
                res.render('details', context);
              })
              }


            })
          }
