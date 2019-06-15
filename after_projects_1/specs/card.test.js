const card = require('../card.js');
const cardGame = require('../card_game.js');

describe('card game', () => {

let aceOfSpades
let queenOfHearts

beforeEach(() => {

  cards = [
    {
      name: aceOfSpades,
      suit: "Spade",
      value: 1
    },

    {
      name: queenOfHearts,
      suit: "Heart",
      value: 12
    }
  ]
});

test('checks to see if the card is an ace', () => {
  expect(cardGame.checkForAce(aceOfSpades)).toBe(true)
});


test('check to see which is the highest card', () => {
  expect(cardGame.highestCard(aceOfSpades, queenOfHearts)).toBe("queenOfHearts")
});

test('calculate total of the cards', () => {
  expect(cardGame.cardsTotal(cards)).toBe("You have a total of 13")
});

});
