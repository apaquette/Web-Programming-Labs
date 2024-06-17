var randomNumber = Math.floor(Math.random()*10)+1;

function check(){
var guess = document.getElementById("guess").value;
if(guess < randomNumber){
    document.getElementById("message").innerHTML = "Guess is too low!";
}else if(guess > randomNumber){
    document.getElementById("message").innerHTML = "Guess is too high!";
}else if(guess == randomNumber){
    document.getElementById("message").innerHTML = "You guessed correctly!";
}
}