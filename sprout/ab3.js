// A와 B를 입력받은 다음 A+B를 출력
// 첫 째줄 : 테스트 케이스 개수 T
// 각 테스트 케이스는 한 줄, 각 줄에 A와 B가 주어짐
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
