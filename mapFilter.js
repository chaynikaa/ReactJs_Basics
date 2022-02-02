let arr = [1,2,3,4,5];
//double el of the array

//array

//traditional

// let narr=[];     

// for(let i=0;i<arr.length;i++){
//     narr[i]=2*arr[i];
// }

// console.log(narr);

//****************************MAP***********************/

let narr = arr.map(function(el)
{
    // console.log(el);
    return 2*el;
});

console.log(narr);

//****************************************************************************************************************************/

let word = ['chaynika','arora','cat','miniso','fish','experience'];

//print the words with length more than 6

//traditional method
// let ans = [];
// for(let i=0;i<word.length;i++){
//     let w = word[i];

//     if(w.length>6)
//     ans.push(w);
// }
// console.log(ans);

let res = word.filter(function(el){

    return el.length>6;
})
console.log(res);