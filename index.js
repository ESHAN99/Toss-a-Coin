
var randomNumber1 = Math.floor(Math.random() * 2) + 1;  //1-6

var randomDiceImage = "coin" + randomNumber1 + ".png";  //dice1.png - dice6.png 

var randomImageSource = "images/" + randomDiceImage;  //imaqges/dice1.png - images/dice6.png 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);





if (randomNumber1 == 1) {
    document.querySelector("p").innerHTML = "It's Heads!!";
}
else{
    document.querySelector("p").innerHTML = "It's Tails!!";
}

