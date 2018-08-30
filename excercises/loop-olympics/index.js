//Preliminaries

for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 9; i >= 0; i--) {
  console.log(i);
}

//Bronze

var fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

//Silver

var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

var names = [];
var occupations = [];

for (var i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}

//Gold

grid1 = [];
for (var i = 0; i < 3; i++) {
  grid1.push([0, 0, 0]);
}

grid2 = [];
for (var i = 0; i < 3; i++) {
  grid2.push([i, i, i]);
}

grid3 = [];
for (var i = 0; i < 3; i++) {
  grid3.push([]);
  for (var y = 0; y < 3; y++) {
    grid3[i].push(y);
  }
}

for (var i = 0; i < 3; i++) {
  for (var y = 0; y < 3; y++) {
    grid3[i][y] = "X";
  }
}

console.log(grid3);
