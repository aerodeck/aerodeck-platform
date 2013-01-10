/*
 * POST a match.
 */
exports.quadrowNew = function(req, res){
	console.log('POST /quadrow/matches');
};

/*
 * GET matches of current user.
 */
exports.quadrowList = function(req, res){
	console.log('GET /quadrow/matches');
};

/*
 * GET a match.
 */
exports.showQuadrowMatch = function(req, res){
 	console.log('GET /quadrow/matches/:matchid')
};

/*
 * UPDATE a match.
 */
exports.updateQuadrowMatch = function(req, res){
 	console.log('PUT /quadrow/matches/:matchid')
};

/*
 * DELETE a match.
 */
exports.deleteQuadrowMatch = function(req, res){
 	console.log('DELETE /quadrow/matches/:matchid')
};


