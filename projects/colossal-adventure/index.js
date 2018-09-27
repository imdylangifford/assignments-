var rls = require("readline-sync");

var health = 100;
var inventory = [];
var options = ["run", "fight"];
var stepsTaken = 0;
var alive = true;
var userName = rls.question("enter name ");
var rndmNum = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
var rndmEnemy = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

console.log(
  `--Hello ${userName} you need to get back to your spaceship just over that hill so you better start walking--`
);

while (alive && health > 0) {
  input = rls.question("Press W to walk or P to see Health and Inventory ");
  if (input === "p") {
    console.log(`Health: ${health} --- Inventory: ${inventory}`);
  }
  if (stepsTaken < 10 && input === "w") {
    stepsTaken++;
    num = rndmNum(2);
    if (num === 0) {
      enemy = rndmEnemy(3);
      // --- Fighting Frog ---
      if (enemy === 0) {
        console.log("You've come upon a Giant Frog");
        if (rls.keyInYN("Pres Y to Fight or N to run")) {
          attack = rndmEnemy(2);
          if (attack === 0) {
            console.log("You slayed the frog taking no damage");
            console.log("--frog guts were added to your inventory--");
            inventory.push("frog guts");
          } else {
            damage = rndmNum(4) * 10;
            console.log(`You wrestle with frog taking ${damage} damage`);
            health -= damage;
          }
        } else {
          runChance = rndmNum(2);
          if (runChance === 0) {
            console.log("You got away safely");
          } else {
            damage = rndmNum(4) * 10;
            console.log(
              `you tried to run away but sustained ${damage} damage in the process`
            );
            health -= damage;
          }
        }
      }
      // --- Fighting Big Ass Moose ---
      if (enemy === 1) {
        console.log("You've come upon a big Ass Moose");
        if (rls.keyInYN("Pres Y to Fight or N to run")) {
          attack = rndmEnemy(2);
          if (attack === 0) {
            console.log(
              "You take that moose by his antlers and throw his ass to the ground he runs away in fear"
            );
            console.log("-- Moose Antlers were Added to your inventory--");
            inventory.push("Moose Antlers");
          } else {
            damage = rndmNum(5) * 10;
            console.log(
              `you land the final blow but not before he kicks you in the chest taking ${damage} damage`
            );
            health -= damage;
          }
        } else {
          runChance = rndmNum(2);
          if (runChance === 0) {
            console.log("You got away from the moose wow that was close");
          } else {
            damage = rndmNum(5) * 10;
            console.log(
              `you tried to run away but he caught you and spit on your face in pity, the emotional toll took ${damage} health`
            );
            health -= damage;
          }
        }
      }
      // --- Fighting Midget ---
      if (enemy === 2) {
        console.log("You've come upon a Fat Midget");
        if (rls.keyInYN("Pres Y to Fight or N to run")) {
          attack = rndmEnemy(2);
          if (attack === 0) {
            console.log(
              "You toss the midget like a rag doll taking no damage and moving on closer towards your ship"
            );
            console.log("-- the midget was added to your inventory--");
            inventory.push("Midget");
          } else {
            damage = rndmNum(5) * 10;
            console.log(
              `You expect to dominante but he kicks you in the shin then runs away, you take ${damage} damage`
            );
            health -= damage;
          }
        } else {
          runChance = rndmNum(2);
          if (runChance === 0) {
            console.log(
              "You got away from the fat midget which isnt really that surprising"
            );
          } else {
            damage = rndmNum(5) * 10;
            console.log(
              `you tried to run away but the little ankle biter got a chunk at the last minute, you lose ${damage} health`
            );
            health -= damage;
          }
        }
      }
    }
  } else if (stepsTaken >= 7 && health > 0) {
    console.log(
      "-- You made it! Now you can go back to your life of being a subpar programmer --"
    );
    alive = false;
  }
}
if (health <= 0) {
  console.log("-- You're a scrub and died try again boy(or girl) --");
}
