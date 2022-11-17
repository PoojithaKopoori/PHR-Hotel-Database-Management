const mysql = require('mysql');
const console = require('console');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});


exports.user = (req, res) => {
  console.log(req.body);

  const selected_room = req.body.selected_room;

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
  res.render('userdisplay', context);
})
}
