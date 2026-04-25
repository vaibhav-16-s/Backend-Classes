const http=require("http");
const url=require("url");
const fs=require("fs");
http.createServer((request,response)=>{
    const da=new Date();
    console.log(da);
    fs.appendFile("server.txt",`${da} ${request.url}:new request received\n`,(err)=>{
        if(err)
            throw err;
    });
    console.log(request.url);
    response.write("<h1>Welcome to our Website</h1>");
    response.end();
}).listen(8008,'localhost',(err)=>{
    if(err)
    { 
        console.log(err);
    }
    console.log("Server started at http://localhost:8008 successfully");
});

