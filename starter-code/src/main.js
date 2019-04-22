var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function() { 
  memoryGame.shuffleCards(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      var cardContainer = card.parentElement;
      var cardBack = card;
      var cardFront = cardContainer.lastChild;

      memoryGame.pickedCards.push(card);
      flipCard(cardBack, cardFront);
      
      // if there is a pair:
      if (memoryGame.pickedCards.length % 2 === 0) {
        memoryGame.pairsClicked += 1;
        document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked;
        // check if pair is guessed
        memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('name'), memoryGame.pickedCards[1].getAttribute('name'));
        // flip the cards back if not guessed; else add a number to "Pairs Guessed" if guessed
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('name'), memoryGame.pickedCards[1].getAttribute('name')) === false) {
          setTimeout(flipCardsBack, 400);
        } else {
          memoryGame.pairsGuessed += 1;
          document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
        }
        // clear array of two cards to make space for the next pair
        setTimeout(clearCurrentPair, 400);
        memoryGame.isFinished();
      }
    };
  });
});

function flipCard(cardHasBack, cardHasFront) {
  if (cardHasBack.classList.contains('back')) {
    cardHasBack.classList.replace('back', 'front');
  }
  if (cardHasFront.classList.contains('front')) {
    cardHasFront.classList.replace('front', 'back');
  }
}

  function flipCardsBack() {
      memoryGame.pickedCards[0].classList.replace('front', 'back');
      memoryGame.pickedCards[0].parentElement.lastChild.classList.replace('back', 'front');
      memoryGame.pickedCards[1].classList.replace('front', 'back');
      memoryGame.pickedCards[1].parentElement.lastChild.classList.replace('back', 'front');
  } 

    //   // clear array of cards to push other cards when clicked
  function clearCurrentPair() {
    memoryGame.pickedCards = [];
  } 
