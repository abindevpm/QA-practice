  // express server


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