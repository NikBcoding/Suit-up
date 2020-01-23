const express = require('express');
const router = express.Router();
const suitsCtrl = require('../../controllers/suits');

router.get('/', suitsCtrl.favSuits);

/*--- protected routes ---*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, suitsCtrl.create);

module.exports = router;

/*--- helper function ---*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}
