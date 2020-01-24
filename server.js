require('dotenv').config();
const express = require('express');
const passport = require('passport');
const sessions = require('cookie-session');
const app = express();
const port = process.env.PORT || 5000;
const key = process.env;
app.listen(port, () => console.log(`Listening on port ${port}`));

const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

// ___Mounting the route at the / path
app.use('/Login', loginRoutes);
app.use('/User', userRoutes);

// ____Body-Parser for express 4
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

//___ Set up the session for user
//Sessions
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
