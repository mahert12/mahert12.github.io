$(function () {
  count = 0;
  prev1 = 0;
  prev2 = 0;
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
  setInterval(
    function () {
      $("#love").fadeOut(400, function () {
        $(this).text(wordsArray[count]).fadeIn(400);
      });
      prev2 = prev1;
      prev1 = count;
      while (count == prev1 || count == prev2) {
        count = Math.round(Math.random() * wordsArray.length);
      }
    },
    4000
  );
});