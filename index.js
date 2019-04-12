$(function () {
  count = 0;
  // TODO: add more to this array
  wordsArray = [ "programming", "snowboarding", "video games", "board games"];
  setInterval(
    function () {
      $("#love").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
      count++;
    },
    4000
  );
});