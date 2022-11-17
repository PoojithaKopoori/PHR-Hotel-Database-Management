const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.canceldeluxeroom = (req, res) => {
    console.log(req.body);

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const contact_no = req.body.contact_no;
    const email = req.body.email;
    const selected_room = req.body.selected_room;


    // db.query('SELECT * from customer where selected_room=?', [selected_room], function(error, results) {
    //     if (error) {
    //       console.log(error);
    //     }
    //     if (results.length > 0) {
          db.query('DELETE from customer where selected_room=?', [selected_room],
            (error, results) => {
              if (error) {
                console.log(error);
              }
              else {
                console.log(results);
                db.query('UPDATE deluxeroomsavailable SET rooms_available=rooms_available+1');
                res.render('cancelbooking');
              }


        })

    }

    //   else{
    //     console.log(results);
    //     // return res.render('standardroom', {
    //     //   message: 'Booking Confirmed'
    //     // });
    //   }
    // })
    // db.query('INSERT INTO selected SET ?', {room_selected: room_selected, email: email, selected_room: selected_room}, (error, results) =>{
    //   if(error){
    //     console.log(error);
    //   }
    //   else{
    //     console.log(results);
    //     // return res.render('standardroom', {
    //     //   message: 'Booking Confirmed'
    //     // });
    //   }
    // })
    //   res.send("Booking Confirmed");
    // }
    //
    //
    //
    //
    //
    //
    //
    //
    // db.query('INSERT INTO customer SET ?', {customer_id: customer_id, hotel: hotel, room_selected: room_selected, first_name: first_name,
    // last_name: last_name, contact_no: contact_no, email: email, arrival_date: arrival_date, departure_date: departure_date,
    // number_of_adults: number_of_adults, number_of_children: number_of_children, selected_room: selected_room, total_amount: total_amount,
    // type_of_payment: type_of_payment, any_suggestions: any_suggestions}, (error, results) =>{
    //   if(error){
    //     console.log(error);
    //   }
    //   if(results.length>0){
