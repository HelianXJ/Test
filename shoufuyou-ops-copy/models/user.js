import mongoose from 'mongoose';

let User = new mongoose.Schema({
		id: String,
		username: String,
		password: String,
	}, 
	{
		collection: 'User',
	});

let Users = mongoose.model('User', User);

module.exports = Users;