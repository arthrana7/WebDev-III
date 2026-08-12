const http = require("http");

const users = [
    {id: 1, name: "Arnav" , email: "[ab@gmail.com]"},
    {id: 2, name: "John" , email: "[bc@gmail.com]"},
    {id: 3, name: "Jane" , email: "[cd@gmail.com]"},  
]


const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200,{"Content-Type": "text/html"});
        res.end("<h1>hello from homepage</h1>");
        res.end();
    }
    else if(req.url === "/about") {
        res.writeHead(200,{"Content-Type": "text/html"});
        res.end("<h1>hello from about page</h1>");
        res.end();
    }
    else if(req.url === "/users") {
        
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    }
    else {
        res.writeHead(404,{"Content-Type": "text/html"});
        res.end("<h1>hello from not found page</h1>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});