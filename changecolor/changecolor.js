let buttons = document.getElementsByTagName("button")[0]
let circle1= document.getElementById("circle1")
let circle2= document.getElementById("circle2")
let circle3= document.getElementById("circle3")


 
   setInterval(() => {
  circle1.style.backgroundColor = (circle1.style.backgroundColor === "red")  ? "gray" : "red";
  circle2.style.backgroundColor = (circle2.style.backgroundColor === "blue") ? "gray" : "blue";
  circle3.style.backgroundColor = (circle3.style.backgroundColor === "green") ? "gray" : "green";
//   isRed = !isRed;
//   isBlue = !isBlue;
//   isGreen = !isGreen;
}, 500);
 
     
    

     