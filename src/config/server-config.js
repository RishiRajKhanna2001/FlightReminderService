  const dotenv=require('dotenv');

  dotenv.config();

  module.exports={
    PORT:process.env.PORT,
    EMAIL_PASS:process.env.EMAIL_PASS,
    EMAIL_ID:process.env.EMAIL_ID,
    EXCHANGE_NAME:process.env.EXCHANGE_NAME,
    MESSAGE_BROKER_URL:process.env.MESSAGE_BROKER_URL,
    REMINDER_BINDING_KEY:process.env.REMINDER_SERVICE
  }
  
