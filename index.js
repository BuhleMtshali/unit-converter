let inputElements = document.getElementsByClassName("input-value"); //this picks up all the elements with the same class
let feetValue = document.querySelector("#feet-value");
let meterValue = document.querySelector("#meter-value");
let userInputValue = document.querySelector("#input-el");
let gallonLiter = document.querySelector("#gallon-liter-value");
let literValue = document.querySelector("#liter-value");

function convertNow() {
  let value = userInputValue.value;
  for (let i = 0; i < inputElements.length; i++) {
    //we used a loop here because we were rendering more than one change
    inputElements[i].textContent = value;
  }
  let feetToMeter = parseFloat(value * 3.281);
  feetValue.textContent = feetToMeter.toFixed(2);
  let meterToFeet = parseFloat(value / 3.281);
  meterValue.textContent = meterToFeet.toFixed(2);
  //end of the meter to feet
  let gallonValue = parseFloat(value / 3.785);
  gallonLiter.textContent = gallonValue.toFixed(2);
  let liters = parseFloat(value * 3.785);
  literValue.textContent = liters.toFixed(2);
  //end of liters and gallons
}

const convertButton = document.querySelector("#convert-btn");
convertButton.addEventListener("click", convertNow);
