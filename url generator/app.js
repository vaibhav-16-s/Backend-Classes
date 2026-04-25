const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router=require('./routes/urlRoute')
const {connection}=require('./config/db.js');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>
{
    connection('mongodb://127.0.0.1:27017/shorturl').then(()=>{
        console.log('db connected successfully');
    }).catch((err)=>{
        console.log(err);
    })
    res.send("welcome to home directory");

})
app.use('/url',router);
app.listen(8060);