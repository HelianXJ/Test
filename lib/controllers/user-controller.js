import passport from 'passport';

exports.show = (req, res) => {
    res.json({
        name: req.user.name
    });
};

exports.login = (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (user !== false) {
            req.login(user, function(err) {
                if (err !== undefined) {
                    next(err);
                } else {
                    res.json({ result: 'success' });
                }
            });
        } else {
            res.json({ result: 'failx' });
        }
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout();
    res.json({ result: 'success' });
};
