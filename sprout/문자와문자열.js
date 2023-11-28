// 단어 S와 정수 i, S의 i번째 글자 출력
const fs = require('fs')
const input = fs.readFileSync('test.txt','utf-8').replace('\r','').split('\n')

input.forEach((a)=>{
    console.log(a)
})

// const input = fs.readFileSync('/dev/stdin', 'utf-8')