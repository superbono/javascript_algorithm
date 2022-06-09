

/*
    forEach, map, filter, reduce 메서드
*/

// forEach: 원본 배열을 이용하여 조건에 맞는 값을 반환한다. forEach문을 호출할때마다 배열안의 요소 하나하나를 리턴한다.
// let a = [3, 5, 8, 6, 11, 16];
// let arg = 5;

// a.forEach(function(arr, index) {
//     arr !== arg ? console.log(arr) : '';
// },arg);

// map : 원본 배열을 이용하여 새로운 배열을 반환한다. (단, 배열의 길이는 변하지 않는다. 해당하는 조건에 해당하지 않으면, 배열의 값이 undefined로 출력된다.)
// let b = [2, 5, 1, 10, 8];
// let result = b.map(function(arr,index){
//     if(arr % 2 === 0) return index;
// })

// console.log(result);

// filter : 원본 배열을 이용하여 조건에 맞는 새로운 배열을 반환한다. (배열의 길이가 변할 수 있다.)
// let c = [1, 9, 8, 6, 10, 14];
// let value = 9;

// let result = c.filter(function(arr, index) {
//     if(arr != this) return arr;
// },value)

// console.log(result);

// reduce: 원본 배열을 이용하여 조건에 맞는 새로운 값을 반환한다.
let d = [1, 9, 8, 6, 10, 14];
let result = d.reduce(function(acc, value){
    return acc+value;
})

console.log(result);