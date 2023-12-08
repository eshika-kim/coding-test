// n 기간 동안의 주식가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산하기
// 주어진 기간동안 주식 매매를 하여 얻는 이익을 계산
// 기간 중 가장 쌀 때 주식을 구입, 가장 비쌀 때 주식을 판매
// 3일 동안의 주식가격이 [100, 50, 250] 이라면 최대 이익은 200
// 3일 동안의 주식가격이 [100, 50, 20]이라면 최대 이익은 0

// input = [100, 200, 50, 30, 150, 250]
// a. maxProfit = 0 (기본 값 0으로 시작)
// b. minBuyPrice = input[0] (초기 값)

// 배열에 반복문 실행
// a. 매회의 반복마다 조건문 걸기 (현재까지 가장 저렴한 구입가격과 현재의 가격을 비교)
// b. 두 가지 결정
// b-1. 현재의 가격이 minBuyPrice보다 클 때 => 수익 발생, maxProfit 변수 값 업데이트
// b-2. 현재의 가격이 minBuyPrice보다 작을 때 => minBuyPrice 변수 값 업데이트
// 종료 후 maxProfit 값 리턴
function profitCaculator (prices) {
    let maxProfit = 0
    let minBuyPrice = prices[0]
    for (const price of prices) {
        if(minBuyPrice < price) {
            maxProfit = Math.max(maxProfit, price - minBuyPrice)
        } else {
            minBuyPrice = price
        }
    }
    return maxProfit
}
const stock = [100, 200, 50, 30, 150, 250]
console.log(profitCaculator(stock))