// 어떤 사람의 C언어 성적이 주어졌을 때, 평점은 몇 점인지 출력하는 프로그램을 작성하시오.
// A+: 4.3, A0: 4.0, A-: 3.7
// B+: 3.3, B0: 3.0, B-: 2.7
// C+: 2.3, C0: 2.0, C-: 1.7
// D+: 1.3, D0: 1.0, D-: 0.7 F: 0.0
// 입력 : 첫째 줄 C 언어 성적 출력 : C언어 평점

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.on('line', (line)=>{
    if( line === 'A+' ) {
        console.log('4.3')
    } else if( line === 'A0') {
        console.log('4.0')
    } else if( line === 'A-') {
        console.log('3.7')
    } else if( line === 'B+') {
        console.log('3.3')
    } else if( line === 'B0') {
        console.log('3.0')
    } else if( line === 'B-') {
        console.log('2.7')
    } else if( line === 'C+') {
        console.log('2.3')
    } else if( line === 'C0') {
        console.log('2.0')
    } else if( line === 'C-') {
        console.log('1.7')
    } else if( line === 'D+') {
        console.log('1.3')
    } else if( line === 'D0') {
        console.log('1.0')
    } else if( line === 'D-') {
        console.log('0.7')
    } else if( line === 'F') {
        console.log('0.0')
    }
    rl.close()
})
rl.on('close', ()=>{
    process.exit()
})