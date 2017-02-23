// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // var meatPrices;

  // Augment the original object with another method
  maker.addCondiments = function(condiments) {
    var condimentsPrices = {
      Lettuce: 0.30,
      Tomato: 0.20,
      Onion: 0.25,
      Pickles: 0.75
    }
    return condimentsPrices;
    var userCondimentSelect = options[condiment];
    console.log("Bread", userCondimentSelect);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
