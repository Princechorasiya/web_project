var css = document.querySelector("h3");

var color1 = document.getElementById("color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");

// click mouseneter keypress

// input event anytime vallue changes detect it

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
// we dont need to calll setGradient because input calls itself and runs the function along with it
color2.addEventListener("input", setGradient);

// the other way is to  create oninput event in input and add its value as set gradient
// background color is in body

// jquery
$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});

// jquery made code very imperative  tell the code each step by step and what to do
// leads to bugs as next state sepends on previous state
// nested ifs one fail and it becomes hell
// that why we use react declarative

// innerHTML  break dom add element and create dom back takes times parse it so references maybe broken
// security problems
// location of severs
// how many trips
// size of files '
// we want to limit the dom manipulation and events'
