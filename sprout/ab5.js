// 여러 개의 테스트 케이스고 한 줄에 정수 A B가 주어진다.
// 0 0이 오는 순간 종료되고 0 0전까지 A+B가 출력된다.
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let testCases = []
rl.on('line', function (line) {
    if(line === '0 0') {
        rl.close()
        return
    }
    testCases.push(line)
})
rl.on('close', ()=> {
    for (let i = 0; i <= testCases.length -1; i++) {
        const [A, B] = testCases[i].split(' ').map(Number)
        console.log(A+B)
    }
    process.exit()
})