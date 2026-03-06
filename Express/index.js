const express=require("express");
const app=express();
app.get("/",(req,res)=>
{
    res.send("Hello Welcome From Dashboard Page");
});
app.get("/contact",(req,res)=>
{
    res.send("Hello Welcome From Contact Page");
});
app.get("/home",(req,res)=>
{
    res.send("Hello Welcome From Home Page");
});
app.get("/about",(req,res)=>
{
    res.send(`<h1> Hello Welcome From About Page<h1>
        <a href='/contact'>Click Here for contact page<a>`);
});
app.get("/search",(req,res)=>
{
    console.log(req.query);
    res.send("Hello search result served");
});
//localhost:8009/search?name=Vaibhav&age=20;
app.use((req,res)=>
{
    res.status(404).send("Page not Found");
});


app.listen(8009);
