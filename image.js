const {default:mongoose}= require("mongoose");

const imageSchema = new mongoose.Schema({
    img:String
})

const image = mongoose.model('image', imageSchema);

module.exports={image};