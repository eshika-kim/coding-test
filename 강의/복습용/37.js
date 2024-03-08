function solution(brown, yellow) {
    let total = brown + yellow // 사각형의 넓이
    let width = 0
    let height = 0
    for(let i = 3; i*i <= total; i++) {
        if( total % i === 0 ) {
            width = i;
            height = total/width
            if( (width - 2)*(height -2) === yellow ) break;
        }
    }
    return [Math.max(width, height),Math.min(width, height)]
}
// 프로그래머스 lv2 카펫문제