var getRandomNumber = Math.floor( Math.random()*6)+1
var getImage = "dice" + getRandomNumber + ".png"
var imgSrc = "images/" + getImage 
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", imgSrc)

var getRandomNumber2 = Math.floor( Math.random()*6)+1
var getImage2 = "dice" + getRandomNumber2 + ".png"
var imgSrc2 = "images/" + getImage2
var image1 = document.querySelectorAll("img")[1]
image1.setAttribute("src", imgSrc2)

if(getRandomNumber > getRandomNumber2){
    document.querySelector("h1").innerText="Player1 won"
} else if(getRandomNumber2 > getRandomNumber){
    document.querySelector("h1").innerText="Player 2 won"
}else{
    document.querySelector("h1").innerText= "draw"
}