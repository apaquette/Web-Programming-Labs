//global vars to track if a win message is displayed
var cornerWinTrigger = false;
var centerSquaresTrigger = false;

function changeColor(id){//change color on click and call check win condition
  document.getElementById(id).className = "red";
  checkWinCondition();
}
function checkWinCondition(){
  //win condition arrays
  const cornerWin = ["1","61","5","65"];
  const centerSquares = ["17", "32", "47", "18", "48", "19", "33", "49"]
  //check win counters
  var checkCornerWin = 0;
  var checkCenterSquares = 0;

  for(var i=0; i<cornerWin.length; i++){//check corner win
    if (document.getElementById(cornerWin[i]).className == "red"){
      checkCornerWin++;
    }
  }
  for(var i=0; i<centerSquares.length; i++){//check center squares win
    if(document.getElementById(centerSquares[i]).className == "red"){
      checkCenterSquares++;
    }
  }
  //if win condition is met and message wasn't already triggered, display win message and set trigger to true
  if(checkCornerWin == 4 && cornerWinTrigger == false){
    document.getElementById("message").innerHTML += "You stamped all four corners! You win!<br/>";
    cornerWinTrigger = true;
  }
  if(checkCenterSquares == 8 && centerSquaresTrigger == false){
    document.getElementById("message").innerHTML += "You stamped all center squares! You win!<br/>";
    centerSquaresTrigger = true;
  }
}