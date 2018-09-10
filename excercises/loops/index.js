function printString(str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function findCharacter(str, c) {
  var found = str.indexOf(c);
  if (found > 0) {
    console.log("This character is at index ", found);
  } else {
    console.log("Character not found");
  }
}

function find42(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 42) return;
  }
  console.log("42 not found ");
}

function findSmallest(arr) {
  var smallest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest);
}

findSmallest([12, 42, 34, 56, 2232, 4354, 6654]);
