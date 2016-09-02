import env from '../config/env';
import assetVersion from '../config/asset-version';
import apiRoutes from './api-routes';

export default (app) => {
    app.use('/api', (req, res, next) => {
        if (req.path === '/login' || req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json({ error: '401 Unauthorized' });
        }
    }, apiRoutes);
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
            env: env,
            assetVersion: assetVersion,
        });
    });
};
