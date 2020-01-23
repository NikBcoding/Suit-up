var Suit = require('../models/suit');

module.exports = {
  create,
  favSuits
};

async function create(req, res) {
  console.log(req.user);
  try {
    await Suit.create(req.body);
    // Use the highScores action to return the list
    favSuits(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function favSuits(req, res) {
  console.log(req.user)
  const scores = await Suit.find({})
    // .sort({numGuesses: 1, seconds: 1})
    // Default to a limit of 20 high scores
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(suits);
}





