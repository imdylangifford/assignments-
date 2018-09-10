function reverseString(str) {
  console.log(
    str
      .split("")
      .reverse()
      .join("")
  );
}

function isStringNumber(str) {
  if (str * 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function checkOddOrEven(num) {
  if (num % 2) {
    console.log("false");
  } else {
    console.log("true");
  }
}

function findAvg(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total / arr.length);
}

findAvg([3, 6, 3]);
