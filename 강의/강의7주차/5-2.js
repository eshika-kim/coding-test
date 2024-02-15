// 카카오 캐시 문제 정석대로 푸는 방법(함수사용 X)
// 시간복잡도 : O(2N^2)
function solution(S, N, num) {
    const cache = Array.from({length: S}, () => 0)
    num.forEach((number)=>{
        let tmp = -1
        for(let i = 0; i < S; i++) if( number === cache[i]) tmp = i
        if(tmp === -1) {
            for(let i = S-1; i >= 1; i--) {
                cache[i] = cache[i - 1]
            }
        } else {
            for(let i = tmp; i >=1; i--) {
                cache[i] = cache[i - 1]
            }
        }
        cache[0] = number
    })
    return cache
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, 9, arr));