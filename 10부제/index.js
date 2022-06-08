
/* 
    서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의
    일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
    예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.
    또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.

    여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다.
    날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는
    자동차의 대수를 출력하는 프로그램을 작성하세요.

    
    입력설명 : 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두자리 숫자가 주어진다.
    출력설명 : 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니다.

    * 첫 번째 출력
    입력 : 3
          25 23 11 47 53 17 33
    출력 : 3      

    * 두 번째 출력
    입력 : 0
          12 20 54 30 87 91 30
    출력 : 3      
*/

function solution(day, arr) {
    // let answer = [];
    let cnt = 0;
    
    // 첫번째
    // for(let i = 0; i < arr.length; i++) {
    //     answer.push(arr[i].toString().substring(1,2));
    //     if(answer[i] == day) {
    //         cnt++;
    //     }
    // }

    // 보완
    for (let n of arr) {
        if(n%10 === day) {
            cnt++;
        }
    }

    return cnt;
}
let arr = [25, 23, 11, 47, 53, 17, 33];
// let arr = 25;
console.log(solution(3,arr));

