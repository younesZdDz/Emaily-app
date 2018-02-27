const mangoose = require ('mongoose');
const { Schema } = mangoose;
const userSchema= new Schema({
  googleID: String
});
mangoose.model('users',userSchema);
