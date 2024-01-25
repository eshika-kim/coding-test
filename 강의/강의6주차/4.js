// 후위식 연산(postfix)
// 3*(5+2)-9를 후위 연산식으로 표현하면 352+*9-로 표현되며 값은 12
function solution(s){  
    let answer;
    const stack = []
    for(let x of s) {
        if(!isNaN(x)) stack.push(Number(x))
        else {
            let rt = stack.pop()
            let lt = stack.pop()
            if(x === '+') stack.push(lt + rt)
            else if(x === '-') stack.push(lt - rt)
            else if(x === '*') stack.push(lt * rt)
            else if(x === '/') stack.push(lt / rt)
        }
    }
    answer = stack.pop()
    return answer;
}

let str="352+*9-";
console.log(solution(str));