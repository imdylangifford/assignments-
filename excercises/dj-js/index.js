var element = document.getElementById("square");
var mouseD = function() {
  console.log("mouse down");
  element.classList.remove("green");
  element.classList.remove("yellow");
  element.classList.remove("orange");
  element.classList.remove("blue");
  element.classList.add("red");
};
var mouseU = function() {
  console.log("mouse up");
  element.classList.remove("red");
  element.classList.remove("green");
  element.classList.remove("orange");
  element.classList.remove("blue");
  element.classList.add("yellow");
};
var mousedbl = function() {
  console.log("double click");
  element.classList.add("green");
  element.classList.remove("red");
  element.classList.remove("blue");
  element.classList.remove("orange");
  element.classList.remove("yellow");
};
var mouseWheel = function() {
  console.log("wheel");
  element.classList.add("orange");
  element.classList.remove("red");
  element.classList.remove("blue");
  element.classList.remove("yellow");
  element.classList.remove("green");
};
var mouseOver = function() {
  console.log("wheel");
  element.classList.add("blue");
  element.classList.remove("orange");
  element.classList.remove("red");
  element.classList.remove("yellow");
  element.classList.remove("green");
};

var mouseOut = function() {
  element.classList.remove("blue");
};

var keyCheck = function(e) {
  console.log("key checked");
  if (e.keyCode === 82) {
    console.log("key passed");
    element.classList.remove("green");
    element.classList.remove("yellow");
    element.classList.remove("orange");
    element.classList.remove("blue");
    element.classList.add("red");
  }
};

element.addEventListener("mousedown", mouseD);
element.addEventListener("mouseup", mouseU);
element.addEventListener("dblclick", mousedbl);
window.addEventListener("wheel", mouseWheel);
window.addEventListener("keydown", keyCheck);
element.addEventListener("mouseover", mouseOver);
element.addEventListener("mouseout", mouseOut);
