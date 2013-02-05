exports.paramHandler = function(req, res, next, value) {
  req.game.match.findById(value, function(err, match) {
    if (err) {
      next(err);
    } else if (match) {
      req.match = match;
      next();
    } else {
      res.send(404);
    }
  });
}

exports.create = function(req, res, next) {

  // Ignore specific fields in request
  delete req.body.updated;
  delete req.body.created;
  delete req.body.deletedParticipants;
  delete req.body.state;
  
  req.game.match.create(req.body, function(err, createdMatch) {
    if (err) {
      next(err);
      return;
    }

    console.log("Created match \"" + createdMatch.id + "\"");

    res.send(createdMatch.toJSON());
  });
};

exports.list = function(req, res) {
  console.log('GET /:game/matches');
};

exports.show = function(req, res) {
  console.log('GET /:game/matches/:matchid');
};

exports.update = function(req, res) {
  console.log('PUT /:game/matches/:matchid');
};

exports.delete = function(req, res) {
  console.log('DELETE /:game/matches/:matchid');
};
