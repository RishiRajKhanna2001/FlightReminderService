const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/server-config')

const TicketController=require('./controllers/ticket-controller');
const EmailService = require('./service/email-service');

// const {sendBasicEmail}=require('./service/email-service')

// const jobs=require('./utils/jobs');
const { subscribeMessage, createChannel } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/server-config');

// const cron=require('node-cron');

const setUpAndStartServer=async ()=>{
  
  const app=express();
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}))
  
  app.post('/api/v1/tickets', TicketController.create);
  
  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

  app.listen(PORT,()=>{
        console.log(`server started on port ${PORT}`);
        // jobs();

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




