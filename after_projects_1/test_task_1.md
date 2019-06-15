// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.

var card = require('./card');

//'card' should be capitalised as it's a class
//The filepath should include the file type so it should be './card.js'
//card is declared globally here as it's not within a function - this should be a constant

class CardGame{

  checkforAce(card){
    if(card = 1){
      return true;
    }else{
      return false;
    }
  }

  //The function name should be camel case i.e. checkForAce
  //It should be '=== 1' in an if statement

  highestCard(card1 card2){
    if(card1.value > card2.value){
      return card.name
    }
    else{
      card2
    }
   }
  }

  //There should be a comma between card1 and card2
  //card.name is not defined anywhere and it doesn't say which card1
  //There should be a return in front of card 2
  //The final '}' closes the class - this should be after all functions

  static.cardsTotal(cards){
    return total;
    for(let card of cards){
      total += card.value;
      return "You have a total of " + total;
    }
  }
}

//total is not defined
//return must be outside of the {} brackets
