var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var newArr = [];

for (var i = 0; i < people.length; i++) {
  newArr.push(people[i] + ":");
  for (var y = 0; y < alphabet.length; y++) {
    newArr.push(alphabet[y]);
  }
}
