
/* 
    길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면,
    "YES"를 출력하고, 만들 수 없으면 "NO"를 출력한다.
    첫 번째 줄에 100이하의 서로 다른 A,B,C 막대의 길이가 주어진다.
    첫 번째 줄에 "YES", "NO"를 출력한다.

    입력 : 6 7 11
    출력 : YES

    입력 : 13 33 17
    출력 : NO
*/

function solution(A, B, C) {

    // 첫번째
    // let answer;
    // let n;
    // let n1;
    // let max;

    // if (A < B && B > C) {
    //     max = B;
    //     n = A;
    //     n1 = C;
    // } else if (A > B && A > C) {
    //     max = A;
    //     n = B;
    //     n1 = C;
    // } else {
    //     max = C;
    //     n = A;
    //     n1 = B;
    // }

    // if (n + n1 > max) {
    //     answer = "YES";
    // } else {
    //     answer = "NO";
    // }

    // return answer;

    // 보완
    let answer, max;
    let sum = A + B + C;

    if (A < B) max = B;
    else max = A;

    if (C > max) max = C;

    if (sum - max > max) {
        answer = "YES";
    } else {
        answer = "NO";
    }
    return answer;

}

// console.log(solution(6, 7, 11));
// console.log(solution(13, 33, 17));
console.log(solution(3, 3, 6));