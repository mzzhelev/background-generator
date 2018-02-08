var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var btn = document.createElement("button");
var text = document.createTextNode("Generate Random Colors");
btn.appendChild(text);
body.appendChild(btn);

document.getElementsByTagName("input")[0].setAttribute("value", "#ff0000");
document.getElementsByTagName("input")[1].setAttribute("value", "#ffff00");

function generateColors() {
	document.getElementsByTagName("input")[0].setAttribute("value", '#'+Math.random().toString(16).substr(-6));
	document.getElementsByTagName("input")[1].setAttribute("value", '#'+Math.random().toString(16).substr(-6));
	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", generateColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
document.querySelector("h3").innerHTML = body.style.background + ";";
//document.querySelector("h3").innerHTML = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
