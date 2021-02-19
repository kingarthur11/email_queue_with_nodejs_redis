
// const fetch = require('node-fetch')


client.SET('foo', 'bar')
client.GET('foo', (err, value) => {
    if(err) console.log(err.message)
    console.log(value)
})

// const REDIS_PORT = process.env.PORT || 6379;
// const client = redis.createClient(REDIS_PORT)

var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gamil',
    auth: {
        user: 'arthurorduh2@gmail.com',
        pass: 'Chukwudi44'
    }
});
var mailOptions = {
    from: 'arthurorduh2@gmail.com',
    to: 'orduharthur@gmail.com',
    subject: 'sending email using node js',
    text: 'thank you for your time'
}
transport.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response)
    }
})


    

async function getRepos(req, res, next) {
    try {
        console.log('fetching data...')
        const {usename} = req.params;
        const response = await fetch(`https://api.gethub.com/users/${username}`)
        const data = await response.json();
    } catch (error) {
        console.error(error)
        res.status(500);
    }
}

app.get('/repos/:username', getRepos);