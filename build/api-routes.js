'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('./controllers/user-controller');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/user', _userController2.default.show);
router.post('/login', _userController2.default.login);
router.post('/logout', _userController2.default.logout);
router.all('*', (req, res) => {
    res.status(404).json({ result: 'not found' });
});

exports.default = router;