const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","aquaman"]

// marvel_heros.push(dc)

// console.log(marvel_heros[1]);

// let heros = marvel_heros.concat(dc)

// let all_heros =[...marvel_heros, ...dc]

const another_array = [1, 2, 3, 4,[5, 6, 7], 8 ,9 ,[7,8,9,[4,4]] ]
let arr2 = another_array.flat(Infinity)

console.log(arr2);

