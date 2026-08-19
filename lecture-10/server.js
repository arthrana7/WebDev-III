const express = require('express')
const app = express();
const PORT = 3000
const products = [
    {
        id: 1,
        name: "hp pavillion",
        category: "chuuuu chuuuuu laptop",
        price: 500000,
    },
    {
        id: 2,
        name: "hp pavillion",
        category: "chuuuu chuuuuu laptop",
        price: 2895234,
    },
    {
        id: 3,
        name: "hp pavillion",
        category: "chuuuu chuuuuu laptop",
        price: 858585858,
    }
]

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    const result = products.find((product) => product.id == id);
    if (result == undefined) {
        res.status(404).json({ success: false, message: "Product Not Found" })
    }
    res.json({ success: true, result });
})

app.post("/api/products", (req, res) => {
    const { name, category, price } = req.body;
    const id = products.length + 1;
    const product = { id, name, category, price };
    products.push(product);
    res.json({ success: true, product });
    const products = req.body;

})

app.put("/api/products/:id",(req,res)=>{
    const id = req.params.id;
    const {name,category,price} = req.body;
    const product = products.find((product)=>product.id == id);
    if(product == undefined){
        res.status(404).json({success:false,message:"Product Not Found"})
    }
    product.name = name;
    product.category = category;
    product.price = price;
    res.json({success:true,product});
})

app.delete("/api/products/:id",(req,res)=>{
    const id = req.params.id;
    const product = products.find((product)=>product.id == id);
    if(product == undefined){
        res.status(404).json({success:false,message:"Product Not Found"})
    }
    products.splice(product,1);
    res.json({success:true,product});
})

app.get("/", (req, res) => {
    res.send("hello")
})





app.listen(PORT, () => console.log("server is running"));