//to use the path module
const path = require('path')
console.log(path.sep)

//for the file path
const filepath = path.join('/content/subfolder/test.txt')
console.log(filepath)

//for the last path
const base = path.basename(filepath)
console.log(base)

//returns a absolute path
//--dirname, where the node is located
const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute)