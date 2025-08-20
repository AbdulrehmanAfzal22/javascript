let by3 = 0
let by7 = 0
divisible = ()=>{
for (let i = 0; i < 100; i++) {
   if ([i] % 3 === 0) {
    by3++
   }
   if ([i] % 7 === 0 ) {
    by7++
   }
}
console.log(by3)
console.log(by7)
}
divisible()