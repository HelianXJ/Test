import express from 'express';
var router = express.Router();

var isAuthenticated =  (req, res, next) => {
	if (req.isAuthenticated())
		return next();

	res.redirect('/login');
}

module.exports =  (passport) => {
	/* GET home page. */
	router.get('/*', (req, res, next) => {
	    res.render('index');
	});

	// router.get('/login', function (req, res, next) {
	//     res.render('index');
	// });

	router.get('/api/orders', (req, res, next) => {
	    res.send('hello');
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash : true  
	}));

	/* Handle Logout */
	router.post('/logout', (req, res) => {
		req.logout();
		res.redirect('/login');
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/login',
		failureRedirect: '/login',
		failureFlash : true  
	}));

	return router;
}
