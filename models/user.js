var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, match: /^[a-z0-9]+$/i, unique: true },
  email: { type: String, required: true, match: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/, unique: true },
  password: { type: String, required: true },
  fullName: String,
  apns: [String],
  gcm: [String],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
}, { 
  'toJSON': { getters: true }
});

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

userSchema.pre('save', function (next) {
  this.updated = new Date;
  next();
});

userSchema.options.toJSON.hide = [ '_id', '__v', 'password', 'apns', 'gcm' ];

userSchema.options.toJSON.transform = function (doc, ret, options) {
  if (options.hide) {
    options.hide.forEach(function (prop) {
      delete ret[prop];
    });
  }
}

module.exports = mongoose.model('User', userSchema);