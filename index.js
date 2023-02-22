// How to accept user input

// Easy way with a window propmt
//let username = window.prompt("What is your name");
//console.log(username);

// difficult way html textbox
let username;
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "hello " + username;
};
