/*

objectionaal error
programming error




*/ 



const express =require ("express");
const app=express();
const errorHandler=require('./middleware/error_handler');
app.get('/',(req,res)=>
{
    res.send("welcome to home page");
})
app.use((req,res,next)=>
{
    const error=new Error("page not found")
    error.statuscode=404;
    error.status = "Fail";
    next(error);
})
app.use(errorHandler);
app.listen(4000);