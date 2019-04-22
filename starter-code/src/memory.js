  function MemoryGame(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  MemoryGame.prototype.shuffleCards = function(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
  }

  // checkIfPair(card1, card2) {}
  MemoryGame.prototype.checkIfPair = function(cardName1, cardName2) {
    if (cardName1 === cardName2) {
      return true;
      } else {
      return false;
      }
  }

  MemoryGame.prototype.isFinished = function() {
    if (this.pairsGuessed < 12) {
      return false;
    } else {
      console.log("GAME OVER!");
      return true;
    }
  }