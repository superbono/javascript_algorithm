
/* 
    자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
    첫 번째 줄에 20이하의 자연수 N이 입력됩니다.
    첫 번째 줄에 1부터 N까지의 합을 출력합니다.

    입력 : 6
    출력 : 21
*/

function solution(N) {
    let sum = 0;
    for (let n = 1; n <= N; n++) {
        sum += n;
    }
    return sum;
}

console.log(solution(6));