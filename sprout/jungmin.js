const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (line)=>{
    const number = line.split(' ')
    const result = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2])
    console.log(result)
    rl.close();
})

rl.on('close', ()=>{
    process.exit()
})