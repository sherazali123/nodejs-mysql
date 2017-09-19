var 
  // to connect with mysql
  mysql = require('mysql'),
  // module to control flow of javascript 
  async = require('async');

// handling pools
var state = {
  pool: null,
  mode: null,
}

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host     : process.env.mysql_host,
    user     : process.env.mysql_user,
    password : process.env.mysql_password,
    database : process.env.mysql_database
  })

  state.mode = mode;
  done();
}

exports.get = function() {
  return state.pool
}

exports.drop = function(tables, done) {
  var pool = state.pool
  if (!pool) return done(new Error('Missing database connection.'))
}