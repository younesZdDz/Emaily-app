const express= require('express');
const app=express();
const mangoose=require ('mongoose');
const keys=require('./config/keys.js');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
require('./models/User');
require('./services/passport');
mangoose.connect(keys.mongoURI);
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
if(proocess.env.NODE_ENV){
  app.use(express.static('client/build'));
  const path=require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
