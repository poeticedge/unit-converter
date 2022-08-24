
let userInput = document.getElementById ('user-input');
let len = document.getElementById ('length');
let vol = document.getElementById ('volume');
let mass = document.getElementById ('mass');

userInput.addEventListener('user-input', displayResults);


function displayResults() {
  len.textContent = lenConv() 
  vol.textContent = volConv()
  mass.textContent = massConv()
}

//still need to grab users input and add to length/mass/vol function

function lenConv() { //length conversion
  feet = (len * 3.2808398950131).toFixed(3) //meter to feet
  meter = (len * 0.3048).toFixed(3) //feet to meter
  
 len.textContent = len + " meters = " + feet + " feet | " + len + " feet = " + meter + " meters"  //output paragraph for length
}

function volConv() { //volume conversion
   gallon = (vol * 0.2641729).toFixed(3) //liter to gallon
   liter = (vol* 3.7854).toFixed(3) //gallon to litter
   
   vol.textContent = vol + " liters = " + gallon + " gallons | " + vol + " gallons = " + liter + " liters" //output paragraph for volume
}

function massConv() { //mass conversion
   pound = (mass * 2.20462262).toFixed(3) //liter to gallon
   kilo = (mass * 0.45359237).toFixed(3) //gallon to litter
   
   mass.textContent = mass + " kilos = " + pound + " pounds | " + mass + " pounds = " + kilo + " kilos" //output paragraph for mass
}

  /*
    Pass in the array as a rest parameter and
    apply toFixed()-method to each of the numbers
    in the array.
  */
  //function roundNumber(...numbersToRound) {
   // const roundedNumbers = numbersToRound.map((number) => number.toFixed(3));
   // return roundedNumbers;
 // }

//Where did number to convert come from? Is this the correct way to perform these conversions
//Math.round(lengthResult) wouldnt lengthResult be the value we would pass through for rounding?
//    function roundNum() {
//    var d = 3.5;
//    document.getElementById("demo").innerHTML = Math.round(d);
//}
//var numb = 123.23454;
//numb = numb.toFixed(2); seeing a lot of to.Fixed for rounding. Change 2 to 3
//const roundValue = "displayResults"
//(Math.round(displayResults));
