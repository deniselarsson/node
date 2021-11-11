const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result) =>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})

//output <Buffer 54 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//om vi inte ha med utf-8