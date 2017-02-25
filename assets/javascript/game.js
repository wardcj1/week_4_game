  var winCounter = 0;
  var lossCounter = 0;

 
function startGame(){
  document.getElementById("counter-print").innerHTML = "0";
  var targetNumber = Math.floor((Math.random() * 120) + 19);
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
  var gem = ["assets/images/gem1.jpg", "assets/images/gem2.jpg", "assets/images/gem3.jpg", "assets/images/gem4.jpg"];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", gem[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
  
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
      document.getElementById("counter-print").innerHTML = counter;

    if (counter === targetNumber) {
      winCounter++;
      document.getElementById("win-counter").innerHTML = winCounter;
      $(".crystal-image").hide();
      startGame();
    }

    else if (counter >= targetNumber) {
      lossCounter++;
      document.getElementById("loss-counter").innerHTML = lossCounter;
      $(".crystal-image").hide();
      startGame();
    }

  });
}
startGame();
