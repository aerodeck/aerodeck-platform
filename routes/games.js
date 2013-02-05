var games = require('../games');

exports.paramHandler = function(req, res, next, value) {
  for(var i = 0; i < games.length; i++) {
    if (games[i].id == value) {
      req.game = games[i];
      next();
      return;
    }
  }

  res.send(404);
}

exports.list = function(req, res) {
  res.send(JSON.stringify({ games: games }));
};
