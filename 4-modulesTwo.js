// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//in order to use peter and john 
const names = require('./4-names') //parameter, where is this data coming from
const func = require('./5-utils')

console.log(`Hi ${names.john}` )
console.log(`Hi ${names.peter}`)
console.log(names)

func('denise')
func(names.peter)

