// button colors
var buttonColors = ["green", "red", "yellow", "blue"];
// game pattern/sequence
var gamePattern = [];
// user clicked patter
var userClickedPattern = [];

// function to randomly pick next tile in the sequence
function nextSequence(){
    var randonNumber = Math.floor(Math.random() * 4);
    // pick random colour
    var randColor = buttonColors[randonNumber];
    gamePattern.push(randColor);

    // flash next chosen sequence
    $('#'+randColor).fadeOut(200).fadeIn(200);
}


$('.btn').on('click', function () {
    var userChosenColour = $(this).attr("id");
})
console.log(userChosenColour);

var num = nextSequence();
console.log(num);

