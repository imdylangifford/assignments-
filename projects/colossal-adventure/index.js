var rls = require("readline-sync");

var health = 100;
var inventory = [];
var enemies = ["scary frog", "big ass moose", "fat midget"];
var options = ["run", "fight"];
var stepsTaken = 0;
var alive = true;
var userName = rls.question("enter name ");
var rndmNum = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

console.log(
  `--Hello ${userName} you need to get back to your spaceship just over that hill so you better start walking--`
);

while (alive && health > 0) {
  console.log(stepsTaken);
  console.log(`Health: ${health}`);
  input = rls.question("Press W to walk ");
  if (stepsTaken < 7 && input === "w") {
    stepsTaken++;
    var num = rndmNum(3);
    if (num === 0) {
      enemy = rndmNum(3);
      console.log(`You've come upon a ${enemies[enemy]}`);
      if (rls.keyInYN("Pres Y to Fight or N to run")) {
        console.log("you aint a bitch and killed him good job");
      } else {
        console.log("your a pussy and took damage");
        health -= 10;
      }
    }
  } else if (stepsTaken >= 7 && health > 0) {
    console.log("--you made it--");
    alive = false;
  }
}

if (health <= 0) {
  console.log("--you died sorry--");
}
