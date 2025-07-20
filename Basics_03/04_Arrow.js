const user = {
    username:"Ali",
    price : 999,
welcomeMessage: function () {
    console.log(`${this.username} , Welcome to website`)
    console.log(this);
    
}
}
user.welcomeMessage()    
user.username = "sam"
user.welcomeMessage()    
    console.log(this);

function one() {
let username1  = "worker"
    console.log(this.username1);
} 
one()

const one1 = () =>{
let username1  = "worker"
    console.log(this);
} 
one1()

const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(10,10));

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(10,10));

