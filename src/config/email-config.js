const nodemailer=require('nodemailer');
const { EMAIL_ID, EMAIL_PASS } = require('./server-config');

// configuring the transport object

// console.log(EMAIL_ID,EMA)
const sender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
})

module.exports=sender
