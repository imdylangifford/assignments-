function sum(num1, num2) {
  return num1 + num2;
}

function largest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

function evenOrOdd(num) {
  if (num % 2) {
    return "odd";
  } else {
    return "even";
  }
}

function checkLength(str) {
  if (str.length < 20) {
    return str + str;
  } else {
    var half = str.slice(0, Math.floor(str.length / 2));
    return half;
  }
}

sum(5, 6);
