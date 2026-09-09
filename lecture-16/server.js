const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");

// Middleware to log all requests

app.use(morgan("dev"));

const apiCheckMiddleware = (req,res,next)=>{//Custom Middleware
    if(req.query.API_KEY==1234){
        next();
    }else{
        res.status(401).send("Invalid API key");
    }
}


app.use(express.json());

// app.use(logMiddleware); Global Middleware Call ho rha hai yeh 
// app.use(apiCheckMiddleware);

app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})


app.get("/students",apiCheckMiddleware,logMiddleware,(req,res)=>{
    console.log("Hello Students");
    res.send("Hello students");
})




app.listen(PORT, () => console.log(`Server is running`));