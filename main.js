const serv = require('./server.js')
const settings = require('./front/settings.json')

if(settings.name === "undefiened"){
    console.log("Change name for your home assiastant!")
    serv
}

