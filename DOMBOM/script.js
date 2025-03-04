// document.getElementById("click").addEventListener("click", function () {
//   let paragraph = document.getElementById('para');
//   console.log(paragraph);
//   alert(paragraph.innerHTML);
// });
// location.href = "https://www.google.com/";

// var btn = document.getElementById("click");
// var para = document.getElementById("para");
// btn.addEventListener("click", function () {
//   para.innerHTML = "text changed";
//   btn.innerHTML = "";
// });
var para = document.getElementById("para");
var enter = document.getElementById("enter");
function showalert() {
  var input = document.getElementById("enter").value;
  para.innerHTML = `${input}`;
}
