var randomNumber1=Math.floor(Math.random()*6) +1;
var dicename="dice"+randomNumber1+".png";
var imageSource="images/"+dicename;
// var input1=document.querySelectorAll("img")[0]; // this is the query selctor way
var input1=document.getElementsByClassName("img1")[0];// this is the getElementsByClassName function used way
input1.setAttribute("src",imageSource);

var randomNumber2 =Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+randomNumber2+".png";
var input2=document.querySelectorAll("img")[1];
input2.setAttribute("src",imageSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="It's a Tie";
}
