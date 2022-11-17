const mysql = require('mysql');
const console = require('console');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.deluxeroom = (req, res) => {
    console.log(req.body);

    // const customer_id = req.body.customer_id;
    const hotel = req.body.hotel;
    const room_selected = req.body.room_selected;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const contact_no = req.body.contact_no;
    const email = req.body.email;
    const arrival_date = req.body.arrival_date;
    const departure_date = req.body.departure_date;
    const number_of_adults = req.body.number_of_adults;
    const number_of_children = req.body.number_of_children;
    const selected_room = req.body.selected_room;
    const total_amount = req.body.total_amount;
    const type_of_payment = req.body.type_of_payment;
    const any_suggestions = req.body.any_suggestions;
var count;
     db.query('SELECT rooms_available from deluxeroomsavailable',function(error,resul){
       if(error){
         console.log(error);

       }
       else{
          count=resul[0].rooms_available;

          if(count==0){
            res.render('norooms');
          }
          else{
            db.query('SELECT * from customer where selected_room=?', [selected_room], function(error, results) {
                if (error) {
                  console.log(error);
                }
                if (results.length > 0) {
                  console.log("Room Already Booked");
                  res.render('roomalreadybooked');
                } else {
                  db.query('INSERT INTO customer SET ?', {
                      // customer_id: customer_id,
                      hotel: hotel,
                      room_selected: room_selected,
                      first_name: first_name,
                      last_name: last_name,
                      contact_no: contact_no,
                      email: email,
                      arrival_date: arrival_date,
                      departure_date: departure_date,
                      number_of_adults: number_of_adults,
                      number_of_children: number_of_children,
                      selected_room: selected_room,
                      total_amount: total_amount,
                      type_of_payment: type_of_payment,
                      any_suggestions: any_suggestions
                    }, (error, results) => {
                      if (error) {
                        console.log(error);
                      }
                      else {
                        db.query('UPDATE deluxeroomsavailable SET rooms_available=rooms_available-1');
                        // res.render('display');
                        db.query('select * from customer where selected_room=?',
                      [selected_room],
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
                        res.render('display', context);
                      })
                      }

                })
              }
            })
          }
       }
     });
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
    }


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
