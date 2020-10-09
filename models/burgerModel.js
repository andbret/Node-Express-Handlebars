var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(columns, value, cb) {
    orm.create("burgers", columns, value, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update(condition, function(res) {
      cb(res);
    });
  },
  remove: function(val, cb) {
    orm.remove("burgers", "id", val, function(data) {
      cb(data);
    });
  }
};

module.exports = burger;