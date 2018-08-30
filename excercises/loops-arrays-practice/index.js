var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer"
];

// #1
var count = 0;
for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    count += 1;
  }
}
console.log(count);

// #2
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female"
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female"
  },
  {
    name: "Sam",
    age: 30,
    gender: "male"
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
    console.log(
      peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max"
    );
  } else {
    console.log(
      peopleWhoWantToSeeMadMaxFuryRoad[i].name +
        " is not old enough to see Mad Max"
    );
  }
}

var lightIsOn = true;

toggleLight = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total % 2 === 0) {
    lightIsOn = true;
  } else {
    lightIsOn = false;
  }
  console.log(lightIsOn);
};
