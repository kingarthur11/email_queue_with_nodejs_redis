const express = require('express')
const client = require('./helper/redisDatabase')
const nodemailer = require('nodemailer')
const Queue = require('bull')
const cron = require('node-cron')
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const sendMailQueue = new Queue('sendMail', {
    redis: {
        host: '127.0.0.1',
        port: 6379,
    }
})
const data = {
    email: 'arthurorduh@gmail.com'
}
const options = {
    delay: 2000,
    attempts: 2
}
sendMailQueue.add(data, options);

sendMailQueue.process(async job => {
    return await sendMail(job.data.email)
})

function sendMail (email) {
    return new Promise((resolve, reject) => {
    var mailOptions = {
        from: 'arthurorduh2@gmail.com',
        to: 'orduharthur@gmail.com',
        subject: 'sending email using node js',
        text: 'thank you for your time'
    }   
    var mailConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gamil',
        auth: {
            user: 'arthurorduh2@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    };
    
        nodemailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
        if (error) {
            reject(error);
        } else {
            resolve('Email sent: ' + info.response)
        }
   
})
    
})}
const app = express()

app.listen(5000, () => {
    console.log(`App listening on port ${PORT}`)
})