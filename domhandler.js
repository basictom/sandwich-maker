var breadSelect = document.getElementById("bread-container");
var meatSelect = document.getElementById("meat-container");
var cheeseSelect = document.getElementById("cheese-container");
var condimentSelect = document.getElementById("condiments-containers");
var veggieSelect = document.getElementById("veggies-contianer");
var output = document.getElementById("sandwich");

// Variable to hold the final price. Default to 0.

var finalSandwichPrice = 0;


// Variable to hold topping that the user selects
var selectedTopping = document.getElementById("");

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-container");

// meatChooser.addEventListener("change", function(event){
//   var userMeat = event.target.value;
//   SandwichMaker.addMeat(userMeat);
//   console.log(userMeat);
// });

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var userMeat = event.target.value;
  // selectedTopping = event.target.value;
  SandwichMaker.addMeat(userMeat);
  console.log(userMeat);

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});
