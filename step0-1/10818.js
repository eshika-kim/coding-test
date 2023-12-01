// 최소 최대 구하기
// 입력: 첫째 줄-정수의 개수 N, 둘째 줄 - N개의 정수를 공백으로 구분해서
// 출력: 둘째 줄의 최솟값과 최댓값을 공백으로 구분해 출력

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []
rl.on('line', line => {
    input.push(line)
    if(input.length === 2) {
        rl.close()
    }
})

rl.on('close',()=>{
    const N = parseInt(input[0])
    const numArr = input[1].split(' ').map(Number)
    let max = -Infinity;
    let min = Infinity;
    for ( let i = 0; i < N; i++) {
        if(numArr[i] > max) {
            max = numArr[i]
        }
        if(numArr[i] < min) {
            min = numArr[i]
        }
    }
    console.log(min+' '+max)
    process.exit()
})