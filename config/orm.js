var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, column, value, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += column.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(value.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update: function(condition, cb) {


    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [condition], function(err, result) {
      if (err) {
        return res.status(500).end();
      }

      cb(result);
      
    });
  },

  remove: function(table, col, val, cb) {
    connection.query("DELETE FROM ?? WHERE ?? = ?", [table, col, val], function(err, data) {
      if(err)
        throw err;
      
      console.log(data);

      return cb(data);
    });
  }
};

module.exports = orm;