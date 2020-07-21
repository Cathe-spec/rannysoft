const mongoose = require("mongoose");

const storeschema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phone_number:Number,
    address:String,
});

module.export ={ Store:mongoose.model('store',storeschema)};