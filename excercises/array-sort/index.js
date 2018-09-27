function leastToGreatest(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

function greatestToLeast(arr) {
  return arr.sort(function(a, b) {
    return b - a;
  });
}

function lengthSort(arr) {
  return arr.sort(function(a, b) {
    return a.length - b.length;
  });
}

function alphabetical(arr) {
  return arr.sort();
}

function byAge(arr) {
  return arr.sort(function(a, b) {
    return a.age - b.age;
  });
}
