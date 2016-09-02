'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _user = require('./models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    app.use(_passport2.default.initialize());
    app.use(_passport2.default.session());
    _passport2.default.use('local', new _passportLocal.Strategy((username, password, done) => {
        _user2.default.findOne({ name: username }, (err, user) => {
            if (user !== null && user.password !== undefined && (0, _sha2.default)(user._id + user.name + password) === user.password) {
                done(null, user);
            } else {
                done(err);
            }
        });
    }));
    _passport2.default.serializeUser((user, done) => {
        done(null, user);
    });
    _passport2.default.deserializeUser((id, done) => {
        done(null, id);
    });
};