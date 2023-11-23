// 빠른 입출력
// 테스트케이스 개수 T
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const testCases = []
let result = '';
rl.on('line', (line)=>{
    testCases.push(line)
    const T = Number(testCases[0])
    if(testCases.length === T + 1) {
        rl.close()
    } // 우선 테스트 케이스 T만큼만 input값을 다 받아 놓고 입력 중지시킴
})

rl.on('close', ()=> {
    const T = Number(testCases[0])
    for (let i = 1; i < T + 1; i++) {
        const [A, B] = testCases[i].split(' ').map(Number)
        result += A + B + '\n'
    } // 입력된 값을 result 변수에 한꺼번에 넣은 뒤 
    console.log(result) // 한 번에 출력
    process.exit();
})