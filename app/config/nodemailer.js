const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport({
    // service : 'gamil',
    host: 'smtp.gmail.com',
    port : 465,
    auth:{
        user:email,
        pass : pass
    }
})

export const mailOptions = {
    from : email,
    to : email,
}