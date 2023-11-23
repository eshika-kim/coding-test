const { stdout, stdin } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

rl.on('line', (line)=>{
    const num = parseInt(line)
    let star = ''
    for (let i = 1; i <= num; i++) {
        star += '*'
        console.log(star)
    }
    rl.close()
})

rl.on('close', ()=> {
    process.exit();
})