var express = require('express'),
    http = require('http'),
    users = require('./routes/users'),
    games = require('./routes/games'),
    matches = require('./routes/matches');

var app = express();

app.configure(function() {
  // Basic setup
  app.set('port', 8000);
  app.enable('trust proxy');

  // Middleware
  app.use(express.compress());
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.logger('dev'));
});

app.configure('production', function() {
  app.use(express.logger());
});

var errorResponse = function(error) {
  return function(req, res) { res.send(error); };
}

// Users collection
app.post('/users', users.create);
app.get('/users', users.list);
app.put('/users', errorResponse(405));
app.delete('/users', errorResponse(405));

// User document
app.param('userid', users.paramHandler);
app.post('/users/:userid', errorResponse(405));
app.get('/users/:userid', users.show);
app.put('/users/:userid', users.update);
app.delete('/users/:userid', users.delete);

// User document actions
app.post('/users/:userid/reset', users.passwordReset);
app.post('/users/:userid/change', users.passwordChange);

// Games collection
app.post('/games', errorResponse(405));
app.get('/games', games.list);
app.put('/games', errorResponse(405));
app.delete('games', errorResponse(405));

// Matches collection
app.param('game', games.paramHandler);
app.post('/:game/matches', matches.create);
app.get('/:game/matches', matches.list);
app.put('/:game/matches', errorResponse(405));
app.delete('/:game/matches', errorResponse(405));

// Match document
app.param('matchid', matches.paramHandler);
app.post('/:game/matches', errorResponse(405));
app.get('/:game/matches/:matchid', matches.show);
app.put('/:game/matches/:matchid', matches.update);
app.delete('/:game/matches/:matchid', matches.delete);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Aerodeck application server listening on port " + app.get('port'));
});
