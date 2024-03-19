// 프로그래머스 주식 가격
// 주식의 가격 prices = [1, 2, 3, 2, 3] 
// 가격이 떨어지지 않은 기간을 배열로 return [4, 3, 1, 1, 0]
// prices[0] $1은 1~5초까지 4초간 떨어지지 않음(2, 3, 2, 3까지)
// prices[1] $2는 2까지 3초간 떨어지지 않음(3, 2, 3까지)
// prices[2] $3은 2까지 1초 뒤에 가격이 떨어지므로 1초(3 => 2 바로 떨어지므로)
// prices[3] $2는 1초간 가격이 떨어지지 않음(3)
// prices[4] $3은 0초간 가격이 떨어지지 않음(데이터 없음)
function solution(prices) {
    const answer = Array(prices.length).fill(0);
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            answer[i] ++;
            if(prices[i] > prices[j]) {
                break;
            }
        }
    }
    return answer;
}

const prices1 = [1, 2, 3, 2, 3]
console.log(solution(prices1))