var prizePool = 10;
      var debugMode = false;

      //initialize game on load
      function initialize(){
        document.getElementById("prizePool").innerHTML = ("Balance: " + prizePool);
        document.getElementById("debug").style.display = "none";
        document.getElementById("resultsTable").style.display = "none";
        document.getElementById("statsButton").style.display = "none";
        prizePool = 10;
        debugMode = false;
      }

      //toggles debug mode
      function toggleDebug(){
        if(!debugMode){
          document.getElementById("debug").style.display = "flex";
          document.getElementById("resultsTable").style.display = "flex";
          document.getElementById("statsButton").style.display = "flex";
          debugMode = true;
        }else{
          debugMode = false;
          console.clear();
          document.getElementById("debug").style.display = "none";
          document.getElementById("resultsTable").style.display = "none";
          document.getElementById("statsButton").style.display = "none";
        }
      }

      //generates stats for x number of card hands
      function generateStats(numGames){
        var royalFlushCount = 0;
        var straightFlushCount = 0;
        var fourOfAKindCount = 0;
        var fullHouseCount =  0;
        var flushCount = 0;
        var straightCount = 0;
        var threeOfAKindCount = 0;
        var twoPairsCount = 0;
        var jacksOrBetterCount = 0;
        var singlesCount = 0;
        var flashCount = 0;
        var none = 0;

        for(var i = 0; i < numGames; i++){
          var cards = drawCards(5);
          cards.sort(function(a, b){return a.values-b.values});//sort cards by value

          if(royalFlush(cards)){
            royalFlushCount++;
          }else if(straightFlush(cards)){
            straightFlushCount++;
          }else if(ofAKind(cards, 4)){
            fourOfAKindCount++;
          }else if(fullHouse(cards)){
            fullHouseCount++;
          }else if(flush(cards)){
            flushCount++;
          }else if(straight(cards)){
            straightCount++;
          }else if(ofAKind(cards, 3)){
            threeOfAKindCount++;
          }else if(twoPairs(cards)){
            twoPairsCount++;
          }else if(flash(cards)){
            flashCount++;
          }else if(jacksOrBetter(cards)){
            jacksOrBetterCount++;
          }else{
            singlesCount++;
          }
        }
        console.clear();//console display
        console.log("Royal Flush: " + royalFlushCount);
        console.log("Straight Flush: " + straightFlushCount);
        console.log("Four of a Kind: " + fourOfAKindCount);
        console.log("Full House: " + fullHouseCount);
        console.log("Flush: " + flushCount);
        console.log("Straight: " + straightCount);
        console.log("Three of a Kind: " + threeOfAKindCount);
        console.log("Two Pairs: " + twoPairsCount);
        console.log("Flash: " + flashCount);
        console.log("Jacks or Better: " + jacksOrBetterCount);
        console.log("Singles: " + singlesCount);
        //console.log("None: " + none);

        //raw count
        document.getElementById("royalFlushCount").innerHTML = royalFlushCount;
        document.getElementById("straightFlushCount").innerHTML = straightFlushCount;
        document.getElementById("fourOfAKindCount").innerHTML = fourOfAKindCount;
        document.getElementById("fullHouseCount").innerHTML = fullHouseCount;
        document.getElementById("flushCount").innerHTML = flushCount;
        document.getElementById("straightCount").innerHTML = straightCount;
        document.getElementById("threeOfAKindCount").innerHTML = threeOfAKindCount;
        document.getElementById("twoPairsCount").innerHTML = twoPairsCount;
        document.getElementById("flashCount").innerHTML = flashCount;
        document.getElementById("jacksOrBetterCount").innerHTML = jacksOrBetterCount;
        document.getElementById("singlesCount").innerHTML = singlesCount;
        document.getElementById("totalCount").innerHTML = numGames;

        //percentage
        document.getElementById("royalFlushPercent").innerHTML = (royalFlushCount/numGames*100).toFixed(5)+"%";
        document.getElementById("straightFlushPercent").innerHTML = ((straightFlushCount/numGames*100).toFixed(5)+"%");
        document.getElementById("fourOfAKindPercent").innerHTML = ((fourOfAKindCount/numGames*100).toFixed(5)+"%");
        document.getElementById("fullHousePercent").innerHTML = ((fullHouseCount/numGames*100).toFixed(5)+"%");
        document.getElementById("flushPercent").innerHTML = ((flushCount/numGames*100).toFixed(5)+"%");
        document.getElementById("straightPercent").innerHTML = ((straightCount/numGames*100).toFixed(5)+"%");
        document.getElementById("threeOfAKindPercent").innerHTML = ((threeOfAKindCount/numGames*100).toFixed(5)+"%");
        document.getElementById("twoPairsPercent").innerHTML = ((twoPairsCount/numGames*100).toFixed(5)+"%");
        document.getElementById("flashPercent").innerHTML = ((flashCount/numGames*100).toFixed(5)+"%");
        document.getElementById("jacksOrBetterPercent").innerHTML = ((jacksOrBetterCount/numGames*100).toFixed(5)+"%");
        document.getElementById("singlesPercent").innerHTML = ((singlesCount/numGames*100).toFixed(5)+"%");
        document.getElementById("totalPercent").innerHTML = ((numGames/numGames*100)+"%");
      }

      //generates a number of cards from 1-52 where each number corresponds to a unique card in a standard deck
      function drawCards(numCards){
        var rawCards = [];
        var sortedCards = [];
        var i = 0;

        do{//make sure there are no duplicate Cards
          var num = Math.floor(Math.random() * 51)+1;
          if(!(rawCards.includes(num))){
            rawCards.push(num);
            i++;
          }
        }while(i < numCards);

        //get the value and suits from the raw card values
        for(var num = 0; num < numCards; num++){
          sortedCards.push({'values': (rawCards[num]%13), 'suits': (Math.floor((rawCards[num]-1)/13))});
          if(sortedCards[num].values == 0){//assign 13 to Kind for sorting purposes
            sortedCards[num].values = 13;
          }
        }
        return sortedCards;
      }

      //called when draw cards button is clicked
      function play(){
        var cards = drawCards(5);
        playPoker(cards);
        if (prizePool == 0){
          document.getElementById("playButton").style.display = "none";
        }
      }

      //hard code winning hand based on button clicked
      //used for debugging
      function debug(winHand){
        var cards = [];

        switch(winHand){
          case "Royal Flush":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 11, "suits": 0},
              {"values": 12, "suits": 0},
              {"values": 13, "suits": 0},
              {"values": 1, "suits": 0}
            ];
            break;
          case "Straight Flush":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 11, "suits": 0},
              {"values": 12, "suits": 0},
              {"values": 13, "suits": 0},
              {"values": 9, "suits": 0}
            ];
            break;
          case "Four of a Kind":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 10, "suits": 1},
              {"values": 10, "suits": 2},
              {"values": 10, "suits": 0},
              {"values": 1, "suits": 0}
            ];
            break;
          case "Full House":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 10, "suits": 1},
              {"values": 10, "suits": 0},
              {"values": 13, "suits": 2},
              {"values": 13, "suits": 0}
            ];
            break;
          case "Flush":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 11, "suits": 0},
              {"values": 12, "suits": 0},
              {"values": 9, "suits": 0},
              {"values": 1, "suits": 0}
            ];
            break;
          case "Straight":
            cards = [
              {"values": 5, "suits": 0},
              {"values": 6, "suits": 1},
              {"values": 7, "suits": 3},
              {"values": 8, "suits": 0},
              {"values": 9, "suits": 2}
            ];
            break;
          case "Three of a Kind":
            cards = [
              {"values": 11, "suits": 1},
              {"values": 11, "suits": 0},
              {"values": 11, "suits": 3},
              {"values": 13, "suits": 0},
              {"values": 1, "suits": 1}
            ];
            break;
          case "Two Pairs":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 10, "suits": 0},
              {"values": 1, "suits": 1},
              {"values": 13, "suits": 0},
              {"values": 1, "suits": 0}
            ];
            break;
          case "Jacks or Better":
            cards = [
              {"values": 10, "suits": 3},
              {"values": 1, "suits": 0},
              {"values": 1, "suits": 1},
              {"values": 13, "suits": 0},
              {"values": 2, "suits": 0}
            ];
            break;
          case "Flash":
            cards = [
              {"values": 10, "suits": 0},
              {"values": 11, "suits": 0},
              {"values": 12, "suits": 1},
              {"values": 9, "suits": 1},
              {"values": 1, "suits": 1}
            ];
        }
        playPoker(cards);
      }

      //outputs win conditions to the console
      function consoleDebug(cardHand){
        console.clear();
        console.log("Royal Flush: " + royalFlush(cardHand));
        console.log("Straight Flush: " + straightFlush(cardHand));
        console.log("Four of a Kind: " + ofAKind(cardHand, 4));
        console.log("Full House: " + fullHouse(cardHand));
        console.log("Flush: " + flush(cardHand));
        console.log("Straight: " + straight(cardHand));
        console.log("Three of a Kind: " + ofAKind(cardHand, 3));
        console.log("Two Pairs: " + twoPairs(cardHand));
        console.log("Flash: " + flash(cardHand));
        console.log("Jacks or Better: " + jacksOrBetter(cardHand));
      }

      //play poker with a hand of cards
      function playPoker(cardHand){
        var cards = cardHand;
        prizePool--;
        cards.sort(function(a, b){return a.values-b.values});//sort cards by value
        document.getElementById("winMessage").innerHTML = winCondition(cards);
        document.getElementById("prizePool").innerHTML = ("Balance: " + prizePool);
        displayCardsTo("cards_div", cards);
      }

      /*CHECK WIN CONDITIONS FUNCTION*/
      function winCondition(cardHand){
        if(debugMode){consoleDebug(cardHand);}
        if(royalFlush(cardHand)){
          prizePool += 800;
          return("Royal Flush, you win 800!");
        }else if(straightFlush(cardHand)){
          prizePool += 50;
          return("Straight Flush, you win 50!");
        }else if(ofAKind(cardHand, 4)){
          prizePool += 25;
          return("Four of a Kind, you win 25!");
        }else if(fullHouse(cardHand)){
          prizePool += 9;
          return("Full House, you win 9!");
        }else if(flush(cardHand)){
          prizePool += 6;
          return("Flush, you win 6!");
        }else if(straight(cardHand)){
          prizePool += 4;
          return("Straight, you win 4!");
        }else if(ofAKind(cardHand, 3)){
          prizePool += 3;
          return("Three of a Kind, you win 3!");
        }else if(twoPairs(cardHand)){
          prizePool += 2;
          return("Two Pairs, you win 2!");//returned true 4.99% of the time by itself
        }else if(flash(cardHand)){
          //prizePool++;
          return("Flash");//returned true 5% of the time by itself
        }else if(jacksOrBetter(cardHand)){
          prizePool++;
          return("Jacks or Better, you win 1!");//returned true 14.7% of the time by itself
        }else{
          return "Singles";
        }
      }

      //check for royal flush (straight starting from 10 + flush)
      function royalFlush(cardHand){
        return (flush(cardHand) && straight(cardHand) && cardHand[0].values == 1 && cardHand[1].values == 10);
      }

      //check for straight flush (straight + flush)
      function straightFlush(cardHand){
        return (straight(cardHand) && flush(cardHand));
      }

      //check for full house (three of a kind plus a pair)
      function fullHouse(cardHand){
          return (ofAKind(cardHand, 3) && ofAKind(cardHand, 2));
      }

      //check for flush (five of the same suit)
      function flush(cardHand){
        return (checkDuplicates(getCardsSuits(cardHand)).includes(cardHand.length));
      }

      //check for cards in a sequence
      function straight(cardHand){
        var values = getCardsValues(cardHand);
        var x = 0;
        if(values[0] == 1 && values[1] == 10){//check for "royal" straight
          x++;
        }
        while(x < (values.length - 1)){
          if(values[x+1]-values[x] != 1){
            return false;
          }
          x++
        }
        return true;
      }

      //check for two pairs
      function twoPairs(cardHand){
        return (checkDuplicates(checkDuplicates(getCardsValues(cardHand))).indexOf(2) == 2);
      }

      //function will check for x of a kind. used for pair, three of a kind, and four of a kind
      function ofAKind(cardHand, num){
        return (checkDuplicates(getCardsValues(cardHand)).includes(num));
      }

      //checks if there a duplicates, and if those duplicates are jacks or better (10 or higher, or 1 for aces)
      function jacksOrBetter(cardHand){
        return (checkDuplicates(getCardsValues(cardHand)).indexOf(2) > 10 || (checkDuplicates(getCardsValues(cardHand)).indexOf(2) == 1));
        //return (ofAKind(cardHand,2));//single pair mode - used for testing whether odds were within expected ranges
      }

      //checks if suits are all the same
      function flash(cardHand){
        var cardHandSuits = checkDuplicates(getCardsSuits(cardHand));
        return(((cardHandSuits['0'] + cardHandSuits['1']) == cardHand.length) || ((cardHandSuits['2'] + cardHandSuits['3']) == cardHand.length));
      }

      //count duplicates in an array
      function checkDuplicates(array){
        const counts = [];
        array.forEach(function(x) {counts[x] = (counts[x] || 0)+1;});
        return counts;
      }

      //returns an array of the hand's values
      function getCardsValues(cardHand){
        var values = [];
        for (var i = 0; i < cardHand.length; i++){
          values[i] = cardHand[i].values;
        }
        return values;
      }

      //returns an array of the hand's suits
      function getCardsSuits(cardHand){
        var suits = [];
        for (var i = 0; i < cardHand.length; i++){
          suits[i] = cardHand[i].suits;
        }
        return suits;
      }

      //displays the user's card hand
      function displayCardsTo(elemID, cardHand){
        var elem = "";
        for(var num = 0; num < cardHand.length; num++){
          cardHand[num].values = getCardValue(cardHand[num].values);
          cardHand[num].suits = getCardSuit(cardHand[num].suits);
          elem += '<img src="assets/cards/' + (cardHand[num].values) + (cardHand[num].suits) + '.svg"/>';
        }
        document.getElementById(elemID).innerHTML = elem;
      }

      //returns the value of a card, used for displaying cards
      function getCardValue(val){
        switch(val){
          case 1:
            return "A";
            break;
          case 11:
            return "J";
            break;
          case 12:
            return "Q";
            break;
          case 13:
            return "K";
            break;
          default:
            return (val);
            break;
        }
      }

      //returns the suit of a card, used for displaying cards
      function getCardSuit(suit){
        switch(suit){
          case 0:
            return "S";
            break;
          case 1:
            return "C";
            break;
          case 2:
            return "H";
            break;
          case 3:
            return "D";
            break;
          }
      }