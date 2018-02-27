const express= require('express');
const app=express();
const mangoose=require ('mongoose');
const keys=require('./config/keys.js');
const cookieSession=require('cookie-session');
const passport=require('passport');
require('./models/User');
require('./services/passport');
mangoose.connect(keys.mongoURI);
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
