
const express=require('express');
const app=express();


app.get("/products",async(req,res)=>{
    const product=await fetch("https://dummyjson.com/products")
    const pr=await product.json();

    const result=[];
    for(let product of pr.products){
        result.push(product.title);
    }
    res.send(result);
})

app.listen(3000,()=>{
    console.log('Serer is running')
})