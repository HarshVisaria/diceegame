

var randomNumber1 = Math.ceil(Math.random()*6) ;

function random1(){
  var randomNumber1 = Math.ceil(Math.random()*6) ;
  return randomNumber1;
}

function random2(){
  var randomNumber2 = Math.ceil(Math.random()*6) ;
  return randomNumber2;
}

var randomNumber1 = random1();
var randomNumber2 = random2()

document.querySelector(".img1").setAttribute("src" , "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src" , "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🏁 Player 1 wins";
}  else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins 🏁";
} else {
  document.querySelector("h1").innerHTML = "🏁  Draw!! 🏁";
}