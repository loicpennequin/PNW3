/**
 * Passport configuration.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const AuthService = require('./../services/auth.js');

module.exports = () => {
    passport.use(
        'local',
        new LocalStrategy(
            {
                usernameField: 'username',
                passwordField: 'password'
            },
            AuthService.authenticate
        )
    );

    passport.use(
        'jwt',
        new JwtStrategy(
            {
                secretOrKey: process.env.TOKEN_SECRET,
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true
            },
            AuthService.ensureAuth
        )
    );

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
};
