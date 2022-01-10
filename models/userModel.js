const mongoose  = require('mongoose');

const userModel = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number},
    img:{type:String}
},
 { timestamps: true }
);
const User =  mongoose.model('User',userModel);
module.exports = User;