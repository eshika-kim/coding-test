// 이분 검색
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한개의 수인
// M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성
// 중복값은 존재하지 않음
// 아래와 같은 방법은 그냥 숫자 검색
function solution1(target, arr){
    let answer;
    arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length; i++) {
        if(target === arr[i]) answer = i + 1
    }
    return answer;
}

// 이분 검색 시간 복잡도 : O(log N), 숫자 검색 O(N)
function solution(target, arr) {
    let answer;
    arr.sort((a, b) => a - b)
    let lt = 0;
    let rt = arr.length - 1;
    while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2)
        if(arr[mid] === target) {
            answer = mid + 1
            break;
        }
        else if(arr[mid] > target) rt = mid - 1
        else if(arr[mid] < target) lt = mid + 1
    }
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));