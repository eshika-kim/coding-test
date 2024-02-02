// 공통원소 구하기
// A, B 두 개의 집합의 공통원소를 추출하여 오름차순으로 출력하는 프로그램
// 첫 번쨰 줄 : arr1의 크기 N (1 <= 1 <= 30,000)
// 두 번째 줄 : arr1의 N개의 원소, 원소 중복 X
// 세 번쨰 줄 : arr2의 크기 M (1 <= 1 <= 30,000)
// 네 번째 줄 : arr2의 M개의 원소, 원소 중복 X
// 각 집합의 원소는 1,000,000,000이하의 자연수
// 시간 복잡도 : O(n+m)
function solution(arr1, arr2){
    let answer=[];
    let p1 = p2 = 0
    arr1.sort((a, b) => a - b) // 콜백함수에 아무런 조건을 주지 않으면 문자열로 변환한 뒤 정렬한다.
    arr2.sort((a, b) => a - b)
    while(p1 < arr1.length && p2 < arr2.length) {
        if(arr1[p1] < arr2[p2]) p1++
        else if(arr1[p1] > arr2[p2]) p2++
        else if(arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++])
            p2++
        }
    }
    return answer;
}

let a=[1, 3, 9, 5, 2, 10];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));