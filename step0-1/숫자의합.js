const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const numArr = []
let result = 0
rl.on('line', line => {
    numArr.push(line)
    if(numArr.length === 2) {
        rl.close()
    }
})

rl.on('close',()=>{
    const reArr = numArr[1].split('').map(Number)
    for (let i = 0; i < reArr.length; i++) {
        result += reArr[i]
    }
    console.log(result)
    process.exit()
})