// const fs = reuire('fs')
// fs.readFileSync()

//it is the sam as above
const {readFileSync, writeFileSync} = require('fs')

//how we can read from the file system
//we need to provide two parameters to that path to that specific file as well as how to decode the file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first)
console.log(second)

//if the file is not there node will create one and if it is there it  will overwritten with this txt

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag:'a'})
