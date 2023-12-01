// 단어의 개수
// 입력 첫 줄에 대소문자와 공백으로 이루어진 문자열(첫 단어가 공백이 포함될 수 있음)
// 출력 단어의 개수 
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.on('line', line => {
    const input = line.split(' ').filter(word => word !== '')
    console.log(input.length)
    rl.close()
})

rl.on('close',()=>{
    process.exit()
})