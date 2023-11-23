const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.on('line', (line)=> {
    const num = parseInt(line)
    for (let i = 1; i < 10; i++) {
        console.log(`${num} * ${i} =`, num*i) 
    }
    rl.close()
})
rl.on('close', ()=>{
    process.exit()
})