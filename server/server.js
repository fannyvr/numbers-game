'use strict';

const koa = require('koa');
const path = require('path');
const spa = require('koa-spa');
const session = require('koa-session');
const passport = require('./controllers/auth');
const routes = require('./routes/routes');
const app = koa();
const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;;
const tokens = require('./config');

app.use(passport.initialize());
app.use(passport.session());

app.keys = ['secret'];
app.use(session(app));

// Initialize Auth must be before routes(app)
app.use(passport.initialize());
app.use(passport.session());
routes(app);



app.listen(3000);
console.log('server running on port 3000');
