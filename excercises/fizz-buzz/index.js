var fizzBuzz = function() {
  fizzArray = [];
  for (var i = 0; i <= 100; i++) {
    var divBy3 = i % 3 === 0;
    var divBy5 = i % 5 === 0;

    if (divBy3 && divBy5) fizzArray.push("fizzbuzz");
    else if (divBy5) fizzArray.push("buzz");
    else if (divBy3) fizzArray.push("fizz");
    else fizzArray.push(i);
  }
  return fizzArray;
};

var countFizzes = function(arr) {
  var counter = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
  };

  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "fizzbuzz":
        counter.fizzbuzz++;
        break;
      case "fizz":
        counter.fizz++;
        break;
      case "buzz":
        counter.buzz++;
        break;
    }
  }
  return counter;
};

console.log(countFizzes(fizzBuzz()));
