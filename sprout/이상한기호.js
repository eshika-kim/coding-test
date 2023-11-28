const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', line=>{
    const [A, B] = line.split(' ').map(Number)
    const result = (A + B) * (A - B)
    console.log(result)
    rl.close()
})
rl.on('close',()=>{
    process.exit()
})