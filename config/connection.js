var mysql = require("mysql");
var connection;
// var connection = mysql.createConnection({
//   host: "Localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgersDB"
// });

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "burgersDB"
  });
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
