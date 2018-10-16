const router = require('express').Router();
const ctrl = require('./../../controllers/api').Auth;
const ensureAuth = require('./../../middlewares/ensureAuth.js');

router.post('/login', (req, res, next) => ctrl.authenticate(req, res, next));
router.get(
    '/isloggedin',
    ensureAuth,
    (req, res, next) => ctrl.refreshToken(req, res, next),
    ({ token, user }, res) => res.json({ token, _userId: user.id })
);

module.exports = router;
