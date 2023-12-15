const set = new Set()
const numSet = new Set([1, 2, 3, 3, 4, 5, 1, 1])
// add : Set에 중복되지 않은 값만 추가됨
// delete : 특정 값 삭제, 성공적으로 삭제하면 true, 값이 없으면 false
// has : set에 특정 값이 존재하는지 확인
// size : 해당 set의 길이
// 배열을 세트로 변환 const array = [1, 2, 2, 3, 3, 3] 
// const set = new Set(array) => Set(3) {1, 2, 3}
if( numSet.has(3)) {
    console.log('3은 세트에 존재합니다.')
}
console.log(numSet)
// 세트를 배열로 변환
const numArray = [...numSet]
console.log(numArray)

// 교집합
const set1 = new Set([1, 2, 3, 4, 5])
const set2 = new Set([4, 5, 6, 7, 8])
const intersection = new Set([...set1].filter((value) => set2.has(value)));

console.log('교집합',[...intersection])
// 차집합
const difference = new Set([...set1].filter((value)=> !set2.has(value)))
console.log('차집합',[...difference])