var readLineSync = require("readline-sync");

var name = {
  first: readLineSync.question("May I have your first name? "),
  last: readLineSync.question("May I have your last name? ")
};

console.log(
  `Your name is ${name.first.toUpperCase()} ${name.last.toUpperCase()} thats so cool`
);

console.log(`it has ${name.first.concat(name.last).length} characters in it`);

var story = readLineSync.question("Tell me a story my g");

if (story.length > 20) {
  console.log(
    `Thats a long ass story so i cut in half || ${story.slice(
      story.length / 2
    )}  || `
  );
}

var whereToCut = readLineSync.question(
  "I guess i will let you decide where to cut that shit give me an index my g"
);

console.log(`here you go dawg no stress ${story.slice(whereToCut * 1)}`);
