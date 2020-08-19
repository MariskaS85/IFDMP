/*
function store() {
    if (score > localStorage["highScore"]) {
        localStorage["highScore"] = score;
    }
    else ( 
        (score =< localStorage["highScore"]) {
        counter.innerHTML = "You found him " + score + " times" + highScore;
    );
        };

    function highScore() {
        if (typeof (Storage) !== "herm") {
            if (localStorage.highScore) {
                localStorage.highScore = Number(localStorage.highScore) + 1;
            } else {
                localStorage.highScore = 1;
            }
            document.getElementById("result").innerHTML = "You have found Herm " + localStorage.highScore + " time(s).";
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }


$(document).ready(function() {
  if (typeof localStorage["highScore"] !== 'undefined') {
  $("#score").text('Your current high score is' + " " + localStorage["highScore"]);}
  else {
    localStorage["highScore"] = 0;
    $("#score").text('Your current high score is 0');
    store()
  }

  function store() {
    if (counter.score > localStorage["highScore"]) {
      localStorage["highScore"] = counter.score;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
  $("#score").text('Your current high score is' + " " + localStorage["highScore"]);}
  }
}
*/