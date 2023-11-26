// N * M 크기의 두 행렬 A와 B가 주어졌을 때 두 행렬을 더하기
// 첫 째줄은 행렬 줄의 크기 N, 행렬 열의 크기 M이 주어진다.
// A와 B의 행렬 크기는 같으며 A의 각 원소들을 출력하도록 한다.

const fs = require('fs')
const input = fs.readFileSync('test.txt','utf-8')
const [N, M] = input.split('\n')[0].split(' ').map(Number)
const A = []
const B = []
const addition = []

for(let i = 1; i <= N; i++) {
    const arrA = input.replace(/\r/g,'').split('\n')[i].split(' ').map(Number)
    A.push(arrA)
}
for(let j = N+1; j <= N+N; j++) {
    const arrB = input.replace(/\r/g,'').split('\n')[j].split(' ').map(Number)
    B.push(arrB)
}

for(let k = 0; k < N; k++) {
    const row = []
    for(let l = 0; l < M; l++ ) {
        row.push(A[k][l] + B[k][l])
    }
    addition.push(row.join(' '))
}
console.log(addition.join('\n'))

// const input = fs.readFileSync('/dev/stdin', 'utf-8')