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
    // play sound for chosen tile
    var sound = new Audio('sounds/'+randColor+'.mp3');
    sound.play();
}

// function to play sound when clicked
function playSound(name){
    // play sound for chosen tile
    var sound = new Audio('sounds/'+name+'.mp3');
    sound.play()
}

// function to animate Press
function animatePress(currentColor){ 

    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed")
    }, 100);

}

$('.btn').on("click", function() {
    animatePress($(this).attr("id"));
    playSound($(this).attr("id"));
}
)

$('.btn').on('click', function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
})

nextSequence()

