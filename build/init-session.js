'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectRedis = require('connect-redis');

var _connectRedis2 = _interopRequireDefault(_connectRedis);

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    const config = _env2.default.session;
    const RedisStore = (0, _connectRedis2.default)(_expressSession2.default);
    app.use((0, _expressSession2.default)({
        secret: config.secret,
        resave: false,
        saveUninitialized: true,
        store: new RedisStore({
            port: config.redis.port,
            host: config.redis.host,
            db: config.redis.db,
            ttl: 86400
        }),
        cookie: {
            path: '/',
            httpOnly: true,
            secure: _env2.default.https,
            maxAge: null
        }
    }));
};