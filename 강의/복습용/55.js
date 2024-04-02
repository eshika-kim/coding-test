// 1. 나온 숫자가 모두 같으면 1111 * p점
// 2. 나온 숫자가 3개가 같고(p) 숫자가 하나 다르면(q) = (10 * p + q )**
// 3. 두 개씩 같은 수가 나온다면 (p + q) * |p-q|
// 4. 두 수가 같고 q, r 다른 숫자라면 q * r점
// 5. 모두 다른숫자라면 가장 작은 숫자만큼의 점수
function solution(a, b, c, d) {
    let answer = 0;
    const diceNumbers = [a, b, c, d]
    const arr = Array.from(new Set(diceNumbers))
    if(arr.length === 4) answer = Math.min(a, b, c, d) // 모든수가 다름
    if(arr.length === 3) { // 같은수가 두 개이고, 나머지는 다른 숫자
        const [p, q, r] = arr
        let pCount = 0, qCount = 0
        for(let x of diceNumbers) {
            if(x === p) pCount++;
            if(x === q) qCount++;
        }
        if(pCount === 2) answer = q * r
        else if (qCount === 2) answer = p * r
        else answer = p * q
    }
    if(arr.length === 2) { // 같은 수가 두개이고 쌍으로 같을때 or 세 개가 같은 수일때
        const [p, q] = arr
        let pCount = 0, qCount = 0
        for(let x of diceNumbers) {
            x === p ? pCount++ : qCount++;
        }
        if(pCount === 2) answer = (p + q) * Math.abs(p - q)
        
        else answer = pCount > qCount ? Math.pow(10 * p + q, 2) : Math.pow(10 * q + p, 2)

    }
    if(arr.length === 1) answer = 1111 * arr[0]
    return answer;
} 
const arr1= [1, 1, 1, 4] //29, 38, 6 
console.log(solution(1, 2, 2, 2)) // 441