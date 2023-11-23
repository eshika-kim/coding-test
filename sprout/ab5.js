const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let testCases = []
rl.on('line', function (line) {
    testCases.push(line)
    if(testCases.length >= 1) {
        const T = parseInt(testCases[0])
        if(testCases.length === T+1) {
            for (let i = 1; i <= T; i++) {
                const [A, B] = testCases[i].split(' ').map(Number)
                console.log(A+B)
            }
            rl.close() // for문을 나오면 바로 종료되도록 한다.
        }
        
    }
    
})
rl.on('close', ()=> {
    process.exit()
})