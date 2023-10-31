const nodemailer = require('nodemailer');

const sendMail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,

            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
        const emailOption = {
            from: `AlrightTech <${process.env.FROM_EMAIL}>`,
            to: options.email,
            subject: options.subject,
            text: options.message,
        }
        await transporter.sendMail(emailOption);
        console.log("Email sent Successfully", emailOption);
    } catch (error) {
        console.log('Error in Sending Email', error)
    }
}


module.exports = sendMail;








