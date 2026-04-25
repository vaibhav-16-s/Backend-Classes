const express=require("express");
const app=express();
const cookieParser = require("cookie-parser");
const session=require("express-session")
const path=require("path")

app.use(express.urlencoded({extended:true}));

app.use(
        session({secret:"mysecretKey",
        resave: false,
        saveUninitialized: false,
    })
);
app.set("view engine","ejs");

app.get('/',(req,res)=>
{
    if(req.session.user){
        return res.redirect("/home");
    }
    res.render('login');
});

app.get('/home',(req,res)=>
{
    if(!req.session.user){
        return res.redirect("/");
    }
    res.render('home',{user:req.session.user});
});

app.get('/profile',(req,res)=>
{
    if(!req.session.user){
        return res.redirect("/");
    }
    res.render('profile',{user:req.session.user});
});

app.get('/logout',(req,res)=>
{
    res.render('logout',{user:req.session.user});
});

app.post("/login",(req,res)=>{
    const{ username,password }=req.body;
    req.session.user=username;
    res.redirect("/home");
});
app.listen(8060, () => {
    console.log("http://localhost:8060");
});
