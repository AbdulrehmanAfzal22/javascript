let buttons = document.getElementsByTagName("button")[0]
let circle1= document.getElementById("circle1")
let circle2= document.getElementById("circle2")
let circle3= document.getElementById("circle3")


 buttons.addEventListener("click", function () {
     
      if ( buttons.innerText === "Change to red") {
circle1.style.backgroundColor = "red"
   buttons.innerText = "Change to blue"
   
      }
      else if( buttons.innerText === "Change to blue"){
        circle2.style.backgroundColor = "blue";
         buttons.innerText = "Change to green"
         
      }
      
     else if (buttons.innerText === "Change to green") {
        circle3.style.backgroundColor = "green";
        
        
      }
    });

        