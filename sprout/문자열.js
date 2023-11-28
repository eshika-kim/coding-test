// T = 테스트케이스
// 문자열을 입력받고 첫글자와 마지막 글자를 출력
const fs = require('fs')
const input = fs.readFileSync('test.txt','utf-8').replace(/\r/g,'').split('\n')
const T = Number(input[0])
for (let i = 1; i <= T; i ++) {
    console.log(input[i].slice(0, 1)+input[i].slice(-1))
}

// const input = fs.readFileSync('/dev/stdin', 'utf-8')