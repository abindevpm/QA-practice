//     http server

//  const http = require("http")

// const server =   http.createServer((req,res)=>{
//     res.write("this is http server")
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log(`server is running on http://localhost:3000`)


//   express server


//  const express = require("express")
//   const app = express();

//     app.get("/",(req,res)=>{
//         res.send("this is express server")
//     })

//       app.listen(3000)


//        application level middleware 

//     const express = require("express")
//       const app =  express();

//       app.use((req,res,next)=>{
//         console.log("this is application level middleware")
//         next()
//       })

//       app.get("/",(req,res)=>{
//         res.send("this is server")
//       })

//       app.listen(3000)




//          errror handling middleware

//        const express = require("express")
//        const app = express()

//        app.get("/",(req,res)=>{
//         throw new Error("some thing wrong")
//        })

//         app.use((err,req,res,next)=>{
    
//             console.log(err.stack)
//             res.status(500).send("something error")

//         })
//          app.listen(3000)



//         router level middleware



//       const express = require("express");
//       const app =express();
//       const router = express.Router()

//       router.use((req,res,next)=>{
//          console.log("this is router level middleware")
//          next()
//       })

//        router.get("/",(req,res)=>{
//          res.send("this is server")
//        })

//         app.use("/about",router)

//           app.listen(3000)


//         query params

//       const express = require("express")
//       const app = express()
//      app.get("/sum",(req,res)=>{
     
//         let a = Number((req.query.a))
//         let b  = Number((req.query.b))

//          let  sum = a+b
//           res.send(`sum:${sum}`)
//      })
//      app.listen(3000)



//       path params

//       const express = require("express")
//       const app = express();

//        app.get("/user/:id",(req,res)=>{
//      let a = Number(req.params.id)
//      res.send(`${a}`)
//        })
//           app.listen(3000)


//        creating a worker thread

//            parent

//         const {Worker} = require("worker_threads")
//        const worker = new Worker("./worker.js")

//      worker.on('message',(msg)=>{
//       console.log("message",msg)
//      })

//               worker.js

//           const {parentPort}= require("worker_threads")
//           let sum = 0;
//           for(let i = 0;i<=10;i++){
//             sum+=i
//           }   
//           parentPort.postMessage(sum)

      

//                child process

//            parent


//          const {fork} = require("child_process");

//          const child = fork('./child.js');

//       child.on("message",(msg)=>{
//     console.log("hello from parent")
//    })
//      child.send("hello  child")


//       child

//    process.on("message",(msg)=>{
//       console.log("hello from child")
//    })
//    process.send("hello 04 parent") 



//   blocking an  event loop

//  const fs = require("fs")

//  const data = fs.readFileSync("file.txt","utf-8")
//   console.log(data)