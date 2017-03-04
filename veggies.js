// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // var meatPrices;

  // Augment the original object with another method
  maker.addVeggie = function(veggies) {
    var veggiePrices = {
      "Lettuce": 0.30,
      "Tomato": 0.20,
      "Onion": 0.25,
      "Pickles": 0.75
    }
    // return veggiePrices;
    var userVeggieSelect = veggiePrices[veggies];
    console.log("veggies", userVeggieSelect);
    SandwichMaker.addTopping(userVeggieSelect);
  };


  // var userMeatSelect = meatPrices[meats];
  // SandwichMaker.addTopping(userMeatSelect);

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
