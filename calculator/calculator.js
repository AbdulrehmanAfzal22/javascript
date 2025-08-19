const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let input1 = "";
let input2 = "";
let operator = "";
let result = 0;


buttons.forEach((btn) => {
  btn.onclick = () => {
    let value = btn.innerText;


    if (value === "C") {
      display.value = "";
      input1 = "";
      input2 = "";
      operator = "";
      return;
    }


    if (["+", "-", "x", "÷", "%"].includes(value)) {
      operator = value;
      input1 = display.value;
      display.value = "";
      return;
    }

    if (value === "=") {
      input2 = display.value;

      let int1 = parseInt(input1);
      let int2 = parseInt(input2);

      if (operator === "x") {
        result = int1 * int2;
      }
      if (operator === "÷") {
        result = int1 / int2;
      }
      if (operator === "%") {
        result = int1 % int2;
      }
      if (operator === "-") {
        result = int1 - int2;
      }
      if (operator === "+") {
        result = int1 + int2;
      }

      display.value = result;
      return;
    }

    display.value += value;
  };
});