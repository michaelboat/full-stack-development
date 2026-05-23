
function handleClick(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
//var ln = 

function handlePress(e){

    
    
}
var drums = document.querySelectorAll(".drum")

for (var i = 0; i < 7; i++){
    drums[i].addEventListener("click", handleClick);
}


