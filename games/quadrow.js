var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend'),
    Schema = mongoose.Schema,
    Match = require('../models/match');

/*
 * This is our first module, but each module needs the following:
 *
 * ID
 * Name
 * Game atch model inheriting from base match model, with added state property and separate collection
 * Optional: Description
 *
 */

exports.id = "quadrow";

exports.name = "Quadrow";

exports.description = "Your favorite four in a row game";

var boardValidator = function(board) {
  if (board.length != 7) return false;

  var additions = 0;

  for (var x = 0; x < board.length; x++) {
    var column = board[x];
    if (! column instanceof Array) return false;
    if (column.length > 6) return false;
    additions += column.length - this.state.board[x].length;

    for (var y = 0; y < column.length; y++) {
      var row = column[y];
      if (row >= this.participants.length) return false;
    }
  };

  if (additions > 1) return false;

  return true;
};

var matchSchema = Match.schema.extend({
  state : {
    board: { type: [Schema.Types.Mixed], default: [ [], [], [], [], [], [], [] ], validate: [ boardValidator, 'invalid_state' ] }
  }
}, {
  collection : exports.id + '.matches'
});

exports.match = mongoose.model(exports.id + 'Match', matchSchema);