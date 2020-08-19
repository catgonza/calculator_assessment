// Hello, thanks for checking out my work. This is a simple calculator using JS
// based on different tutorials and my own code/logic
// for more info please refer to the read me file on GitHub
import { performCalculation } from "./util.js";
// declaration of variables
const calculator = {
  outputValue: "0",
  firstValue: null,
  secondOperand: false,
  operator: null,
};
// take the digits and compare
function inputDigit(digit) {
  const { outputValue, secondOperand } = calculator;

  if (secondOperand === true) {
    calculator.outputValue = digit;
    calculator.secondOperand = false;
  } else {
    calculator.outputValue = outputValue === "0" ? digit : outputValue + digit;
  }
}
// decimal point
function inputDecimal(dot) {
  if (calculator.secondOperand === true) return;

  // if the outputValue does not contain a decimal point
  if (!calculator.outputValue.includes(dot)) {
    // append the decimal point
    calculator.outputValue += dot;
  }
}
// use parseFloat to convert string to integer
function handleOperator(nextOperator) {
  const { firstValue, outputValue, operator } = calculator;
  const inputValue = parseFloat(outputValue);

  if (operator && calculator.secondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  // perform calculation
  if (firstValue == null) {
    calculator.firstValue = inputValue;
  } else if (operator) {
    const currentValue = firstValue || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.outputValue = String(result);
    calculator.firstValue = result;
  }

  calculator.secondOperand = true;
  calculator.operator = nextOperator;
}

// function to reset the calculator
function resetCalculator() {
  calculator.outputValue = "0";
  calculator.firstValue = null;
  calculator.secondOperand = false;
  calculator.operator = null;
}

// select the text area that displays the results using querySelector
// function updateDisplay() {
//   const display = document.querySelector(".output-screen");
//   display.value = calculator.outputValue;
// }

// updateDisplay();

// select the buttons from DOM using querySelector and add EventListener
// confirm if a button was clicked and then fetch its action and values further
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  // check if the displayed value already includes a decimal point
  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  // reset the calculator
  if (target.classList.contains("clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
