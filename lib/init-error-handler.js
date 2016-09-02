import env from '../config/env';

export default (app) => {
    if (env.mode === 'dev') {
        app.use(function(err, req, res, next) {
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
            message: err.message,
        });
    });
};
