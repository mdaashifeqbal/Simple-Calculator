const buttons = document.querySelectorAll("button");
const equalButton = document.querySelector(".equalbutton");
const outputBox = document.getElementById("input");
let inputValues = "";

buttons.forEach((btns) => {
  btns.addEventListener("click", () => {
    const buttonValue = btns.innerText;
    if (buttonValue == "AC") {
      inputValues = "";
      outputBox.value = "";
    } else if (buttonValue == "DEL") {
      inputValues = inputValues.slice(0, -1).toString();
      outputBox.value = inputValues;
    } else if (buttonValue == "=") {
      inputValues = eval(inputValues).toString();
      outputBox.value = inputValues;
    } else {
      inputValues += buttonValue;
      outputBox.value = inputValues;
    }
    
  });
});

 
