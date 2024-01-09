// 1줄 : 학생수 N, 예산 M
// 2줄 ~ n줄 : 상품의 가격, 배송비
// 출력 : 예산으로 살 수 있는 최대 선물 수
// * 선물 하나를 50% 할인 쿠폰으로 살 수 있음

function solution(m, product){
    let answer=0;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
    // 상품 + 배송비를 더한 값대로 오름차순
    // 50%할인한 모든 경우를 계산해본다.
    for(let i = 0; i < product.length; i++) {
        let money = m - ((product[i][0] / 2) + product[i][1]) // 예산에서 할인된 상품을 차감
        // 이제 나머지 상품을 모두 money에서 차감해보는 반복문
        let cnt = 1;
        // 학생수를 세야하므로 변수에 할당, 예산에서 먼저 돈 반복문이 있으므로 1로 시작
        for(let j = 0; j < product.length; j++) {
            // 이 반복문이 실행될 때 항상 j는 i가 될 수 없음 (중복계산이므로)
            // 남은 예산(money)가 j번째 상품의 가격과 배송비보다 작으면 살 수 없으므로 break
            if( j !== i && product[j][0] + product[j][1] > money) break;
            if( j !== i && product[j][0] + product[j][1] <= money) {
                money -= product[j][0] + product[j][1] // 남은 예산이 충분하면 해당 상품의 가격을 빼줌
                cnt ++
            }
        }
        // 상품을 전부 차감해주는 반복문을 다 돌고 cnt와 answer를 비교하여 더 높은 숫자면 내보낼 수 있도록 설정
        answer = Math.max(answer, cnt)
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));