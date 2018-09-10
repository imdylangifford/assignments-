var readline = require("readline-sync");

var options = ["Put Hand in hole", "Find the key, or", "Open the door"];

var isAlive = true;
var foundKey = false;

while (isAlive === true) {
  var index = readline.keyInSelect(
    options,
    "You're stuck in a room what would you like to do "
  );
  if (options[index] === "Put Hand in hole") {
    isAlive = false;
    console.log("Your arm got chewed off by a dog and you bleed out sorry g");
  } else if (options[index] === "Find the key, or") {
    foundKey = true;
    console.log("You found the key!");
  } else {
    if (foundKey === true) {
      console.log(
        "The key unlocked the door and your out good work young buck!"
      );
      isAlive = false;
    } else {
      console.log("The door is locked!");
    }
  }
}
