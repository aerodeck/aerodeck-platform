// Load modules
var express = require('express')
  , users = require('./routes/users')
  , games = require('./routes/games')
  , matches = require('./routes/matches')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function() {
  // Basic setup
  app.set('port', 8000);

  // Nginx
  app.enable('trust proxy');

  // Middleware
  app.use(express.compress());
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.errorHandler());
  app.use(express.logger('dev'));
});

app.configure('production', function() {
  app.use(express.logger());
});

var errorResponse = function(error) {
  return function(req, res) { res.send(error); };
}

// Users collection
app.post('/users', users.newUser);
app.get('/users', users.listUsers);
app.put('/users', errorResponse(405));
app.delete('/users', errorResponse(405));

// User document
app.post('/users/:userid', errorResponse(405));
//app.get('/users/:userid', users.showUser); *method deleted*
app.put('/users/:userid', users.updateUser);
app.delete('/users/:userid', users.deleteUser);

// User document actions
app.post('/users/:userid/reset', users.passwordReset);
app.post('/users/:userid/change', users.passwordChange);

// Games collection
app.post('/games', errorResponse(405));
app.get('/games', games.listGames);
app.put('/games', errorResponse(405));
app.delete('games', errorResponse(405));

// Matches collection
app.post('/:game/matches', matches.newMatch);
app.get('/:game/matches', matches.listMatches);
app.put('/:game/matches', errorResponse(405));
app.delete('/:game/matches', errorResponse(405));

// Match document
app.post('/:game/matches', errorResponse(405));
app.get('/:game/matches/:matchid', matches.showMatch);
app.put('/:game/matches/:matchid', matches.updateMatch);
app.delete('/:game/matches/:matchid', matches.deleteMatch);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Aerodeck API server listening on port " + app.get('port'));
});
