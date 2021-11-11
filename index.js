// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//parameter, where is this data coming from
const names = require('./4-names') 
const func = require('./5-utils')
const data = require('./6-alternativ-flavor')

// console.log(`Hi ${names.john}` )
// console.log(`Hi ${names.peter}`)
// console.log(names)

// func('denise')
// func(names.peter)

console.log(data.singlePerson)
console.log(data.item)
console.log(data)


