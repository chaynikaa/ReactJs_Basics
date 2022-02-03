let arr = [1,2,3,4,5];
console.log(...arr);

let m = [1,2,3,4];
let n = [6,7,8,9,10];
//concatenate and add 5 simultaneously
let ans = [...m,5,...n];
console.log(ans);