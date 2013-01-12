
var games = require('../games');
/*
 * POST a match.
 */
exports.quadrowNew = function(req, res){
	console.log('POST /quadrow/matches');
};


exports.newMatch = function(req, res) {
  console.log('POST /:match/matches');
};

exports.listMatches = function(req, res) {
  console.log('GET /:match/matches');
};

exports.showMatch = function(req, res) {
  console.log('GET /:match/matches/:matchid');
};

exports.updateMatch = function(req, res) {
  console.log('PUT /:match/matches/:matchid');
};

exports.deleteMatch = function(req, res) {
  console.log('DELETE /:match/matches/:matchid');
};
