let a = null;
let b = 345;
let c = true; 
let d = BigInt("567") + BigInt("3")
let e = "ali"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)


const item = {
  "Adeel": true,
  "Ali": false,
  "Ashan": 67,
  "Ramish": undefined
}
console.log(item["Ali"])


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive datatype) , heap (non-primitive datatype)

let myname = "Ali"
let anothername = myname
anothername = "ramish"
console.log(anothername)

let user1={
  email : "user@gmail.com",
  password : "abc"
}

let user2 = user1
user2.email = "google@gmail.com"
console.log(user1)
console.log(user2)