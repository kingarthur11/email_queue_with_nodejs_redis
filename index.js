const express = require('express')
const Queue = require('bull')
const cron = require('node-cron')
require('dotenv').config()

const PORT = process.env.PORT || 6000;
const app = express()

const bookQueue = new Queue('sendMail', {
    redis: {
        host: '127.0.0.1',
        port: 6379,
}})
const data = {
    name: 'uche'
}
bookQueue.add(data,  { repeat: { cron: '*/5 * * * * *' } });
app.post('/sendMail', function(req, res, next) {
    bookQueue.process(async job => {
    console.log(job.data.name)
    })
})
bookQueue.on('completed', (job) => {
    console.log(`Job completed with result ${job.data.name}`);
  })

app.listen(6000, () => {
    console.log(`App listening on port ${PORT}`)
})