var goomba = document.getElementById("goomba");
var bobomb = document.getElementById("bobomb");
var cheepcheep = document.getElementById("cheepcheep");
var displaytotal = document.getElementById("total");

var getTotal = function() {
  var goombaTotal = goomba.value * 5;
  var bobombTotal = bobomb.value * 7;
  var cheepcheepTotal = cheepcheep.value * 11;
  var total = goombaTotal + bobombTotal + cheepcheepTotal;

  displaytotal.innerHTML = total + " coins";
};

goomba.addEventListener("input", getTotal);
bobomb.addEventListener("input", getTotal);
cheepcheep.addEventListener("input", getTotal);
