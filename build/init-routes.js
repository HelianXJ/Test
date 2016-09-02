'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

var _assetVersion = require('../config/asset-version');

var _assetVersion2 = _interopRequireDefault(_assetVersion);

var _apiRoutes = require('./api-routes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    app.use('/api', (req, res, next) => {
        if (req.path === '/login' || req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json({ error: '401 Unauthorized' });
        }
    }, _apiRoutes2.default);
    app.use((req, res, next) => {
        if (req.isAuthenticated()) {
            if (req.path === '/login') {
                res.redirect('/');
                return;
            }
        } else {
            if (req.path !== '/login') {
                res.redirect('/login');
                return;
            }
        }
        res.render('index', {
            title: '',
            csrfToken: req.csrfToken(),
            env: _env2.default,
            assetVersion: _assetVersion2.default
        });
    });
};