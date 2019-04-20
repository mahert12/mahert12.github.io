$(function () {
  count = 0;
  prev1 = 0;
  prev2 = 0;
  // strings to randomly populate the "things I love section"
  // programming should be first so that it is not repeated immedeatly on page load
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
        // floor prevents out of bounds better than my previous solution
        count = Math.floor(Math.random() * wordsArray.length);
      }
    },
    4000
  );
});