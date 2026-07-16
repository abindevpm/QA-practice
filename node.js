//   express server


// const express = require("express")
// const app = express()
// app.get("/",(req,res)=>{
//     res.send("this is express server")
// })

// app.listen(3000,()=>{
//     console.log('server is running on 3000')
// })

 
//  http server

// const http = require("http")
//  const server =  http.createServer((req,res)=>{
//     res.write("this is http server")
//     res.end()
// })

// server.listen(3000,()=>{
//     console.log("server is running on 3000")
// })


//   application level middleware

//      const express = require("express")
// const app = express()

// app.use((req,res,next)=>{
//     console.log("this is application level middleware")
//     next()
// })

// app.get('/',(req,res)=>{
//     res.send("this is server")
// })

// app.listen(3000,()=>{
//     console.log('server is running on 3000')
// })



// Error handling middleware


// const express = require("express")
// const app = express()

// app.get("/",(req,res)=>{
//     throw new Error("something went wrong")
// })

// app.use((err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).send("Internal Server Error")
// })

// app.listen(3000,()=>{
//     console.log("server is running on 3000")
// })


//   Router level Middleware


// const express = require("express")
// const app = express()
// const router = express.Router()

// router.use((req,res,next)=>{
//     console.log("this is router level middleware")
//     next()
// })

// router.get("/",(req,res)=>{
//     res.send("this is home page")
// })

// router.get("/about",(req,res)=>{
//     res.send("this is about page")
// })



// app.use("/",router)

// app.listen(3000)


//   Query paramater

// const express = require("express")
// const app = express()

// app.get("/sum",(req,res)=>{
//     let a = Number(req.query.a)
//     let b = Number(req.query.b)

//     let sum = a+b

//     res.send(sum.toString())
// })

// app.listen(3000)



//  Path Parameter 2 Numbers dividing


// const express = require("express")
// const app = express()

// app.get("/divide/:a/:b",(req,res)=>{
//     let a = Number(req.params.a)
//     let b = Number(req.params.b)
//     let divide = a/b

//     res.send(divide.toString())

// })

// app.listen(3000)


            // file writing in fs

// const fs = require("fs")

// fs.writeFile("abi.txt","hello world",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


       // file reading in fs

// const fs = require("fs")
// fs.readFile("abi.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })





