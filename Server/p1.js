const url = require("url");

const url1 = url.parse("https://www.youtube.com/results?search_query=flexiejay+reacts",true);

console.log(url1.protocol);  
console.log(url1.hostname);   
console.log(url1.port);       
console.log(url1.pathname);   
console.log(url1.search);        
console.log(url1.hash);