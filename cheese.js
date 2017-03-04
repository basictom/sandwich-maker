// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // var meatPrices;

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    var cheesePrices = {
      "American": 0.30,
      "Provolone": 0.20,
      "Munster": 0.25
    }
    // return cheesePrices;
    var userCheeseSelect = cheesePrices[cheese];
    console.log("Cheese", userCheeseSelect);
    SandwichMaker.addTopping(userCheeseSelect);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
