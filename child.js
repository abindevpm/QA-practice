 const express = require("express")

   const app = express()

   const  router = express.Router()

    router.use((req,res,next)=>{
        console.log("this is router level middleware")

        next()
    })

    app.use("/router",router)

      app.get("/router",(req,res)=>{
         res.send("this is server")
      })

      app.listen(3000)
  
 