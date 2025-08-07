// Task: 1
// let input = ("Enter a sentence")
// let spaceRemove = input
// let r = spaceRemove.trim()
// let capital = spaceRemove.split(" ")
// for (let i = 0; i < capital.length; i++) {
//   let word = capital[i]
//   let firstWord = word.charAt(0).toUpperCase()
//   let rest = word.slice(1).toLowerCase()
// capital[i] = firstWord + rest
// }
// let result = capital.join(" ")
// console.log(result)

// Q2: Reverse Digits of a Number
//  Ask the user to enter a number (e.g., 12340).
//  Output the number with its digits reversed, removing any leading zeros, like: 4321.

// Task: 2
// let input = prompt("Enter the number:")
// let reversed = input.split("").reverse().filter(input => input !== "0")
// let join = reversed.join("")
// let int = parseInt(join)
// console.log(int)

// Q3: Check for Palindrome
//  Ask the user to enter a word or phrase (e.g., "RaceCar").
//  Output true or false depending on whether it's a palindrome, ignoring case and spaces.

// Task: 3

// let input = prompt("Enter a word :")
// let input2 = input.toLowerCase()
// let space = input2.split("").filter((input2) => input2 !== " ");
// let reversed = space.reverse();
// let join = reversed.join("")
// if(join == input2){
//     console.log("This is a palindrome")
// }
// else{
//         console.log("This is not a palindrome")
// }


// Q4: Format Number with Commas
//  Ask the user to enter a large number (e.g., 1234567890).
//  Output the number with commas, like: "1,234,567,890".

// Task: 4

// let input = "1243564"
// let split = Number(input).toLocaleString()
// console.log(split);


// Q5: Mask All But Last 4 Characters
//  Ask the user to enter a string (e.g., a card number like "123456789012").
//  Output the masked version: "********9012".

// Task: 5

// let input = prompt("Enter the number")
// let result = "*".repeat((input).length - 4) + input.slice(-4);
// console.log(result); 



// Q6: Count Data Types
//  Given an array like [1, "a", true, 5, "b", false]
//  Loop through and count how many are numbers, strings, and booleans.

// Task: 6


// let input = [1, "a", true, 5, "b", false]
// let int = 0
// let boolean = 0
// let string = 0
// for(let item of input){
//     if( typeof item === "number"){
//       int++  
//     }
//     else if( typeof item === "boolean"){
//         boolean++
//     }
//     else if( typeof item === string){
//         str++
//     }
// }
// console.log(string)
// console.log(int)
// console.log(boolean)


//  Write a program that takes an array of daily step counts and counts how many days the user reached at least 10,000 steps. Finally, print out that count. Daily steps count Array Example : [1000, 150, 340, 123, 432, 10000]
// Task: 7  

// let steps = [1000, 150, 340, 123, 432, 10000]

// let count =  steps.filter(step => step >= 10000).length
// console.log(count)]



// Create a new array that has the same elements in reverse order.
//  (No .reverse() — use a loop.)


// Task: 8
// let arr = [1,56,4,6,4,5]
// let reversed = []
// for (let i = arr.length-1; i >= 0 ;i--) {
// reversed.push(arr[i])    

// }
// console.log(reversed);
