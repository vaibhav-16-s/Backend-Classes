const crypto=require("crypto");
const http=require("http");
const url=require("url");
const fs=require("fs");
const BeforeExe=Date.now();


// crypto.pbkdf2("passworbvfdd","salt",100000,512,"sha512",(err,key)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
// });
// crypto.pbkdf2("password","salt",100000,512,"sha512",(err,key)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
// });
// crypto.pbkdf2("password","salt",100000,512,"sha512",(err,key)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
// });


for (let i = 0; i < 100; i++)
{
    crypto.pbkdf2("passworbvfdd","salt",100000,512,"sha512",(err,key)=>{
    if(err)
    {
        console.log(err);
        return;
    }
});
crypto.pbkdf2("password","salt",100000,512,"sha512",(err,key)=>{
    if(err)
    {
        console.log(err);
        return;
    }
});
crypto.pbkdf2("password","salt",100000,512,"sha512",(err,key)=>{
    if(err)
    {
        console.log(err);
        return;
    }
 });
}
console.log(Date.now()-BeforeExe);
