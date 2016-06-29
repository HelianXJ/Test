import User from '../models/user';
import bCrypt from 'bcrypt-nodejs';
import { Strategy } from 'passport-local';

module.exports = function (passport) {

	passport.use('login', new Strategy(
  //       {
		// 	passReqToCallback: true
		// },
		function (req, username, password, done) {
			User.findOne({ 'username' :  username }, function(err, user) {
                 console.log('loging');
                if (err)  return done(err);
                
                if (!user){
                    console.log('User Not Found with username '+username);
                    return done(null, false, req.flash('message', 'User Not found.'));                 
                }
                
                // if (!isValidPassword(user, password)){
                //     console.log('Invalid Password');
                //     return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                // }
                if (username == user.username && password == user.password) {
                    console.log('Invalid Password');
                    return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                }
                // User and password both match, return user from done method
                return done(null, user);
            });
		}
	));

	var isValidPassword = function(user, password) {
        return bCrypt.compareSync(password, user.password);
    };
}