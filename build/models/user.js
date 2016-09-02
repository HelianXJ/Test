'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('../util/model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _model2.default)('User', {
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    created_time: {
        type: Date,
        required: true
    }
});