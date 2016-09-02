'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    if (_env2.default.mode === 'dev') {
        app.use((0, _morgan2.default)('dev'));
    }
    const accessLogStream = _fs2.default.createWriteStream(__dirname + '/../log/access.log', { flags: 'a' });
    app.use((0, _morgan2.default)('combined', { stream: accessLogStream }));
};