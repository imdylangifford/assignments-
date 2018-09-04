var input = "bookkeeper larry";

function showDupes(str) {
  var recordOfPastCharacters = {};
  var output = "";

  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    if (recordOfPastCharacters[currentLetter] === undefined) {
      recordOfPastCharacters[currentLetter] = i;
    } else {
      output += currentLetter;
    }
  }
  return output;
}

function removeDupes(str) {
  var recordOfPastCharacters = {};
  var output = "";

  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    if (recordOfPastCharacters[currentLetter] === undefined) {
      output += currentLetter;
      recordOfPastCharacters[currentLetter] = i;
    }
  }
  return output;
}
