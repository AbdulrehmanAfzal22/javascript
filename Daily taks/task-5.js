// let first = 0;   
// let second = 0;  
// let array = [1,2,3,4,5,6,7,8,9]
// for(let i = 0 ; i <array.length ; i++){
//     let num = array[i]
//     if(num > first){
//         second = first
//       first =  num
//     }
//     else if(num > second && num!==first){
//         second = num
//     }
// }

// console.log(second);


let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let common = arr1.filter(num => arr2.includes(num));

console.log(common); 

