// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(meatsMaker) {

  // Private variable to store the different meat prices
  // var meatPrices;

  // Augment the original object with another method
  maker.addMeat = function(meats) {
    var meatPrices = {
      Turkey: 1.90,
      Bacon: 1.85,
      Chicken: 1.25,
      Ham: 1.35
    }
    return meatPrices
    var userMeatSelect = options[meats];
    console.log("Meats", userMeatSelect);
  };

  // Return the new, augmented object with the new method on it
  return meatsMaker;
})(SandwichMaker);