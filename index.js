let inputElements = document.getElementsByClassName("input-value");
let feetValue = document.querySelector("#feet-value");
let meterValue = document.querySelector("#meter-value");
let userInputValue = document.querySelector("#input-el");

function convertNow() {
  let value = userInputValue.value;
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].textContent = value;
  }
}

const convertButton = document.querySelector("#convert-btn");
convertButton.addEventListener("click", convertNow);
