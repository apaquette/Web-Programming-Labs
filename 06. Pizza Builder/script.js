var basePrice = 0;
var numToppings = 0;
var totalCost = 0;

function updateSize(size){
  basePrice = parseInt(size);
  totalCost = basePrice;
  updateCost();
}
function checkToppings(id){
  if(document.getElementById(id).checked){
    numToppings++;
  }
  else{
    numToppings--;
  }
  updateCost();
}
function updateCost(){
  totalCost = basePrice + ((basePrice/5)*numToppings);
  document.getElementById("cost").value = "$"+totalCost;
}