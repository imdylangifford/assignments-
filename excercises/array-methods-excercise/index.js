var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.splice(vegetables.length - 1, 1);

fruit.splice(0, 1);

fruit.push(fruit.findIndex(fruit => fruit === "orange"));

vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse();
food.toString();

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(food);
