// N >= 0 N! 을 출력하는 프로그램 작성
// 입력 : 첫째 줄에 정수 N 이 주어짐
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let result = 1

rl.on('line', (line)=>{
    const N = parseInt(line)
    for (let i=1; i<=N; i++) {
        result = result * i
    }
    rl.close()
})
rl.on('close', ()=> {
    console.log(result)
    process.exit()
})