const express = require("express")
const app = express()

app.get("/divide/:a/:b",(req,res)=>{
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let divide = a/b

    res.send(divide.toString())

})

app.listen(3000)