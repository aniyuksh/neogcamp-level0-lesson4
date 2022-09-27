// Exercise 2
// var value = prompt("please click me");
// alert("entered value "+"` "+ value+" `");

// Exercise 3|4
var btnValue = document.querySelector("#btn-translate");
var txtValue = document.querySelector("#txt-input");

// function clickEventHandler() {
//   console.log("clicked");
//   console.log(txtValue.value);
// }; 
// btnValue.addEventListener("click", clickEventHandler);

// Exercise 5
// var txtValue = document.querySelector("#txt-input");
// var divOutput = document.querySelector("#div-result");
// function clickEventHandler() {
//   divOutput.innerText = "Ssdads "+txtValue.value;
// }
// btnValue.addEventListener("click", clickEventHandler);

// Exercise 6 
// It has been done in Postman
// By posting the URL in the search bar and then added values in the below fields, and then call the get button.

// Exercise 7
var clickButton = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getUrl(text){
  return url + "?" + "text=" + text;
}

function errorHandler(error){
  console.log("OOPS, error occurred.!");
  alert("Please try after some time...!")
}
function callEvent(){
  var inpVal = inputText.value;

  fetch(getUrl(inpVal))
  .then(response => response.json())
 
  .then(json => {
  var res = json.contents.translated;
  outputText.innerText = res})
  .catch(errorHandler)
};

clickButton.addEventListener("click", callEvent);


