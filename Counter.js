//note that we replaced .innertext with .textContent(it's more efficient)
CountEl = document.getElementById("jaqua");
 var Count = 0;
function move() {
  Count=Count+1;
  CountEl.textContent = Count;
}
console.log(move());

// let welcomeEL = document.getElementById("welcome"); //to display greeting
// let greeting = "Hi my name is Loju";
// greeting = greeting + "!";
// welcomeEL.textContent = greeting;

savepoint = document.getElementById("saveEl"); //to display previous entries
function save() {
  let Countstring = Count + "-";
  savepoint.textContent += Countstring;
}
save();

resetpoint = document.getElementById("jaqua"); //connecting reset button to h2
function reset() {
  let startpoint = 0;
  resetpoint.textContent = startpoint;
 Count = 0;
}
reset();
