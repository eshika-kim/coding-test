// 삽입 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
// 정렬 시 선택된 숫자가 복사가 된 뒤 정렬하는 방식
function solution(arr){
    let answer=arr;
    for(let i = 0; i < arr.length; i++) {
        let tmp = arr[i], j
        for(j = i - 1; j >= 0; j--) { // j를 스코프 바깥에 선언했기 때문에 let을 해주면 안됨!
            if(arr[j] > tmp) arr[j+1] = arr[j]
            else break;
        }
        arr[j+1] = tmp
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
// i = 1 7, j = 0 11, tmp=7, if문에 걸려서 arr[i]= arr[j]가 됨 즉, arr[1(i)] = 11
// 첫 번째 j반복문은 끝나고 arr[]
console.log(solution(arr));