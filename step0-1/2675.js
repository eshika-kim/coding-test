// 테스트케이스 T, 입력 반복수 R, 문자열 N이 주어진다.
// T는 첫째 줄, R과 N은 둘째 줄부터 공백으로 나누어져 입력된다.
// 출력은 R로 각 문자열을 반복하여 출력한다.

const fs = require('fs')
const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g, '').split('\n')
const T = parseInt(input[0])
for (let i = 1; i < T + 1; i++) {
    let R = parseInt(input[i].split(' ')[0])
    let N = input[i].split(' ')[1]
    let result = ''
    for (let j = 0; j < N.length; j++) {
        result += N[j].repeat(R)
    }
    console.log(result)
} 

// const input = fs.readFileSync('/dev/stdin', 'utf-8')