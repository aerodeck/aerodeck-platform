require( '../db' );
var mongoose = require('mongoose');
var user     = mongoose.model( 'user' );
var bcrypt = require('bcrypt');
var date = new Date();

/*
 * POST new user.
 */
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
  full_name = req.body.full_name;
  username = req.body.username;
  email = req.body.email;
  password = req.body.password;
  apnToken = req.body.apn;
  gcmToken = req.body.gcm;
  

  user.findOne({username: username}, function(err, userExists){
    if(userExists){
      res.send('User Exists')

    }else{
      bcrypt.genSalt(10, function(err, salt) {
        if (err){
          return err;
        }else{
          bcrypt.hash(password, salt, function(err, hash) {
            if (err){
              console.log(err);
            }else{
              this.passwordHash = hash;
            }

          });
        }
        newUser = user({
          fullName: full_name,
          username: username,
          email: email,
          password: this.passwordHash,
          apn: apnToken,
          gcm: gcmToken,
          created: date,
          updated: null
        }).save()
        res.send('User: '+ username +' Saved...');
        console.log('User Saved in Databased')
      });
    }
  });
  
  


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