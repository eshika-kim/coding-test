// 멘토링
// 멘토는 멘티보다 모든 테스트에서 점수가 항상 높다
// 입력 테스트 결과에서 3, 4, 1, 2이면 3번 학생이 1등 4번 학생이 2등 1번학생이 3등 
// 즉, index번호가 등수고 value가 학생 번호
// 출력 멘토, 멘티 경우의 수
function solution(test){
    let answer = 0;
    const testCount = test.length
    const studentCount = test[0].length;
    for(let i = 1; i <= studentCount; i++) {
        for(let j = 1; j <= studentCount; j++) {
            // 여기까지 멘토,멘티 되는 경우의 수 ex) 3번 학생 1번 학생
            // 여기서 내가 if( i === j ) break를 해서 i와 j가 같으면 안된다는 예외처리를 걸었는데
            // 이 예외를 걸지 않아도 어차피 아래의 멘토의 등수는 항상 멘티의 등수보다 크니까
            // i와j가 같을 때 pi와 pj는 같은 값이 되므로 여기서 예외처리가 된다.
            let pi = 0 
            let pj = 0
            let cnt = 0
            for(let k = 0; k < testCount; k++) { // n번의 테스트 결과 반복
                for(let s = 0; s < studentCount; s++) { // 테스트 하나에 학생의 순위 반복
                    if(test[k][s] === i) pi = s // s는 등수가 된다.
                    if(test[k][s] === j) pj = s
                }
                if(pi > pj) {
                    cnt ++
                    pi = 0
                    pj = 0
                }
            }
            if(cnt === testCount) answer ++
        }
    }
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));