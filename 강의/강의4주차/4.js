// 졸업 선물
// 입력 : 첫 번째 줄 - 학생수 N, 예산 M, 2~N번째 줄: 상품의 가격, 배송비
// 상품가격과 배송비는 100,000 이하, 상품 가격은 짝수로만
// 출력: 현재 예산 M으로 선물할 수 있는 최대 학생 수 출력
// * 상품 하나를 50% 할인해서 살 수 있는 쿠폰이 있음
// => 상품 어떤것을 할인받아야 최대한 많은 수의 학생선물을 살 수 있을지 모르므로
// 모든 경우에 50%할인을 적용해본다.
// 우선 상품 전체의 가격을 계산한 것을 sort

function solution(m, product){
    let answer=0;
    const n = product.length
    product.sort((a, b)=> (a[0]+a[1])-(b[0]+b[1]))
    for(let i = 0; i < n; i++) {
        let money = m-(product[i][0]/2 + product[i][1]) // 할인받은 것을 사고 남은 예산
        let cnt = 1
        for(let j = 0; j < n; j++) {
            if( j !== i && (product[j][0]+product[j][1]) > money ) break; // 헛바퀴도는 것을 방지
            if(j !== i && (product[j][0]+product[j][1]) <= money) {
                money -= (product[j][0]+product[j][1])
                cnt++;
            }
        }
        answer = Math.max(answer, cnt)
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); // 답 : 5
console.log(solution(41, [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]])); // 답 : 5
console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]])); // 답 : 3