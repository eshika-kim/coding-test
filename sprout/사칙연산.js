const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (line)=>{
    const number = line.split(' ')
    const addition = parseInt(number[0]) + parseInt(number[1])
    const substraction = parseInt(number[0]) - parseInt(number[1])
    const multiplication = parseInt(number[0]) * parseInt(number[1])
    const division = parseInt(number[0]) / parseInt(number[1])
    const result = Math.floor(division)
    const remainder = parseInt(number[0]) % parseInt(number[1])
    console.log(addition)
    console.log(substraction)
    console.log(multiplication)
    console.log(result)
    console.log(remainder)

    rl.close();
})

rl.on('close', ()=>{
    process.exit()
})
