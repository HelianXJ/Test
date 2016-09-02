'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_env2.default.mongodb_connection_string);

exports.default = (name, schema) => {
    return _mongoose2.default.model(name, schema, name);
};