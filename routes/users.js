require( '../db' );
var mongoose = require('mongoose');
var user     = mongoose.model( 'user' );
var bcrypt = require('bcrypt');
var date = new Date();

exports.newUser = function(req, res) {
  
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  //date
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var day = date.getDate();
  //Make it look nice (Official format TBD)
  var time = month + '/' + day + '/' + year + ' at ' + hours + ':' + minutes + ':' + seconds;
  
  //requested bodies
  full_name = req.body.user.full_name;
  username = req.body.user.username;
  email = req.body.user.email;
  password = req.body.user.password;
  apnToken = req.body.user.apn;
  gcmToken = req.body.user.gcm;

  //password hashing
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  newUser = user({
    fullName: full_name,
    username: username,
    email: email,
    password: hash,
    apn: apnToken,
    gcm: gcmToken,
    created: date,
    updated: null
  }).save()
  
  console.log('POST /users');
};

exports.listUsers = function(req, res) {
  console.log('GET /users');
};

exports.showUser = function(req, res) {
  console.log('GET /users/:userid');
};

exports.updateUser = function(req, res) {
  console.log('PUT /users/:userid');
};

exports.deleteUser = function(req, res) {
  console.log('DELETE /users/:userid');
};

exports.passwordReset = function(req, res) {
  console.log('POST /users/:userid/reset');
};

exports.passwordChange = function(req, res) {
  console.log('POST /users/:userid/change');
};