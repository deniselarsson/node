//build in module
//if you no a specific one you use 
//const {xxxx, yyyy} = require('os)
const os = require('os')
const user = os.userInfo()

//info about curren user
//console.log(user)

//the method returns the system in uptime n seconds
console.log(`The system  uptime is ${os.uptime()} seconds`)

//Object
const currentOS ={
name: os.type(), 
release: os.release(),
totalMem: os.totalmem(), 
freeMem: os.freemem()
}

console.log(currentOS.name)
console.log(currentOS)