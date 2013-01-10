/*
 * GET users list.
 */
exports.list = function(req, res){
  console.log('GET /users');
};

/*
 * POST new user.
 */
exports.new = function(req, res){
  console.log('POST /users');
};

/*
 * GET a user.
 */
exports.showUser = function(req, res){
  console.log('GET /users/:userid');
};

/*
 * UPDATE a user.
 */
exports.updateUser = function(req, res){
  console.log('PUT /users/:userid');
};

/*
 * DELETE a user.
 */
exports.deleteUser = function(req, res){
  console.log('DELETE /users/:userid');
};

/*
 * POST reset password.
 */
exports.passwordReset = function(req, res){
  console.log('POST /users/:userid/reset');
};

/*
 * POST changed password.
 */
exports.passwordChange = function(req, res){
  console.log('POST /users/:userid/change');
};