// A = [], X = number(정수), N = A.length
// 이 때, X보다 작은 수를 모두 출력
// 첫 째줄 N과 X, 둘 째줄 A를 이루는 정수 N개
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const arr = []
rl.on('line', (line) => {
    arr.push(line)
    if(arr.length === 2) {
        rl.close()
    }
})
rl.on('close', () => {
    const [N, X] = arr[0].split(' ').map(Number)
    const numbers = arr[1].split(' ').map(Number)
    const result = numbers.filter((a) => {
        return a < X
    })
    let resultString = ''
    for ( let i = 0; i < result.length; i++ ) {
        resultString += result[i] += ' '
    }
    console.log(resultString)
    process.exit()
})