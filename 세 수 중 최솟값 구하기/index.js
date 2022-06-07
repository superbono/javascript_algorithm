
/* 
    100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성해보자. (정렬 사용 X)
    첫 번째 줄에 100이하의 세 자연수가 입력된다.
    첫 번째 줄에 가장 작은 수를 출력한다.
    
    입력 : 8 3 11
    출력 : 3
*/

function solution(A, B, C) {
    let min = Number.MAX_SAFE_INTEGER;

    // 첫번째
    // if (A < min) {
    //     min = A;
    //     if (B < min) min = B;
    //     if (C < min) min = C;
    // }

    // 보완
    if (A < B) min = A;
    else min = B;
    if (C < min) min = C;
    return min;
}

console.log(solution(8, 3, 11));