const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', line=>{
    const input = line.split(' ').map(Number)
    let result = 0
    input.forEach((num) => {
        result += Math.pow(num, 2)
    })
    console.log(result%10)
    rl.close()
})
rl.on('close',()=>{
    process.exit()
})