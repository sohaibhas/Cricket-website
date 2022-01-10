const mongoose  = require('mongoose');

const productModel = mongoose.Schema({
    title:{type:String,required:true},
    weight:{type:Number,required:true},
    price:{type:Number,required:true},
    brand:{type:String},
    desc:{type:String},
    img:{type:String}
},
 { timestamps: true }
);
const Product =  mongoose.model('Product',productModel);
module.exports = Product;