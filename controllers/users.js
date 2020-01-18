const User = require('../models/user');

module.exports = {
    signup
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).json(user);
    } catch(err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}