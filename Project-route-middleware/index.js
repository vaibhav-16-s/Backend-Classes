const reqAge=require("./middleware/middleware.js");
const express=require("express");
const app=express();
const router=express.Router();
router.use(reqAge);
app.get('/',(req,res)=>{
    res.send("welcome to Home page! ");
})
app.get('/about',router,(req,res)=>{
    res.send("welcome to About page! ");
})
app.get('/contact',reqAge,(req,res)=>{
    res.send("welcome to Contact page! ");
})
app.use(router);
app.listen(3000);
