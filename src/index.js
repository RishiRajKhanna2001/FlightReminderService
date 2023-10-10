const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const {PORT}=require('./config/server-config')

// const {sendBasicEmail}=require('./service/email-service')

const cron=require('node-cron')

const setUpAndStartServer=()=>{
      app.listen(PORT,()=>{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:true}))
        console.log(`server started on port ${PORT}`);

        cron.schedule('*/1 * * * *', () => {
          console.log('running a task every two minutes');
        });

        // sendBasicEmail(
        //   'rishimeditate@gmail.com',
        //   'khannarishiraj060@gmail.com',
        //   'Testing Email',
        //   'How are you, everything fine??',
        // )
      })
}

setUpAndStartServer();
