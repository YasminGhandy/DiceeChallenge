var randomNumber1 = (Math.floor(Math.random() * 6 ) + 1);
if(randomNumber1 > 6){
    randomNumber1 = (Math.floor(Math.random() * 6 ) + 1);
}

var randomImageName = "dice" + randomNumber1 + ".png";

var randomDiceSource1 = "images/"+ randomImageName ;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);


var randomNumber2 = (Math.round(Math.random() * 6 ) + 1);
if(randomNumber2 > 6){
    randomNumber2 = (Math.floor(Math.random() * 6 ) + 1);
}

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);


if (randomNumber1 > randomNumber2){

    document.querySelector("h1").textContent = "🚩 Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}