const settings = require('./front/settings.json')
const Porcupine = require("@picovoice/porcupine-node");

if(settings.name === "undefiened"){
    console.log("Change name for your home assiastant!")
    const serv = require('./server.js')
}

