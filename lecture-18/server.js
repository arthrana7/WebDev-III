const express = require("express")
const app = express()

app.use(express.json())

app.get("/",(req,res,next)=>{
    let age = 16;
    // if(age<=18){      this method cause a error in async code & node server will crash so thats why we will use try and catch error method
    //     throw new Error("Age is not valid")
    // }else{
    //     res.send("Welcome to the home page")
    // }

    try{
        if(age<=18){
            throw new Error("Age is not valid")
        }else{
            res.send("Welcome to the home page")
        }
    }catch(err){
        // res.status(400).send({
        //     success:false,
        //     message:err.message,
            
        // })  ham Error handling middleware ke liye next yaha use krenge 

        next(err);
    }
})

app.use((req,res)=>{    //Invalid route middleware
    res.status(404).send({
        sucess:false,
        message:"404 route not found"
    })
})

app.use((err,req,res,next)){.   //Error Handling Middleware
    res.status(404).send({
        sucess:false,
        message:"Page not found"
    })
}

app.listen(3000,()=>console.log("Server is running"))