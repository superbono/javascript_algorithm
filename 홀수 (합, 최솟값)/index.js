
/* 
    7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 
    찾는 프로그램을 작성하세요. 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중
    홀수의 합과 최소값을 구하세요.

    
    입력 : 12, 77, 38, 41, 53, 92, 85
    출력 : 256
           41
*/

function solution(arr) {
    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let n of arr) {
        if (n % 2 === 1) {
            if (n < min) min = n;
            sum += n;
        }
    }
    answer.push(sum, min);
    return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)[0]);
console.log(solution(arr)[1]);