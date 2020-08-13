const calculator = {
  outputValue: "0",
  firstValue: null,
  flagForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { outputValue, flagForSecondOperand } = calculator;

  if (flagForSecondOperand === true) {
    calculator.outputValue = digit;
    calculator.flagForSecondOperand = false;
  } else {
    calculator.outputValue = outputValue === "0" ? digit : outputValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.flagForSecondOperand === true) return;

  // If the `outputValue` does not contain a decimal point
  if (!calculator.outputValue.includes(dot)) {
    // Append the decimal point
    calculator.outputValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstValue, outputValue, operator } = calculator;
  const inputValue = parseFloat(outputValue);

  if (operator && calculator.flagForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstValue == null) {
    calculator.firstValue = inputValue;
  } else if (operator) {
    const currentValue = firstValue || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.outputValue = String(result);
    calculator.firstValue = result;
  }

  calculator.flagForSecondOperand = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  "/": (firstValue, secondOperand) => (firstValue / secondOperand).toFixed(5),

  "*": (firstValue, secondOperand) => firstValue * secondOperand,

  "+": (firstValue, secondOperand) => firstValue + secondOperand,

  "-": (firstValue, secondOperand) => firstValue - secondOperand,

  "=": (firstValue, secondOperand) => secondOperand,
};

function resetCalculator() {
  calculator.outputValue = "0";
  calculator.firstValue = null;
  calculator.flagForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector(".output-screen");
  display.value = calculator.outputValue;
}

updateDisplay();

const keys = document.querySelector(".display-keys");
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

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("clear-value")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
