const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const {PORT}=require('./config/server-config')

const TicketController=require('./controllers/ticket-controller');

// const {sendBasicEmail}=require('./service/email-service')

const jobs=require('./utils/jobs');

const cron=require('node-cron');

const setUpAndStartServer=()=>{
      app.listen(PORT,()=>{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:true}))
        
          app.use('/api/v1/tickets',TicketController.create);

        console.log(`server started on port ${PORT}`);
        jobs();

        // cron.schedule('*/1 * * * *', () => {
        //   console.log('running a task every two minutes');
        // });

        // sendBasicEmail(
        //   'rishimeditate@gmail.com',
        //   'khannarishiraj060@gmail.com',
        //   'Testing Email',
        //   'How are you, everything fine??',
        // )
      })
}

setUpAndStartServer();
