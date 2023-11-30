const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', line => {
    const [A, B, C] = line.split(' ').map(Number)
    const result1 = ( A + B ) % C
    const result2 = (( A % C ) + ( B % C )) % C
    const result3 = (A * B) % C
    const result4 = (( A % C ) * ( B % C )) % C
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    rl.close()
})
rl.on('close', () => {
    process.exit()
})