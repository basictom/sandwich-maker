// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // var meatPrices;

  // Augment the original object with another method
  maker.addBread = function(bread) {
    var breadPrices = {
      "Pumpernickle": 1.10,
      "Rye": .90,
      "Sourdough": 2.09,
      "Asiago": 1.87
    }
    // return breadPrices;
    var userBreadSelect = breadPrices[bread];
    console.log("Bread", userBreadSelect);
    SandwichMaker.addTopping(userBreadSelect);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
