const Card = require('./card.js');

CardGame = {

  checkForAce(card){
    if(card = 1){
      return true;
    }else{
      return false;
    }
  },

  highestCard(card1, card2){
    if(card1.value > card2.value){
      return card1.name
    }
    else{
      return card2.name
    }
  },


  cardsTotal(cards){
    let total = 0;
    for(let card of cards){
      total += card.value;

    }
    return "You have a total of " + total;
  }
}

module.exports = CardGame;
