//first log
//console.log("Up and running!");

//first javascript unit project
//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

//log 8
//window.alert('Hello, friends.');
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
//cardsInPlay.push('cardOne');

var cardOne = ["queen"];
var cardTwo = ["king"];

//var cards = ["queen", "queen", "king", "king"];
var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
       rank: "queen",
       suit: "diamonds",
       cardImage: "images/queen-of-diamonds.png",
   },
   {
       rank: "king",
       suit: "hearts",
       cardImage: "images/king-of-hearts.png",
   },
   {
       rank: "king",
       suit: "diamonds",
       cardImage: "images/king-of-diamonds.png",
   },
];

var CardsInPlay = [];


function checkForMatch()	{

	if (CardsInPlay.length===2 && CardsInPlay[0] === CardsInPlay[1]){
		  alert("You found a match!");
	}	else	{	
		// alert("Sorry, try again.");
	}
}

function flipCard()	{
  var cardId = this.getAttribute("data-id");
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  CardsInPlay.push(cards[cardId].rank);
  console.log(CardsInPlay);
  checkForMatch();
}

function createBoard() {
   for (var i = 0; i < cards.length; i++) {
    // console.log(cards[i].cardImage);
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    document.getElementById("game-board").appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);

  }
}

createBoard();







