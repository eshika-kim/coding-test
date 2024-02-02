// 폰켓몬이 있는 배열이 매개변수로 주어짐
// 이 배열은 숫자로만 되어있고 이 숫자는 폰켓몬의 번호
// 폰켓몬의 종류가 겹치지 않도록 고르는 최대의 개수 return
function solution(nums) {
    const max = nums.length / 2
    const arr = [...new Set(nums)]
    console.log(arr)
    return arr.length > max ? max : arr.length
}

function solution2(nums) {
    const mypoke = Math.floor(nums.length / 2)
    let sH = new Map()
    for (let poke of nums) {
        if(!sH.has(poke)) sH.set(poke, 1)
    }
    console.log('mypoke :',mypoke, 'sH.size :',sH.size)
    return mypoke < sH.size ? mypoke : sH.size
}

let nums1 = [3,1,2,3] // 2
let nums2 = [3,3,3,2,2,4] // 3
let nums3 = [3,3,3,2,2,2] // 2
// console.log(solution(nums1))
// console.log(solution(nums2))
// console.log(solution(nums3))
console.log(solution2(nums1))
console.log(solution2(nums2))

