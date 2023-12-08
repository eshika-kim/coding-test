// 중복 제거
// 1. Set 사용
const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9]
const mySet = new Set(nums)
// console.log(mySet)

// 2. indexOf 사용
const uniqueNums = nums.filter((e, idx)=> {
    return nums.indexOf(e) === idx
})
// console.log(uniqueNums)

// 3. caching / frequency map => loop을 통해 미리 지정된 caching object에 존재 여부 확인
function uniqueNum(arr) {
    const uniqueElements = {} // 여기에 임시 저장
    const result = []
    for (let element of arr) {
        if(!uniqueElements[element]) { // 임시 저장 공간에 값이 없으면 result에 값넣고
            result.push(element)
        } 
        uniqueElements[element] = element // 임시 저장 공간에 키-값 넣어놓는다.
    }
    return result
}
uniqueNum(nums)