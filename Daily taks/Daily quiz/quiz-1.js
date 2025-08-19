// Write a function that takes an array of numbers and returns them as strings with the $ symbol prefixed. Example: Input: [20, 50, 100] Output: ["$20", "$50", "$100"]

  let arr2;
  function dollarSign(arr){
     arr2 = arr.map(arr +"$"+arr)
     
 }
 console.log(arr2)
 let array = [1,2,3,4,5,6,7]
 let NewArray = String(array)
let result = dollarSign(NewArray)
console.log(result)



// Count Completed Tasks (Array + Boolean) Scenario: You’re building a to-do app. Each task has a status of true (done) or false (not done). Problem: Write a function that counts how many tasks are marked as done. Example: Input: [true, false, true, true, false] Output: 3

let input =  [true, false, true, true, false]
// decalered done because we can't decalred in loop also give it value 0 to increment if condition i true same as pending
let done = 0
let pending = 0
for (let i = 0; i < input.length; i++) {
    // run an for loop if index of input meet requirment then done done wiil increment same as pending
    if(input[i] === true){
        done++
    }
    else{
pending++
    }
}
// console after the loop to get updated  value of done and pending
console.log(done)
console.log(pending)

