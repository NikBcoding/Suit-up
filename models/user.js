const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;
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

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // password has changed! -salt and hash
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        user.password = hash;
        return next();
    });
});

module.exports = mongoose.model('User', userSchema);