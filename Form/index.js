const http = require("http");

const server = http.createServer((req, res) => {

    // HOME PAGE
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Welcome to Home Page</h1>");
    }

    // ABOUT PAGE
    else if (req.url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>This is About Page</h1>");
    }

    // CONTACT PAGE
    else if (req.url === "/contact") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>This is Contact Page</h1>");
    }

    // PAGE NOT FOUND
    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>404 Page Not Found</h1>");
    }

});

server.listen(8006, "localhost", () => {
    console.log("Server running at http://localhost:8006");
});