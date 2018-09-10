var readline = require("readline-sync");
var operators = ["add", "subtract", "multiply", "divide"];

var answers = {
  num1: readline.question("Please enter your first number "),
  num2: readline.question("Please enter your second number "),
  index: readline.keyInSelect(operators, "Please select operation to perform")
};

if (operators[answers.index] === "add") {
  console.log(`The Result is: ${answers.num1 * 1 + answers.num2 * 1}`);
} else if (operators[answers.index] === "subtract") {
  console.log(`The Result is: ${answers.num1 * 1 - answers.num2 * 1}`);
} else if (operators[answers.index] === "multiply") {
  console.log(`The Result is: ${answers.num1 * 1 * answers.num2 * 1}`);
} else {
  console.log(`The Result is: ${((answers.num1 * 1) / answers.num2) * 1}`);
}
