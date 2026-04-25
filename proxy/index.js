let express=require ("express");
let app=express();
let mongoose=require("mongoose");
let path=require("path");
let User=require('./model/user');
let bcrypt=require ("bcrypt");
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27117/2FB")
.then(()=>{
    console.log("connected to db");
})
.catch(err)
{
    console.log(err);
}

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

app.get('/register',(req,res)=>{
    res.render("register");
})
app.post('/register',(req,res)=>
{
    let {Uname,Upass}=req.body;
    console.log(req.body);
    bcrypt.hash(Upass,10,(err,hash)=>{
        let u1=new User({usernme:Uname,password:hash})
        awaitu1.save();
        console.log("registered successfully !!");
    });
    res.send("registered successfully !!");
})

app.listen(4000);



//npm i passport