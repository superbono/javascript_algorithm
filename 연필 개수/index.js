
/* 
    연필 1 다스는 12자리입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면
    필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
    첫 번째 줄에 1000이하의 자연수  N이 입력됩니다.
    첫 번째 줄에 필요한 다스 수를 출력합니다.
    
    입력 : 25
    출력 : 3
*/

function solution(k) {

    // 첫번째
    // let answer;
    // let pencil = 12;

    // answer = Math.floor(k / pencil);
    // if (pencil * answer < k) answer = answer + 1;
    // return Math.floor(answer);

    // 보완
    let answer = Math.ceil(k / 12);
    return answer;
}

console.log(solution(26));