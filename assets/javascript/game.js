//Start of JS

var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function() {
  $(".crystals").empty();

  var images = [
    //crystal images go here.
  ];
};

randomResult = Math.floor(Math.random() * 69) + 30;

$("#results").html("Random Result:" + randomResult);
// 
for (var i = 0; i < 4; i++) {
  var random = Math.floor(Math.random() * 11) + 1;

  //
  var crystal = $(".crystal" + i);
  crystal.attr({
    "data-random": random
  });
}

previous = 0;
$("#previous").html("Total Score:" + previous);

//Activating event on crystal and adding attr
$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));


  previous += num;

  $("#previous").html(previous);

  console.log(previous);

  if (previous > randomResult) {
    lost++;

    $("#lost").html("You Lost");

    resetAndStart();
  } else if (previous === randomResult) {
    win++;

    $("#win").html("You Win!");



    resetAndStart();
  }
});




  


 
    



