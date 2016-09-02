'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _csurf = require('csurf');

var _csurf2 = _interopRequireDefault(_csurf);

var _initView = require('./init-view');

var _initView2 = _interopRequireDefault(_initView);

var _initRoutes = require('./init-routes');

var _initRoutes2 = _interopRequireDefault(_initRoutes);

var _initPassport = require('./init-passport');

var _initPassport2 = _interopRequireDefault(_initPassport);

var _initSession = require('./init-session');

var _initSession2 = _interopRequireDefault(_initSession);

var _initAccessLog = require('./init-access-log');

var _initAccessLog2 = _interopRequireDefault(_initAccessLog);

var _initErrorHandler = require('./init-error-handler');

var _initErrorHandler2 = _interopRequireDefault(_initErrorHandler);

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
(0, _initAccessLog2.default)(app);
(0, _initView2.default)(app);
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)(_env2.default.session_secret));
app.use((0, _csurf2.default)({ cookie: true }));
(0, _initSession2.default)(app);
(0, _initPassport2.default)(app);
(0, _initRoutes2.default)(app);
(0, _initErrorHandler2.default)(app);

exports.default = app;