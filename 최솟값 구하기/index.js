
/* 
    7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
    첫 번째 줄에 7개의 수가 주어진다.
    첫 번째 줄에 가장 작은 값을 출력한다.
    
    입력 : 5 3 7 11 2 15 17
    출력 : 2
*/

function solution(arr) {
    let answer;
    let min = Number.MAX_SAFE_INTEGER;
    for (let n of arr) {
        if (n < min) min = n;
    }
    answer = min;
    return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));