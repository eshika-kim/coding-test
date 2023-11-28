// string을 받아 대문자는 소문자로 소문자는 대문자로 바꾸기

const fs = require('fs')
const input = fs.readFileSync('test.txt', 'utf-8')

let answer = ''

for(let i = 0; i < input.length; i++) {
    if(input[i] === input[i].toUpperCase()) {
        answer += input[i].toLowerCase()
    } else {
        answer += input[i].toUpperCase()
    }
}
console.log(answer)

// const input = fs.readFileSync('/dev/stdin', 'utf-8')