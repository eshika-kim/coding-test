// input : 1~9번째 줄까지 한 줄에 하나의 자연수
// output : 첫 째줄에 최댓값 출력, 둘째 줄에 인덱스 출력

// 첫 번째 방식
const fs = require('fs')
const input = fs.readFileSync('text.txt', 'utf-8').replace(/\r/g,'').split('\n').map(Number)
const maxNum = Math.max(...input)
const maxIndex = input.indexOf(maxNum)
console.log(maxNum)
console.log(maxIndex+1)


// const input = fs.readFileSync('/dev/stdin', 'utf-8')
// 두 번째 방식
let number = -Infinity
for (let i = 0; i < input.length; i++) {
    while( input[i] > number) {
        number = input[i]
    }
}
const maxInd = input.indexOf(number)
console.log(number)
console.log(maxInd+1)