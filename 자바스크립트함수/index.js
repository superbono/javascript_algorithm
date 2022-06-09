

/*
    forEach, map, filter, reduce 메서드
*/

// forEach
let a = [3, 5, 8, 6, 11, 16];
let arg = 5;

a.forEach(function(arr, index) {
    // console.log(arr,index);
    arr !== arg ? console.log(arr) : '';
},arg);



