// 입력 ; 첫 째줄에 대소문자로 이루어진 단어가 주어짐
// 출력 ; 가장 많이 사용된 알파벳을 대문자로 출력
// 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우 ? 를 출력

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', line => {
    const lowerInput = line.toLowerCase()
    let obj = {}
    for (let i = 0; i < lowerInput.length; i++) {
        if(obj[lowerInput[i]] === undefined) {
            obj[lowerInput[i]] = 1;
        } else {
            obj[lowerInput[i]] += 1;
        }
    }
    let maxChar = ''
    let count = 0
    for (const property in obj) {
        if( count < obj[property]) {
            count = obj[property]
            maxChar = property.toUpperCase();
        } else if (obj[property] === count ) {
            maxChar = '?'
        }
    }
    console.log(maxChar)
    rl.close()    
})

rl.on('close',()=>{
    process.exit()
})