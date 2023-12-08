// 애너그램 판별하기
// 두 단어의 글자 나열 순서는 다르지만 구성이 일치할 시 에너그램이다.
const stringA = 'listen'
const stringB = 'silent'

// #1 split(), sort(), and join()
// listen -> split() -> sort() -> join()
function isAnagram(strA, strB) {
    if(strA.length !== strB.length) {
        return false
    }
    return strA.split('').sort().join() === strB.split('').sort().join()
}
// console.log(isAnagram(stringA, stringB))
// #2 map

function isanagram(strA, strB) {
    if(strA.length !== strB.length) {
        return false
    }
    const hashMap = {}
    for (const char of strA) {
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }
    console.log(hashMap)
    for (const char of strB) {
        if(!hashMap[char]) {
            return flase
        }
        hashMap[char]--;
    }
    return true
}
console.log(isanagram(stringA, stringB))