
/**
 * Module dependencies.
 */

var express = require('express')
  , oauth = require('./routes/oauth')
  , users = require('./routes/users')
  , games = require('./routes/games')
  , matches = require('./routes/matches')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/** 
  oauth routing 
**/
app.post('/oauth/token', oauth.password);

/**
  users routing
**/
app.get('/users', users.list);
app.post('/users', users.new);
app.get('/users/:userid', users.showUser);
app.put('/users/:userid', users.updateUser);
app.delete('/users/:userid', users.deleteUser);
app.post('/users/:userid/reset', users.passwordReset);
app.post('/users/:userid/change', users.passwordChange);

/**
  games routing
**/
app.get('/games', games.list);

//quadrow routing
app.post('/quadrow/matches', matches.quadrowNew); /**function with quadrow prefix because 
functions for other games (i.e. towers_new) occupy file **/
app.get('/quadrow/matches', matches.quadrowList);
app.get('/quadrow/matches/:matchid', matches.showQuadrowMatch);
app.put('/quadrow/matches/:matchid', matches.updateQuadrowMatch);
app.delete('/quadrow/matches/:matchid', matches.deleteQuadrowMatch);


http.createServer(app).listen(app.get('port'), function(){
  console.log("aerodeck API server listening on port " + app.get('port'));
});
