// N = 정수 개수, v = 찾으려는 정수
// 첫째 줄 N 입력, 둘째 줄은 N개의 정수 입력, 셋째 줄은 찾는 정수 v
// v의 개수를 출력

const fs = require('fs')
const input = fs.readFileSync('test.txt', 'utf-8').replace(/\r/g,'').split('\n')
const numArr = input[1].split(' ').map(Number)
const v = Number(input[2])
const result = numArr.filter((a)=> {
    return a === v
})
console.log(result.length)

// 제출시에는 readfile에 '/dev/stdin' 으로 대체
// const input = fs.readFileSync('/dev/stdin', 'utf-8')