function timer(){
  var timeLeft=0;
  var countdownTimer = setInterval(function(){
    timeLeft++;
    var upDown = document.getElementsByClassName("upDown");
    var leftRight = document.getElementsByClassName("leftRight");
    switch(timeLeft){
      case 5:
        for(var i=0; i<2; i++){
          upDown[i].src = "light-yellow.png";
        }
        break;
      case 10:
        for(var i=0; i<2; i++){
          upDown[i].src = "light-red.png";
          leftRight[i].src = "light-adv.png";
        }
        break;
      case 15:
        for(var i=0; i<2; i++){
          leftRight[i].src = "light-green.png";
        }
        break;
      case 20:
        for(var i=0; i<2; i++){
          leftRight[i].src = "light-yellow.png";
        }
        break;
      case 25:
        for(var i=0; i<2; i++){
          upDown[i].src = "light-adv.png";
          leftRight[i].src = "light-red.png";
        }
        break;
      case 30:
        for(var i=0; i<2; i++){
          upDown[i].src = "light-green.png";
        }
        timeLeft = 0;
        break;
      default://do nothing
        break;
      }
  }, 1000);
}