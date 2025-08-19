
let container = document.getElementById("container");
let buttons = document.getElementsByTagName("button");

buttons[0].onclick = () => {
  container.style.backgroundColor = "blue";
};
buttons[1].onclick = () => {
  container.style.backgroundColor = "black";
};
buttons[2].onclick = () => {
  container.style.backgroundColor = "green";
};
buttons[3].onclick = () => {
  container.style.backgroundColor = "skin";
};
buttons[4].onclick = () => {
  container.style.backgroundColor = "gray";
};
// button.addEventListener("click", function () {
// let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
//     let randomindex
//      for (let i = 0; i < colors.length; i++) {
//        randomindex = (Ma * colors[i])
//     }
//     document.body.style.backgroundColor = colors[randomindex]
// })