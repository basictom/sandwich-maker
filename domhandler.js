console.log("hello");

var breadSelect = document.getElementById("bread-container");
var meatSelect = document.getElementById("meat-container");
var cheeseSelect = document.getElementById("cheese-container");
var condimentSelect = document.getElementById("condiments-containers");
var veggieSelect = document.getElementById("veggies-contianer");
var output = document.getElementById("sandwich");


var finalSandwichPrice = 0;

meatSelect.addEventListener("change", function(event) {
  var selectedMeat = event.target.value;
  SandwichMaker.addMeat(selectedMeat);
  console.log("selectedMeat");

});
