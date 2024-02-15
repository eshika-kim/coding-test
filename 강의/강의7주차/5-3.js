// 카카오 캐시 문제 내장 함수 사용해서 풀기
// 시간복잡도 : O(N^2)
function solution(S, N, num) {
    const cache = Array.from({length: S}, () => 0)
    num.forEach((number)=>{
        let tmp = -1
        for(let i = 0; i < S; i++) if( number === cache[i]) tmp = i
        if(tmp === -1) {
            cache.unshift(number)
            if(cache.length > S) cache.pop()
        } else {
            cache.splice(tmp, 1)
            cache.unshift(number)
        }
        console.log(cache)
    })
    return cache
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, 9, arr));