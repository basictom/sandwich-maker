// console.log("hello");

var breadSelect = document.getElementById("bread-container");
var meatSelect = document.getElementById("meat-container");
var cheeseSelect = document.getElementById("cheese-container");
var condimentSelect = document.getElementById("condiments-containers");
var veggieSelect = document.getElementById("veggies-container");
var output = document.getElementById("sandwich");


var finalSandwichPrice = 0;
// Bread selector
breadSelect.addEventListener("change", function(event) {
  var selectedBread = event.target.value;
  SandwichMaker.addBread(selectedBread);
});
//Meat selector
meatSelect.addEventListener("change", function(event) {
  var selectedMeat = event.target.value;
  SandwichMaker.addMeat(selectedMeat);
});
// cheeseSelect.addEventListener("change", function(event) {
//   var selectedCheese = event.target.value;
//   SandwichMaker.addCheese(selectedCheese);
// });
veggieSelect.addEventListener("change", function(event) {
  var userSelectVeggie = event.target.value;
  SandwichMaker.addVeggie(userSelectVeggie);
});
