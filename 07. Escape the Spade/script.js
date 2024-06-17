var winMessage;

function play(){
  winMessage = "You win $"
  var cards = document.getElementsByClassName("card");
  for(var x = 0; x < cards.length; x++){
    var ranNum = Math.floor((Math.random() * 4) + 1);
    cards[x].src = "suit-" + ranNum + ".png";
    if(ranNum == 4){
      winMessage = "You lose!";
    }
  }
  if(winMessage == "You win $"){
    checkPrize(cards);
  }
  document.getElementById("winCondition").value = winMessage;
}

//if three of a kind, you win - prize 4 (easiest)
//if cards are the same color, you win - prize 3 (easy)
//if all cards are the same suite, you win - prize 2 (hard)
//if cards are alternating a suite, you win - prize 1 (hardest?)
function checkPrize(cards){
  var clubs = 0;
  var diamonds = 0;
  var hearts = 0;

  for(var i = 0; i < 4; i++){
    if (cards[i].src.match("suit-1.png")){
      clubs++;
    }if (cards[i].src.match("suit-2.png")){
      diamonds++;
    }if (cards[i].src.match("suit-3.png")){
      hearts++;
    }
  }

  if(clubs == 4 || diamonds == 4 || hearts == 4){//same suit
    winMessage += "10,000";
  }else if ((cards[0].src == cards[2].src) && (cards[1].src == cards[3].src)){//alternating suits
    winMessage += "1,000";
  }else if((diamonds + hearts) == 4){//same color, clubs are omitted since all clubs would trigger same suit win condition
    winMessage += "100";
  }else if(clubs == 3 || diamonds == 3 || hearts == 3){//three of a kind
    winMessage += " 10";
  }else{//basic win condition
    winMessage += "1";
  }
  winMessage += "!";
}