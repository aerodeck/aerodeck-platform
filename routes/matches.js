var games = require('../games');

exports.newMatch = function(req, res) {
  console.log('POST /:game/matches');
};

exports.listMatches = function(req, res) {
  console.log('GET /:game/matches');
};

exports.showMatch = function(req, res) {
  console.log('GET /:game/matches/:matchid');
};

exports.updateMatch = function(req, res) {
  console.log('PUT /:game/matches/:matchid');
};

exports.updateMatch = function(req, res) {
  console.log('PUT /:game/matches/:matchid');
};

exports.deleteMatch = function(req, res) {
  console.log('DELETE /:game/matches/:matchid');
};
