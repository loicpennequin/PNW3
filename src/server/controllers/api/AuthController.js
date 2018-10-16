/*
* Authentication controller.
*
*/
const passport = require('passport');
const jwt = require('jsonwebtoken');
const logger = require('./../../logger/logger.js');

class AuthController {
    constructor() {
        this.generateToken = this.generateToken.bind(this);
    }

    authenticate(req, res, next) {
        logger.debug('Authcontroller.authenticate');
        passport.authenticate('local', { session: false }, (err, user) => {
            if (err) {
                res.json({ error: err });
            }
            if (!user) {
                res.json({ error: 'incorrect username or password.' });
            } else {
                const token = this.generateToken(user);
                res.json({ token, _userId: user });
            }
        })(req, res, next);
    }

    generateToken(id) {
        logger.debug('Authcontroller.generateToken');
        return jwt.sign(
            { data: { id }, timestamp: new Date() },
            process.env.TOKEN_SECRET,
            { expiresIn: 3600 }
        );
    }

    refreshToken(req, res, next) {
        logger.debug('Authcontroller.refreshToken');
        req.token = this.generateToken(req.user.id);
        next();
    }
}

module.exports = new AuthController();
