const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suitSchema = new Schema({
  initials: String,
  numGuesses: Number,
  seconds: Number
}, {
  timestamps: true
});

// Ensure that initials are uppercase & not longer than 3 characters
suitSchema.pre('save', function(next) {
  this.initials = this.initials.substr(0, 3).toUpperCase();
  next();
});

module.exports = mongoose.model('Suit', suitSchema);