const express = require('express');
const cors = require("cors")
require('./db/config.js');
const User = require('./db/User.js');
const app = express();
const Product = require('./db/Product.jsx')

// for the fetching data from the postman so this control the data 
app.use(express.json());
app.use(cors());
// now to send the data in the mongoDb make the function async
app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

// login API in which we make route API that fetch data from DataBase .pass data from postman
app.post("/login", async (req, res) => {

    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            res.send(user);
        }
        else {
            res.send({ result: "User not found" });
        }
    } else {
        res.send({ result: "User not found" });
    }

})
app.post("/add-product",async(req,res)=>{
  let product=new Product(req.body);
  let result= await product.save();
  res.send(result);
})

// API for listing products 
app.get('/products',async(req,res)=>{
    let products= await Product.find();
    if(products.length>0){
        res.send(products);

    }else{
        res.send({result:'No products found'});
    }


})

// route for the API calling
app.delete('/product/:id',async (req,resp)=>{
    const result = await  Product.deleteOne({_id:req.params.id})
     resp.send(result);
    });

app.get('/product/:id',async (req,resp)=>{
    const result = await Product.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }else{
        resp.send({result:"No Record"});
    }
});    


// API for the Update Data

app.put('/product/:id',async(req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result)
})

//Api for the Search
app.get('/search/:key',async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}

        ]
    })
    res.send(result);
})
app.listen(5000);