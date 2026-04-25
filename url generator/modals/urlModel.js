const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ShortURL').then(()=>{
    console.log('db connected sucessfully')
}).catch((err)=>{
    console.log(err);
})

const newUrl = new mongoose.Schema({
    shortUrl:{
        type:String,
        require:true,
        unique:true,
    },
    actualUrl:{
        type:String,
        require:true,
    },
   
}, {timestamp:true,});

const URL = mongoose.model('users','newUrl');

module.exports={URL};