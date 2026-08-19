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
    }
    else if(req.url === "/about") {
        res.writeHead(200,{"Content-Type": "text/html"});
        res.end("<h1>hello from about page</h1>");
    }
    else if(req.url === "/users" && req.method=="GET") {
        
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    }
    else if (req.method=="POST" && req.url=="/users") {
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk;
        });
        req.on("end",()=>{
            try {
                const newUser = JSON.parse(body);
                users.push(newUser);
                res.writeHead(201,{"Content-Type": "application/json"});
                res.end(JSON.stringify({sucess:"true",users}));
            } catch(err) {
                res.writeHead(400,{"Content-Type": "application/json"});
                res.end(JSON.stringify({error:"Invalid JSON body", message: err.message}));
            }
        });
        req.on("error",(err)=>{
            res.writeHead(500,{"Content-Type": "application/json"});
            res.end(JSON.stringify({error:"Request stream error", message: err.message}));
        });
    }
    else if(req.url === "/users/count" && req.method=="GET") {
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify({sucess:"True",count:users.length}));
    }
    else {
        res.writeHead(404,{"Content-Type": "text/html"});
        res.end("<h1>hello from not found page</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});