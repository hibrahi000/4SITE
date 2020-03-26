// This is a test code
require('dotenv').config();
const express = require('express');
const sessions = require('cookie-session');
const app = express();
const port = process.env.PORT || 5000;
const key = process.env;
app.listen(port, () => console.log(`Listening on port ${port}`));

const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

// ___Mounting the route at the / path
app.use('/Login', loginRoutes);
app.use('/Home', userRoutes);

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//___ Set up the session for user
app.use(
	sessions({
		resave: false,
		saveUninitialized: false,
		maxAge: 1000 * 60 * 60 * 2,
		//miliSec    sec     min    hours     days
		keys: [ key.cookieKey ]
	})
);

// *
// !
// ?
// TODO
// ++
// --error removed
// :: warning
// ^^ this up here
// ;; This is closing
// TADA Finished

const userApi = require('./api/users');
const encrypt = require('./api/encrypt');
const storeApi = require('./api/store');

// userApi.addUser('John','Smith','JSmith123','Password',1,1)
