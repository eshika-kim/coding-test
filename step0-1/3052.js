// input : 1~10번째 줄까지 한 줄에 숫자 하나
// output : 각 줄의 숫자를 42나누었을 경우 서로 다른 나머지가 있는 개수를 출력
const fs = require('fs')
const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g,'').split('\n').map(Number)

let number = []
for (let i = 0; i < input.length; i++) {
    number.push(input[i] % 42)
}

const numberSet = new Set(number)
console.log(numberSet.size)

// const input = fs.readFileSync('/dev/stdin', 'utf-8')
// 제출할 때 replace 부분은 toString().trim().split('\n')으로 바꿀 것