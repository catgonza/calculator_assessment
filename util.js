// take first number (firstValue) and second number (secondOperand)
// use operators (/,*,+,-,=) to do the calculations
// use toFixed to round to 3 decimals
export const performCalculation = {
  "/": (firstValue, secondOperand) => (firstValue / secondOperand).toFixed(3),

  "*": (firstValue, secondOperand) => firstValue * secondOperand,

  "+": (firstValue, secondOperand) => firstValue + secondOperand,

  "-": (firstValue, secondOperand) => firstValue - secondOperand,

  "=": (firstValue, secondOperand) => secondOperand,
};
