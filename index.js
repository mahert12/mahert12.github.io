$(function () {
  count = 0;
  prev1 = 0;
  prev2 = 0;
  wordsArray = [
    "art",
    "board games",
    "cats",
    "computers",
    "design",
    "dogs",
    "music",
    "programming",
    "reading books",
    "snowboarding",
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
      console.log("count: " + count + " prev1: " + prev1 + " prev2: " + prev2)
    },
    4000
  );
});