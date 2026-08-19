const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/students/:name",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.params.name)
    res.send("Hello students")
})

app.get("/students",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.query)
    
})

app.listen(PORT,()=>console.log("server is running"))
