const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// INPUT : 첫 줄에 100,000보다 작거나 같은 자연수 N

rl.on('line', (line)=>{
    for (i=1; i>=line; i++) {
        console.log(i)
    }
})
