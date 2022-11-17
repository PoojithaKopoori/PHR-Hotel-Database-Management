const mysql = require('mysql');
const console = require('console');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.tbook = (req, res) => {
    console.log(req.body);

    // const customer_id = req.body.customer_id;

    const room_number = req.body.room_number;


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
                        res.render('tbookdisplay', context);
                      })
                      }







// console.log(count);

    // if(count==0){
    //   res.send("No rooms available");
    // }
    // else{
    //   db.query('SELECT * from customer where selected_room=?', [selected_room], function(error, results) {
    //       if (error) {
    //         console.log(error);
    //       }
    //       if (results.length > 0) {
    //         console.log("Room Already Booked");
    //         res.send("Room Already Booked");
    //       } else {
    //         db.query('INSERT INTO customer SET ?', {
    //             // customer_id: customer_id,
    //             hotel: hotel,
    //             room_selected: room_selected,
    //             first_name: first_name,
    //             last_name: last_name,
    //             contact_no: contact_no,
    //             email: email,
    //             arrival_date: arrival_date,
    //             departure_date: departure_date,
    //             number_of_adults: number_of_adults,
    //             number_of_children: number_of_children,
    //             selected_room: selected_room,
    //             total_amount: total_amount,
    //             type_of_payment: type_of_payment,
    //             any_suggestions: any_suggestions
    //           }, (error, results) => {
    //             if (error) {
    //               console.log(error);
    //             }
    //             else {
    //               db.query('UPDATE standardroomsavailable SET rooms_available=rooms_available-1');
    //               res.send("BOOKING CONFIRMED");
    //             }
    //
    //       })
    //     }
    //   })
    // }



      // if(count<11){
      //   db.query('SELECT * from customer where selected_room=?', [selected_room], function(error, results) {
      //       if (error) {
      //         console.log(error);
      //       }
      //       if (results.length > 0) {
      //         console.log("Room Already Booked");
      //         res.send("Room Already Booked");
      //       } else {
      //         db.query('INSERT INTO customer SET ?', {
      //             customer_id: customer_id,
      //             hotel: hotel,
      //             room_selected: room_selected,
      //             first_name: first_name,
      //             last_name: last_name,
      //             contact_no: contact_no,
      //             email: email,
      //             arrival_date: arrival_date,
      //             departure_date: departure_date,
      //             number_of_adults: number_of_adults,
      //             number_of_children: number_of_children,
      //             selected_room: selected_room,
      //             total_amount: total_amount,
      //             type_of_payment: type_of_payment,
      //             any_suggestions: any_suggestions
      //           }, (error, results) => {
      //             if (error) {
      //               console.log(error);
      //             }
      //             else {
      //               db.query('UPDATE standardroomsavailable SET rooms_available=rooms_available-1');
      //               res.send("<h1>BOOKING CONFIRMED</h1>");
      //             }
      //
      //       })
      //     }
      //   })
      // }
      // else{
      //   res.send("No rooms available");
      // }





    // db.query('SELECT * from customer where selected_room=?', [selected_room], function(error, results) {
    //     if (error) {
    //       console.log(error);
    //     }
    //     if (results.length > 0) {
    //       console.log("Room Already Booked");
    //       res.send("Room Already Booked");
    //     } else {
    //       db.query('INSERT INTO customer SET ?', {
    //           customer_id: customer_id,
    //           hotel: hotel,
    //           room_selected: room_selected,
    //           first_name: first_name,
    //           last_name: last_name,
    //           contact_no: contact_no,
    //           email: email,
    //           arrival_date: arrival_date,
    //           departure_date: departure_date,
    //           number_of_adults: number_of_adults,
    //           number_of_children: number_of_children,
    //           selected_room: selected_room,
    //           total_amount: total_amount,
    //           type_of_payment: type_of_payment,
    //           any_suggestions: any_suggestions
    //         }, (error, results) => {
    //           if (error) {
    //             console.log(error);
    //           } else {
    //             res.send("Booking Confirmed");
    //           }
    //
    //
    //         })
    //       }
    //
    //   })
    //

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
