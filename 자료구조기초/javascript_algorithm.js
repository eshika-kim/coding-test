// 순회하기
let a = [1, 3, 45, 2, 10]
// a.forEach((element, idx)=>{
//     console.log('e:',element, 'idx:', idx)
// })

// 문자열
const str = 'Hello World'
const strArr = str.split(' ')
const strRearr = strArr.join(' KSR ')
// console.log(strArr)
// console.log(strRearr)

// 정렬
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// 오름차순 
const ascd = numbers.sort((a, b)=> a - b)
// console.log(ascd)
// 내림차순
const desc = numbers.sort((a, b)=> (a - b) * -1)
// console.log(desc)

// 짝수를 만들고싶다
const number = [1, 2, 3, 4, 5, 6]
const even = number.filter(e => e % 2 == 0)
// console.log(even)
const multiply = number.map(e => e * 2)
// console.log(multiply)
// 배열을 하나의 값으로 만들어주고싶다
const sum = number.reduce((total, e)=> total, 100)
// console.log(sum)

// dfs를 구현?
const graph = {
    1: [2, 3],
    2: [4],
    3: [4, 5],
    4: [],
    5: []
}

// 이진탐색
const b = [1, 2, 3, 4, 5, 6, 7, 8]
const bs = () => {
    let lo = 0; // 배열의 처음 (보통 이 변수들을 많이 씀)
    let hi = a.length - 1 // 배열의 가장 끝쪽
    const target = 3
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2) // 배열의 가운데 탐색
        if(b[mid] == target) {
            console.log(target)
        } else if (b[mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return -1   
}
// 반복되는 배열 만들기
// 1차원 배열
let c = Array(50).fill(0)
// console.log(c)
// 2차원 배열
let d = Array(5).fill().map(e => Array(5).fill(5))
// console.log(d)

// 배열 스왑 : 구조분해 할당을 이용
const arr = [1, 2, 3, 4, 5];
console.log(arr);
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);
