var lyrics = [
  "This",
  "hit",
  "that",
  "ice",
  "cold",
  "Michelle",
  "Pfeiffer",
  "that",
  "white",
  "gold",
  "This",
  "one",
  "for",
  "them",
  "hood",
  "girls",
  "Them",
  "good",
  "girls",
  "straight",
  "masterpieces",
  "Stylin'",
  "whilen'",
  "livin'",
  "it",
  "up",
  "in",
  "the",
  "city",
  "Got",
  "Chucks",
  "on",
  "with",
  "Saint",
  "Laurent",
  "Gotta",
  "kiss",
  "myself",
  "I'm",
  "so",
  "pretty"
];

var printLyrics = function() {
  var lyricstring = " ";
  for (var i = 0; i < lyrics.length; i++) {
    lyricstring += lyrics[i] + " ";
  }
  console.log(lyricstring);
};

var printLyricsReverse = function() {
  var lyricstring = " ";
  for (var i = lyrics.length - 1; i >= 0; i--) {
    lyricstring += lyrics[i] + " ";
  }
  console.log(lyricstring);
};

var printEveryOther = function() {
  var lyricstring = " ";
  for (var i = 0; i < lyrics.length; i++) {
    if (i % 2 === 0) {
      lyricstring += lyrics[i] + " ";
    }
  }
  console.log(lyricstring);
};

var lyricsSwitched = function() {
  var lyricstring = " ";
  for (var i = 0; i < lyrics.length; i += 2) {
    if (lyrics[i + 1]) {
      lyricstring += lyrics[i + 1] + " ";
    }
    lyricstring += lyrics[i] + " ";
  }
  console.log(lyricstring);
};

lyricsSwitched();
