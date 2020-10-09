const settings = require('./front/settings.json')
const localip = require('my-local-ip')()
const express = require('express')
const app = express()
let path = require('path');
app.use(express.static(path.join(__dirname, 'front')));

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname + '/front/index.html'));
})

app.listen(settings.port, () => {
    console.log(`${localip}:${settings.port}`)
})
