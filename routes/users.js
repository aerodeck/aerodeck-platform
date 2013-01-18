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
    if (err) res.send(err);
    var users = this;
    if(userExists){
      console.log('User Exists');

    }else{
      bcrypt.genSalt(10, function(err, salt) {
        if (err){
          res.send(err)
        }else{
          bcrypt.hash(password, salt, function(err, hash) {
            if (err){
              res.send(err)
            }else{
              users.passwordHash = hash;
            }

          });
        }
        newUser = user({
          fullName: full_name,
          username: username,
          email: email,
          password: users.passwordHash,
          apn: apnToken,
          gcm: gcmToken,
          created: {type: Date, default: Date.now},
          updated: {type: Date, default: Date.now}
        }).save()
        console.log('User: '+ username + ', Saved in Database')
      });
    }
  });

  console.log('POST /users');
};

exports.listUsers = function(req, res) {
  var q = req.query.username;
  
  if(typeof q == 'undefined'){
  	user.find({}, function(err, user){
      if (err) res.send(err);
      if (user){
        userJSON = JSON.stringify(user)
        res.send('{' + userJSON + '}');
      }else{
        res.send('No users found in database\n');
      }
  	});
  	
  }else{
    user.findOne({username: q}, function(err, user){
      if (err) res.send(err);
    	if(user){
    	  res.send(user)
    	}else{
    	  res.send(JSON.stringify('Query field invalid.'));
    	}
    })
  }
  console.log('GET /users')
};

exports.updateUser = function(req, res) {
  var userid = req.params.userid;
  user.findOne({_id: userid}, function(err, user){
    if(err) res.send(err);
    res.send(userid);
  })
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