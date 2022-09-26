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
var divOutput = document.querySelector("#div-result");
function clickEventHandler() {
  divOutput.innerText = "Ssdads "+txtValue.value;
}
btnValue.addEventListener("click", clickEventHandler);
