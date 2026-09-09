const express = require('express')
const app = express();
const PORT = 3000
const productroutes=require("./routes/routes")


app.get("/api/products", (req, res) => {
    res.json(products)
})

app.use("/api/products",productroutes)





app.listen(PORT, () => console.log("server is running"));