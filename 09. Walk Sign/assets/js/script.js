function setIcon(){
  var sign = document.getElementById("innerSign").className;
  switch (sign){
    case"fas fa-walking":
      document.getElementById("innerSign").className = "fas fa-hand-paper";
      document.getElementById("outerSign").className = "red";
      document.getElementById("timer").className = "red";
      break;
    case"fas fa-hand-paper":
      document.getElementById("innerSign").className = "fas fa-walking";
      document.getElementById("outerSign").className = "green";
      document.getElementById("timer").className = "green";
      break;
    }
}
function myTimer(){
  var timeLeft=1;
  var countdownTimer = setInterval(function(){
    document.getElementById("timer").innerHTML = 10 - timeLeft;
    timeLeft += 1;
    if(timeLeft >= 11){
      document.getElementById("timer").innerHTML = 10;
      timeLeft = 1;
      setIcon();
    }
  }, 1000);
}