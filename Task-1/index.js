const fs=require("fs");
const url=require("url");
const http=require("http");
http.createServer((request,response)=>{
    switch(request.url)
    {
        case'/':
        {
            fs.readFile('./Component/home.html',(err,page)=>
            {
                if(err)
                {
                     response.write(err);
                     response.end();
                }
                else
                {
                    response.write(page)
                    response.end();
                }
            });
            break;
        }
    }

}).listen(8010,'localhost',(err)=>{
    if(err)
    { 
        console.log(err);
    }
    console.log("Server started at http://localhost:8010 successfully");
});
