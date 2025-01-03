var mdb = require('mongoose')
var userSchema = mdb.Schema({
    first_name:String,
    last_name:String,
    email:String,
})
var user_schema = mdb.model("users", userSchema)
module.exports = user_schema    //here export the model..always the model stores in the mongobd not the real schema
