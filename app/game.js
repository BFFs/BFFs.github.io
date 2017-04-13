$(document).on("pagecreate","#rockpaperscissors",function(event){
  
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var PYM = document.getElementById('PYM');
var score = 0; 
var compScore = 0; 

scissors.addEventListener('click', function(){
PYM.innerHTML = "You picked Scissors."
});

paper.addEventListener('click', function(){
PYM.innerHTML = "You picked Paper."
});

rock.addEventListener('click', function(){
PYM.innerHTML = "You picked Rock."
});


});