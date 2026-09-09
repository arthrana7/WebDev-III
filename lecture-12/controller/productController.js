const product=require("../data/data")

const getProducts=(req, res) => {
    res.json(products)
}

const getProductID=(req, res) => {
    const id = req.params.id;
    console.log(id)
    const result = products.find((product) => product.id == id);
    if (result == undefined) {
        res.status(404).json({ success: false, message: "Product Not Found" })
    }
    res.json({ success: true, result });
}

const addProduct=(req, res) => {
    const { name, category, price } = req.body;
    const id = products.length + 1;
    const product = { id, name, category, price };
    products.push(product);
    res.json({ success: true, product });
    const products = req.body;

}

const updateProduct=(req,res)=>{
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
}

const deleteProduct=(req,res)=>{
    const id = req.params.id;
    const product = products.find((product)=>product.id == id);
    if(product == undefined){
        res.status(404).json({success:false,message:"Product Not Found"})
    }
    products.splice(product,1);
    res.json({success:true,product});
}

module.exports={
    getProducts,
    getProductID,
    addProduct,
    updateProduct,
    deleteProduct
}