// 과제 안낸놈 색출하기
// 입력은 총 28줄 1~30번 중 없는 번호 골라서 개수세기
const fs = require('fs')
const input = fs.readFileSync('test.txt','utf-8').replace(/\r/g,'').split('\n').map(Number)
let student = ''
for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
        student += i += '\n'
    }
}
console.log(student)

// const input = fs.readFileSync('/dev/stdin', 'utf-8')