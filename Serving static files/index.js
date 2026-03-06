// const express=require("express");
// const app=express();
// const path=require("path");

// const pathj = path.join(__dirname,"components");
// app.use(express.static(pathj));
// console.log(app);
// app.listen(8075);




const express = require("express");
const app = express();
const path = require("path");
const { getSystemErrorMap } = require("util");
const pathj = path.join(__dirname, "components"); 
app.use(express.static(pathj));

// app.get("/contact", (req, res) => {
//     res.sendFile(path.join(__dirname, "components/contact.html"));
// });
// app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, "components/about.html"));
// });
// app.use((req, res) => {
//     res.status(404).send("Page not Found");
// });
app.listen(8095);


/*
File system
sync async
http module-req,res
url module-request track url
path module-abs path , role , ext , file name import chack
manual routuing if/else- static file rendering.
os module
express-why its important



 */