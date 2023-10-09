const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const PORT=process.env.PORT
const setUpAndStartServer=()=>{
      app.listen(PORT,()=>{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:true}))
        console.log(`server started on port ${PORT}`);
      })
}

setUpAndStartServer();

