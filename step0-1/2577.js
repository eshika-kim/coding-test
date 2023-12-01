// 입력: 1번줄 A, 2번줄 B, 3번줄 C
// 출력 : 0~9까지 나온 숫자 출력

const fs = require('fs')
const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g,'').split('\n').map(Number)
const multiply = (input[0] * input[1] * input[2]).toString()

for (let i = 0; i <= 9; i++) {
    let count = 0;
    for(let j = 0; j < multiply.length; j++) {
        if( i == multiply[j] ) {
            count ++
        }
    }
    console.log(count)
}

// const input = fs.readFileSync('/dev/stdin', 'utf-8')