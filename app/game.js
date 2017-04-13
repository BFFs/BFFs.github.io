$(document).on("pagecreate","#rockpaperscissors",function(event){
  
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var PYM = document.getElementById('PYM');

function playscissors() {
  PYM.innerHTML = "you played scissors";
}

function playpaper() {
   PYM.innerHTML = "you played paper";
}

function playrock() {
  PYM.innerHTML = "you played rock";
}


});