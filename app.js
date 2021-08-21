var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// // moduels
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('bodyParser')

// // 
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: false}));

// // connect to database
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "BathBombs_DB"
// });

// // routes
// app.get('/', function(request, response){
//     console.log('GET request received at /') 
//     con.query("SELECT * FROM customers", function (err, result) {
//         if (err) throw err;
//         else{
//             response.send(result)
//         }

//     });
// });

// // listen for trafic and display on localhost:9000
// app.listen(9000, function () {
//     console.log('Connected to port 9000');
// });