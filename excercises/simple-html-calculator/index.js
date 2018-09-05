var addBtn = document.getElementById("addBtn");
var addResult = document.getElementById("addresult");
var subBtn = document.getElementById("subbtn");
var subResult = document.getElementById("subresult");
var mulBtn = document.getElementById("mulbtn");
var mulResult = document.getElementById("mulresult");

function add() {
  var addOne = document.getElementById("add1");
  var addTwo = document.getElementById("add2");
  addResult.innerHTML = "Result = " + (add1.value * 1 + add2.value * 1);
}

function subtract() {
  var subOne = document.getElementById("sub1");
  var subTwo = document.getElementById("sub2");
  subResult.innerHTML = "Result = " + (sub1.value * 1 - sub2.value * 1);
}

function multiply() {
  console.log("ran");
  var mulOne = document.getElementById("mul1");
  var mulTwo = document.getElementById("mul2");
  mulResult.innerHTML = "Result = " + mulOne.value * 1 * mulTwo.value * 1;
}

addBtn.addEventListener("click", add);
subbtn.addEventListener("click", subtract);
mulbtn.addEventListener("click", multiply);
