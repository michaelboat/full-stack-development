// button colors
var buttonColors = ["green", "red", "yellow", "blue"];

// function to randomly pick next tile in the sequence
function nextSequence(){
    var randonNumber = Math.floor(Math.random() * 4);
    // pick random colour
    var randColor = buttonColors[randonNumber];
}

var num = nextSequence();
console.log(num);