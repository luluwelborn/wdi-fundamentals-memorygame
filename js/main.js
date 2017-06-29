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


var checkForMatch = function()	{
	if (cards[0] === cards[1]){
		alert("You found a match!");
	}	else	{	
		alert("Sorry, try again.");
	}
}

function flipCard(cardId)	{
	console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  CardsInPlay.push(cards[cardId].rank);
  console.log(CardsInPlay);
}



flipCard(0) //passing 0 as argument
flipCard(2) //passing 2 as argument

checkForMatch();






