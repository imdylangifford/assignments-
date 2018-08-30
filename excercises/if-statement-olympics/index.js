// Preliminaries

if (5 > 3) {
  console.log("is greater than");
}
if ("cat".length === 3) {
  console.log("is the length");
}
if ("cat" === "dog") {
} else {
  console.log("not the same");
}

//BRONZE

var person = {
  name: "Bobby",
  age: 12
};

if (person.age >= 18) {
  console.log(person.name + " is allowed to go to the movie");
} else {
  console.log(person.name + " is not allowed to go to the movie");
}

if (person.name.startsWith("B")) {
  console.log(person.name + " is allowed to go to the movie");
} else {
  console.log(person.name + " is not allowed to go to the movie");
}

if (person.name.startsWith("B") && person.age > 18) {
  console.log(person.name + " is allowed to go to the movie");
} else {
  console.log(person.name + " is not allowed to go to the movie");
}

//SILVER

if (1 === "1") {
  console.log("strict");
} else if (1 == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
}

if (1 <= 2 && 2 === 4) {
  console.log("yes");
}

//GOLD

var undefinedVar;

if (typeof "dog" === "string") {
  console.log("its a string");
}

if (typeof "true" === "boolean") {
  console.log("its a boolean");
}

if (typeof undefinedVar === "undefined") {
  console.log("variable is undefined");
}

if ("c" > "b") {
  console.log("it is greater than");
}

console.log(4 % 2 === 0 ? "true " : "false");
