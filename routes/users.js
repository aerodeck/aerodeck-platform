require( '../db' );
var mongoose = require('mongoose');
var user     = mongoose.model( 'user' );

exports.newUser = function(req, res) {
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