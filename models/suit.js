const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suitSchema = new Schema({
  coat: {
    type: String
  },
  pants: {
    type: String
  },
  shirt: {
    type: String
  },
  tie: {
    type: String
  },
  shoes: {
    type: String
  },
  handkerchief: {
    type: String
  },
  user: {
    type: Schema.type.ObjectId,
    ref: 'User'
  }
  
}, {
  timestamps: true
});


module.exports = mongoose.model('Suit', suitSchema);