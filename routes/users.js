var mongoose = require('mongoose'),
    User = require('../models/user'),
    bcrypt = require('bcrypt');

mongoose.connect("mongodb://localhost:27017/aerodeck");

exports.paramHandler = function(req, res, next, value) {
  User.findById(value, function(err, user) {
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      res.send(404);
    }
  });
}

exports.create = function(req, res, next) {

  // TODO: Verify password before hashing!

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      next(err);
      return;
    }

    req.body.password = hash;

    // Ignore specific fields in request
    delete req.body.updated;
    delete req.body.created;

    User.create(req.body, function(err, createdUser) {
      if (err) {
        next(err);
        return;
      }

      console.log("Created user \"" + createdUser.username + "\"");

      res.send(createdUser.toJSON());
    });
  });
};

exports.list = function(req, res, next) {
  res.send(405);
};

exports.update = function(req, res, next) {
  
};

exports.show = function(req, res, next) {
  hide = User.schema.options.toJSON.hide.slice();

  if (!false) { // IF NOT CURRENT USER
    hide.push('email');
  }

  res.send(req.user.toJSON({ hide: hide, transform: true, getters: true }));
};

exports.delete = function(req, res, next) {
  if (true) { // IF CURRENT USER
    req.user.remove(function(err) {
      if (err) {
        next(err);
        return;
      }

      res.send();
    });
  }
}; 
  
exports.passwordReset = function(req, res, next) {
  console.log('POST /users/:userid/reset');
};
  
exports.passwordChange = function(req, res, next) {
  console.log('POST /users/:userid/change');
};
