//key.js -- figure out what set of credentials to return
if(process.env.NODE_ENV === 'production'){

}else{
  module.exports = require('./dev');
}
