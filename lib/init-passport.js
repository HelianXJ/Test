import passport from 'passport';
import { Strategy } from 'passport-local';
import sha1 from 'sha1';
import User from './models/user';

export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use('local', new Strategy(
        (username, password, done) => {
            User.findOne({ name: username }, (err, user) => {
                if (user !== null
                    && user.password !== undefined
                    && sha1(user._id + user.name + password) === user.password
                ) {
                    done(null, user);
                } else {
                    done(err);
                }
            });
        }
    ));
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((id, done) => {
        done(null, id);
    });
};
