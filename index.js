$(function () {
  count = 0;
  prev1 = 0;
  prev2 = 0;
  // strings to randomly populate the "things I love section"
  wordsArray = [
    "programming",
    "art",
    "board games",
    "card games",
    "cats",
    "the color blue",
    "computers",
    "cyberpunk",
    "design",
    "dogs",
    "fantasy",
    "Holly",
    "music",
    "Pebble and Harry",
    "reading books",
    "role-playing games",
    "science fiction",
    "snowboarding",
    "tabletop games",
    "video games",
  ];
  // repeat every 4000ms
  setInterval(
    function () {
      // replace the old text with the new text over 800ms
      $("#love").fadeOut(400, function () {
        $(this).text(wordsArray[count]).fadeIn(400);
      });
      // keep track of last 2 used string
      prev2 = prev1;
      prev1 = count;
      // find a string that hasn't been used recently
      while (count == prev1 || count == prev2) {
        // need to do (wordsArray.length-1) and then add 1 at the end to prevent out of bounds
        count = Math.round(Math.random() * (wordsArray.length-1)) + 1;
      }
    },
    4000
  );
});