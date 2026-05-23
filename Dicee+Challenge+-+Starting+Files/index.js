function generateRandom(){
    var randNum = (Math.random() * 6) + 1;
    return Math.floor(randNum);
}
var rand1 = generateRandom();
var rand2 = generateRandom();


document.querySelector(".img1").setAttribute("src", "images/dice" + rand1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + rand2 + ".png");

if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (rand2 > rand1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
