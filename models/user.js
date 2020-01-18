const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema);