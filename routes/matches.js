<<<<<<< HEAD
var game = require('../games');
/*
 * POST a match.
 */
exports.quadrowNew = function(req, res){
	console.log('POST /quadrow/matches');
};
=======
var games = require('../games');
>>>>>>> ddc03f799689fb80574df250aac17b3a85a01c8f

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
