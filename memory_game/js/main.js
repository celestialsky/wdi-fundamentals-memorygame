console.log("UP and running!");

//console.log("user flipped"+ " " + cardThree + " and " + cardTwo);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne, cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
    alert("Sorry, try again");
  }
}

console.log("user flipped " + cardsInPlay[0]);
console.log("user flipped " + cardsInPlay[1]);
