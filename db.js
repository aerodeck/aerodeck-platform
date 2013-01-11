var mongoose = require('mongoose');
var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var db_url = process.env.environmentVariable || "mongodb://localhost:27017/aerodeck",
	db = mongoose.connect(db_url);


var boardState = new Schema({
  one:{type:[Number]},
  two:{type:[Number]},
  three:{type:[Number]},
  four:{type:[Number]},
  five:{type:[Number]},
  six:{type:[Number]},
  seven:{type:[Number]}
})
var userSchema = new Schema({
  id: ObjectId,
  fullName: String,
  username: String,
  email: String,
  password: String,
  apn: String,
  gcm: String,
  created: String,
  updated: String
})

var matchSchema = new Schema({
  id: ObjectId,
  participants: {type:[String]},
  activeParticipants: Number,
  board: [boardState],
  created: String,
  updated: String,
  deleted:{type:[String]}
})

var user = db.model('user', userSchema);
var match = db.model('match', matchSchema);

