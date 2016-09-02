'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    if (_env2.default.mode === 'dev') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.write({
            message: err.message
        });
    });
};