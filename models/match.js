var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var matchSchema = new Schema({
  participants: { type: [{ type: Schema.Types.ObjectId, ref: 'User' }], required: true },
  activeParticipant: { type: Number, required: true },
  deletedParticipants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now } // ADD STATUS
}, { 
  'toJSON': { getters: true } 
});

matchSchema.index({ participants: 1 });

matchSchema.pre('save', function (next) {
  this.updated = new Date;
  next();
});

matchSchema.path('activeParticipant').validate(function (value) {
  return true;
}, 'invalid_active_index');

matchSchema.options.toJSON.hide = [ '_id', '__v', 'deletedParticipants' ];

matchSchema.options.toJSON.transform = function (doc, ret, options) {
  if (options.hide) {
    options.hide.forEach(function (prop) {
      delete ret[prop];
    });
  }
}

module.exports = mongoose.model('Match', matchSchema);